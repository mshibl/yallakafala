import FaqItem from "./FaqItem";
import { useLocale } from "next-intl";
import { loadGoogleSheet } from "@/src/utils/google-api";
import { cleanResponse } from "@/src/utils/string-utils";
import { Suspense, use, useCallback } from "react";
import { DATA_SOURCES } from "@/src/constants/data-sources";

export const fetchFaqs = async () => {
  try {
    const response = await loadGoogleSheet({
      spreadsheetId: DATA_SOURCES.FAQs.FAQS_SPREADSHEET_ID,
      range: DATA_SOURCES.FAQs.FAQS_SHEET_NAME,
    });

    const rawFaqs = response.slice(1);

    const faqs = rawFaqs.map((faq) => {
      return {
        question: {
          english: cleanResponse(faq[0]),
          arabic: cleanResponse(faq[1]),
        },
        answer: {
          english: cleanResponse(faq[2]),
          arabic: cleanResponse(faq[3]),
        },
      };
    });

    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
};

const FaqsList = () => {
  const locale = useLocale();
  const faqs = use(fetchFaqs());

  return (
    <>
      {faqs.map((faq, index) => {
        const title =
          locale === "en" ? faq.question.english : faq.question.arabic;
        const description =
          locale === "en" ? faq.answer.english : faq.answer.arabic;

        return <FaqItem key={index} question={title} answer={description} />;
      })}
    </>
  );
};

export default FaqsList;
