import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/default-style/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/registry/default-style/ui/card"

interface FaqItem {
  question: string;
  answer: string;
  category?: string; // For categorized variant
}

interface FaqProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string;
  sectionDescription?: string;
  faqItems: FaqItem[];
  variant?: "list" | "accordion" | "categorized";
}

export default function Faq({ sectionTitle, sectionDescription, faqItems, variant = "accordion", className, ...props }: FaqProps) {
  const categories = Array.from(new Set(faqItems.map(item => item.category))).filter(Boolean) as string[];

  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            {sectionTitle && <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>}
            {sectionDescription && <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{sectionDescription}</p>}
          </div>
        </div>

        {variant === "list" && (
          <div className="max-w-3xl mx-auto space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        )}

        {variant === "accordion" && (
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {variant === "categorized" && (
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, catIndex) => (
              <Card key={catIndex} className="p-4">
                <CardHeader>
                  <CardTitle className="text-2xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems
                      .filter(item => item.category === category)
                      .map((item, index) => (
                        <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
            {/* FAQs without a category */}
            {faqItems.filter(item => !item.category).length > 0 && (
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-2xl">General</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems
                      .filter(item => !item.category)
                      .map((item, index) => (
                        <AccordionItem key={index} value={`item-general-${index}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
