import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/default-style/ui/card"

interface CategoryItem {
  name: string;
  description?: string;
  iconUrl?: string; // For simple list
  imageUrl?: string; // For grid and featured
  href: string;
}

interface CategoriesProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
  categories: CategoryItem[];
  variant?: "list" | "grid" | "featured"; // Define 3 variations
}

export default function Categories({ sectionTitle, categories, variant = "grid", className, ...props }: CategoriesProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our wide range of categories.
            </p>
          </div>
        </div>

        {variant === "list" && (
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                {category.iconUrl && (
                  <Image
                    src={category.iconUrl}
                    alt={category.name}
                    width={32}
                    height={32}
                    className="flex-shrink-0"
                  />
                )}
                <div className="flex flex-col text-left">
                  <span className="text-lg font-semibold">{category.name}</span>
                  {category.description && <span className="text-sm text-muted-foreground">{category.description}</span>}
                </div>
              </Link>
            ))}
          </div>
        )}

        {variant === "grid" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <Link href={category.href} className="flex flex-col items-center gap-4">
                  {category.imageUrl && (
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover aspect-square"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    {category.description && <CardDescription>{category.description}</CardDescription>}
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        )}

        {variant === "featured" && categories.length > 0 && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {categories.slice(0, 2).map((category, index) => ( // Displaying 2 featured categories
              <Card key={index} className="flex flex-col items-center text-center p-8">
                <Link href={category.href} className="flex flex-col items-center gap-4">
                  {category.imageUrl && (
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="rounded-full object-cover aspect-square"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">{category.name}</CardTitle>
                    {category.description && <CardDescription className="text-lg">{category.description}</CardDescription>}
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
