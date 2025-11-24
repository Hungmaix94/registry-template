import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default-style/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/default-style/ui/card"

interface BundleItem {
  name: string;
  description: string;
  price: string;
  items: string[];
  imageUrl?: string;
  href?: string;
}

interface BundlesProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
  bundles: BundleItem[];
  variant?: "list" | "grid" | "featured"; // Define 3 variations
}

export default function Bundles({ sectionTitle, bundles, variant = "grid", className, ...props }: BundlesProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated collections designed to offer great value.
            </p>
          </div>
        </div>

        {variant === "list" && (
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {bundles.map((bundle, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
                <div className="text-left">
                  <CardTitle>{bundle.name}</CardTitle>
                  <CardDescription className="mt-1">{bundle.description}</CardDescription>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                    {bundle.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-2xl font-bold">{bundle.price}</span>
                  {bundle.href && (
                    <Link href={bundle.href}>
                      <Button>View Bundle</Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {variant === "grid" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle, index) => (
              <Card key={index} className="flex flex-col">
                {bundle.imageUrl && (
                  <Image
                    src={bundle.imageUrl}
                    alt={bundle.name}
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                )}
                <CardHeader className="flex-grow">
                  <CardTitle>{bundle.name}</CardTitle>
                  <CardDescription className="mt-1">{bundle.description}</CardDescription>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                    {bundle.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold">{bundle.price}</span>
                    {bundle.href && (
                      <Link href={bundle.href}>
                        <Button>View Bundle</Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {variant === "featured" && bundles.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <Card className="flex flex-col md:flex-row gap-6 p-6">
              {bundles[0].imageUrl && (
                <Image
                  src={bundles[0].imageUrl}
                  alt={bundles[0].name}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full md:w-1/2 aspect-[3/2]"
                />
              )}
              <div className="flex flex-col gap-4 justify-center md:w-1/2">
                <CardTitle className="text-4xl font-bold">{bundles[0].name}</CardTitle>
                <CardDescription className="text-lg">{bundles[0].description}</CardDescription>
                <ul className="list-disc list-inside text-base text-muted-foreground">
                  {bundles[0].items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-3xl font-bold">{bundles[0].price}</span>
                  {bundles[0].href && (
                    <Link href={bundles[0].href}>
                      <Button size="lg">Get Featured Bundle</Button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
