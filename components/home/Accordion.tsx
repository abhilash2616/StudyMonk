"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionData {
  value: string
  title: string
  content: string[]
}

const accordionItems: AccordionData[] = [
  {
    value: "item-1",
    title: "Mindful Mastery",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    value: "item-2",
    title: "Guided Curiosity",
    content: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    value: "item-3",
    title: "Digital Serenity",
    content: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
  {
    value: "item-4",
    title: "Expressive Confidence",
    content: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
]

function AccordionComponent() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {accordionItems.map(({ value, title, content }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionComponent