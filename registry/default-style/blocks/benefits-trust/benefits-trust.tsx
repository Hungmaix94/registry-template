import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Interface for a single benefit or trust item
interface BenefitTrustItem {
  title: string
  description: string
  icon?: React.ElementType
  imageUrl?: string
}

// Props for the main BenefitsTrust component
interface BenefitsTrustProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string
  sectionDescription?: string
  items: BenefitTrustItem[]
  variant?: "icon-list" | "trust-badges" | "detailed-benefit"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Sub-component for the 'icon-list' variant
const IconListBenefit = ({ items }: { items: readonly BenefitTrustItem[] }) => (
  <motion.div
    className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {items.map((item, index) => (
      <motion.div key={index} variants={itemVariants}>
        <Card className="flex flex-col items-center text-center p-6 h-full">
          {item.icon && (
            <CardHeader className="p-0 mb-4">
              <item.icon className="h-12 w-12 text-primary" />
            </CardHeader>
          )}
          <CardContent className="flex flex-col gap-2 p-0">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
)

// Sub-component for the 'trust-badges' variant
const TrustBadges = ({ items }: { items: readonly BenefitTrustItem[] }) => (
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {items.map((item, index) => (
      <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center p-4">
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={100}
            height={100}
            className="object-contain"
          />
        )}
        <p className="text-sm text-muted-foreground mt-2">{item.title}</p>
      </motion.div>
    ))}
  </motion.div>
)

// Sub-component for the 'detailed-benefit' variant
const DetailedBenefit = ({ item }: { item: BenefitTrustItem }) => (
  <motion.div
    className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{item.title}</h3>
      <p className="text-lg text-muted-foreground">{item.description}</p>
    </div>
    <div className="flex items-center justify-center">
      {item.imageUrl ? (
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full aspect-video"
        />
      ) : (
        item.icon && <item.icon className="h-24 w-24 text-primary" />
      )}
    </div>
  </motion.div>
)

export default function BenefitsTrust({
  sectionTitle,
  sectionDescription,
  items,
  variant = "icon-list",
  className,
  ...props
}: BenefitsTrustProps) {
  const renderContent = () => {
    if (!items || items.length === 0) {
      return (
        <p className="text-center text-muted-foreground">No items to display.</p>
      )
    }

    switch (variant) {
      case "icon-list":
        return <IconListBenefit items={items} />
      case "trust-badges":
        return <TrustBadges items={items} />
      case "detailed-benefit":
        return <DetailedBenefit item={items[0]} />
      default:
        // Render nothing if variant is not recognized
        return null
    }
  }

  return (
    // @ts-ignore
    <motion.section
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    >
      <div className="container px-4 md:px-6">
        {(sectionTitle || sectionDescription) && (
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            variants={itemVariants}
          >
            <div className="space-y-2">
              {sectionTitle && (
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {sectionTitle}
                </h2>
              )}
              {sectionDescription && (
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {sectionDescription}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {renderContent()}
      </div>
    </motion.section>
  )
}