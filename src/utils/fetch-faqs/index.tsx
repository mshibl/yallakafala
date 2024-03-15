import { DATA_SOURCES } from "@/src/constants/data-sources";
import { loadGoogleSheet } from "../google-api";
import { cleanResponse } from "../string-utils";

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
