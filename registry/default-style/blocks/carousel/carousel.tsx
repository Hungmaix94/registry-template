"use client"
import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/registry/default-style/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

type CarouselItem = {
  name: string
  title: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
  options?: EmblaOptionsType
  showArrows?: boolean
  showIndicators?: boolean
  autoplay?: boolean
  autoplayOptions?: Parameters<typeof Autoplay>[0]
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  options = { loop: true },
  showArrows = true,
  showIndicators = true,
  autoplay = true,
  autoplayOptions,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, autoplay ? [Autoplay(autoplayOptions)] : [])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="rounded-full object-cover w-[400px] h-[400px]"
                />
                <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
                <p className="text-lg text-muted-foreground">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full",
                selectedIndex === index ? "bg-primary" : "bg-gray-300"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
