import React from "react";
import { Grid } from "@mui/material";
import { fetchFaqs } from "@/src/utils/fetch-faqs";
import FaqItem from "./FAQItem";

export default async function FAQs({
  locale,
  firstFaqOpen,
  faqsCount,
  random,
}: {
  locale: string;
  firstFaqOpen?: boolean;
  faqsCount?: number;
  random?: boolean;
}) {
  let faqs = await fetchFaqs();

  if (random) {
    faqs.sort(() => Math.random() - 0.5);
  }

  if (faqsCount) {
    faqs = faqs.slice(0, faqsCount);
  }

  return (
    <Grid
      spacing={5}
      justifyContent={"center"}
      alignContent={"center"}
      container
      sx={{
        width: "100%",
        px: { xs: 10, md: 45 },
        pb: { xs: 10, md: 15 },
      }}
    >
      {faqs.map((faq, index) => {
        const title =
          locale === "en" ? faq.question.english : faq.question.arabic;
        const description =
          locale === "en" ? faq.answer.english : faq.answer.arabic;

        return (
          <FaqItem
            defaultExpanded={Boolean(firstFaqOpen && index === 0)}
            key={index}
            question={title}
            answer={description}
          />
        );
      })}
    </Grid>
  );
}
