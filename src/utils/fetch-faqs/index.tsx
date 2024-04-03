import { DATA_SOURCES } from "@/src/constants/data-sources";
import { loadGoogleSheet } from "../google-api";
import { cleanResponse } from "../string-utils";

function parseFaqs(data: any) {
  const [publish, question_en, question_ar, answer_en, answer_ar, slug] = data;

  if (!question_en && !question_ar) {
    throw new Error("FAQ question is missing");
  }

  if (!answer_ar && !answer_en) {
    throw new Error("FAQ answer is missing");
  }

  const cleanEnglishQuestion = cleanResponse(question_en?.trim() || "");
  const cleanArabicQuestion = cleanResponse(question_ar?.trim() || "");
  const cleanArabicAnswer = cleanResponse(answer_ar?.trim() || "");
  const cleanEnglishAnswer = cleanResponse(answer_en?.trim() || "");

  const arabicAnswer = cleanArabicAnswer || cleanEnglishAnswer;
  const englishAnswer = cleanEnglishAnswer || cleanArabicAnswer;

  const arabicQuestion = cleanArabicQuestion || cleanEnglishQuestion;
  const englishQuestion = cleanEnglishQuestion || cleanArabicQuestion;

  return {
    publish: publish === "TRUE",
    arabic_question: arabicQuestion,
    english_question: englishQuestion,
    arabic_answer: arabicAnswer,
    english_answer: englishAnswer,
  };
}

export const fetchFaqs = async () => {
  try {
    const response = await loadGoogleSheet({
      spreadsheetId: DATA_SOURCES.FAQs.FAQS_SPREADSHEET_ID,
      range: DATA_SOURCES.FAQs.FAQS_SHEET_NAME,
    });

    const rawFaqs = response.slice(1);

    const faqs = rawFaqs.map((faq) => {
      return parseFaqs(faq);
    });
    const publishedFaqs = faqs.filter((faq) => faq.publish);

    return publishedFaqs;
  } catch (error) {
    console.error("Error fetching FAQs", error);

    // Rethrow the error so it can be caught by the ErrorBoundary
    throw error;
  }
};
