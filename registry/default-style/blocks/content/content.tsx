import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default-style/ui/button"

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  body: string | string[]; // Can be a single string or an array of paragraphs
  imageUrl?: string;
  imageAlt?: string;
  cta?: {
    text: string;
    href: string;
  };
  variant?: "text-only" | "text-with-image" | "multi-column";
  imagePosition?: "left" | "right"; // For text-with-image variant
  columns?: 2 | 3; // For multi-column variant
}

export default function Content({
  title,
  body,
  imageUrl,
  imageAlt = "Content image",
  cta,
  variant = "text-only",
  imagePosition = "right",
  columns = 2,
  className,
  ...props
}: ContentProps) {
  const renderBody = () => {
    if (Array.isArray(body)) {
      return body.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ));
    }
    return <p className="text-muted-foreground leading-relaxed">{body}</p>;
  };

  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            {title && <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>}
          </div>
        </div>

        {variant === "text-only" && (
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            {renderBody()}
            {cta && (
              <div className="mt-6 text-center">
                <Link href={cta.href}>
                  <Button>{cta.text}</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {variant === "text-with-image" && (
          <div className={cn("grid gap-8 items-center", imagePosition === "left" ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-[2fr_1fr]")}>
            {imageUrl && imagePosition === "left" && (
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={350}
                className="rounded-lg object-cover w-full aspect-video"
              />
            )}
            <div className="space-y-4">
              {renderBody()}
              {cta && (
                <Link href={cta.href}>
                  <Button>{cta.text}</Button>
                </Link>
              )}
            </div>
            {imageUrl && imagePosition === "right" && (
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={350}
                className="rounded-lg object-cover w-full aspect-video"
              />
            )}
          </div>
        )}

        {variant === "multi-column" && (
          <div className={cn("grid gap-8", columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
            {Array.isArray(body) && body.map((colText, index) => (
              <div key={index} className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{colText}</p>
                {index === body.length - 1 && cta && ( // CTA only on the last column for simplicity
                  <Link href={cta.href}>
                    <Button>{cta.text}</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
