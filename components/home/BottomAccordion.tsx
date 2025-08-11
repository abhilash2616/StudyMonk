"use client"
import { useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

interface AccordionItem {
  id: string
  title: string
  content: string[]
}

const accordionData: AccordionItem[] = [
  {
    id: "panel1",
    title: "Why Choose Study Monk for Your Child's Cambridge Curriculum Journey?",
    content: [
      "As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they need to develop?",
      "How can I bridge the gap between what's taught in school and the specific needs of my child? Here at Study Monk, we address these concerns and go beyond traditional learning to empower your child on their Cambridge journey."
    ],
  },
  {
    id: "panel2",
    title: "3 Reasons Why We're the Perfect Partner?",
    content: [
      "As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they need to develop?",
      "How can I bridge the gap between what's taught in school and the specific needs of my child? Here at Study Monk, we address these concerns and go beyond traditional learning to empower your child on their Cambridge journey."
    ],
  },
  {
    id: "panel3",
    title: "How does Study Monks help with preparing for Cambridge exams?",
    content: [
      "As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they need to develop?",
      "How can I bridge the gap between what's taught in school and the specific needs of my child? Here at Study Monk, we address these concerns and go beyond traditional learning to empower your child on their Cambridge journey."
    ],
  },
  {
    id: "panel4",
    title: "How are classes conducted on the Study Monks platform?",
    content: [
      "As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they need to develop?",
      "How can I bridge the gap between what's taught in school and the specific needs of my child? Here at Study Monk, we address these concerns and go beyond traditional learning to empower your child on their Cambridge journey."
    ],
  },
]

function BottomAccordion() {
  const [expanded, setExpanded] = useState<string | false>("panel1")

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      {accordionData.map(({ id, title, content }) => {
        const isOpen = expanded === id
        return (
          <Accordion
            key={id}
            expanded={isOpen}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={
                <ArrowForwardIcon style={{ color: isOpen ? "#fff" : "#555" }} />
              }
              aria-controls={`${id}-content`}
              id={`${id}-header`}
              style={{
                backgroundColor: isOpen ? "#001F3F" : "#F0EEEE",
                color: isOpen ? "#fff" : "#001F3F",
                transition: "background-color 0.3s ease, color 0.3s ease"
              }}
              className="text-[15px] font-normal p-4"
            >
              <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="p-4">
              {content.map((text, idx) => (
                <Typography key={idx}>{text}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default BottomAccordion
