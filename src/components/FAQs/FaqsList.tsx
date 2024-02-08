import AppAccordion from "./Faq";
import { useLocale } from "next-intl";
import { google } from "googleapis";
import sanitizeHtml from "sanitize-html";

const cleanResponse = (dirty: string) => {
  return sanitizeHtml(dirty, {
    allowedTags: [],
    allowedAttributes: {
      a: [],
    },
    allowedIframeHostnames: [],
  });
};

export const getFaqs = async () => {
  try {
    // Auth
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    // Google Sheets Instance
    const sheets = google.sheets({ version: "v4", auth });
    const range = "FAQs";

    const response = await sheets.spreadsheets.values.get({
      // spreadsheetId: process.env.SHEET_ID,
      spreadsheetId: "1JvoZSZAPaRl-UJehW941bgCWUrtE_zHbL8NCCYpmR-E",
      range,
    });
    if (response.status !== 200 || !response.data.values) {
      return "Error";
    }

    const rawFaqs = response.data.values.slice(1);
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
    console.error(error);
    return "Error";
  }
};
const AppAccordionList = async () => {
  const locale = useLocale();
  const faqs = await getFaqs();
  if (!faqs) return <div>loading...</div>;
  if (faqs === "Error") {
    return <div>Error</div>;
  }

  return (
    <>
      {faqs.map((faq, index) => {
        const title =
          locale === "en" ? faq.question.english : faq.question.arabic;
        const description =
          locale === "en" ? faq.answer.english : faq.answer.arabic;

        return (
          <AppAccordion key={index} question={title} answer={description} />
        );
      })}
    </>
  );
};

export default AppAccordionList;
