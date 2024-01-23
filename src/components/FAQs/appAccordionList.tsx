import React, { use } from "react";
import AppAccordion from "./appAccordion";
import { useLocale } from "next-intl";

const faqs = [
  {
    question: {
      english: "What is Artificial Intelligence?",
      arabic: "ما هو الذكاء الاصطناعي؟",
    },
    answer: {
      english:
        "Understand the fundamental concept of AI and its role in technology.",
      arabic: "فهم المفهوم الأساسي للذكاء الاصطناعي ودوره في التكنولوجيا.",
    },
  },
  {
    question: {
      english: "Types of AI: Differentiate Between Narrow and General AI",
      arabic:
        "أنواع الذكاء الاصطناعي: التمييز بين الذكاء الاصطناعي الضيق والعام",
    },
    answer: {
      english:
        "Explore the distinctions between narrow AI, which is task-specific, and general AI, which exhibits human-like intelligence across various tasks.",
      arabic:
        "استكشاف الاختلافات بين الذكاء الاصطناعي الضيق ، الذي هو محدد للمهمة ، والذكاء الاصطناعي العام ، الذي يظهر ذكاءً شبيهًا بالإنسان في مهام متنوعة.",
    },
  },
  {
    question: {
      english: "Machine Learning vs. Deep Learning: Unraveling the Differences",
      arabic: "تعلم الآلة مقابل التعلم العميق: فك تشفير الفروق",
    },
    answer: {
      english:
        "Delve into the distinctions between machine learning and deep learning, two key components of AI.",
      arabic:
        "استكشاف الاختلافات بين تعلم الآلة وتعلم العمق ، وهما مكونين رئيسيين في مجال الذكاء الاصطناعي.",
    },
  },
  {
    question: {
      english: "Real-world Applications of AI",
      arabic: "تطبيقات الذكاء الاصطناعي في العالم الحقيقي",
    },
    answer: {
      english:
        "Investigate how AI is applied in various industries, such as healthcare, finance, and autonomous vehicles.",
      arabic:
        "التحقيق في كيفية تطبيق الذكاء الاصطناعي في مختلف الصناعات ، مثل الرعاية الصحية والتمويل والمركبات الذاتية القيادة.",
    },
  },
  {
    question: {
      english: "Ethical Considerations in AI Development",
      arabic: "الاعتبارات الأخلاقية في تطوير الذكاء الاصطناعي",
    },
    answer: {
      english:
        "Discuss the ethical challenges and considerations associated with the development and use of AI technologies.",
      arabic:
        "مناقشة التحديات والاعتبارات الأخلاقية المتعلقة بتطوير واستخدام تقنيات الذكاء الاصطناعي.",
    },
  },
  {
    question: {
      english: "Impact of AI on Employment: Job Displacement vs. Job Creation",
      arabic:
        "تأثير الذكاء الاصطناعي على التوظيف: إزالة الوظائف مقابل إنشاء وظائف جديدة",
    },
    answer: {
      english:
        "Analyze the impact of AI on the job market, considering both potential job displacement and the creation of new opportunities.",
      arabic:
        "تحليل تأثير الذكاء الاصطناعي على سوق العمل ، مع النظر في إمكانية إزالة الوظائف وإنشاء فرص جديدة.",
    },
  },
  {
    question: {
      english: "AI and Creativity: Can Machines Be Truly Creative?",
      arabic: "الذكاء الاصطناعي والإبداع: هل يمكن للآلات أن تكون حقًا مبدعة؟",
    },
    answer: {
      english:
        "Explore the intersection of AI and creativity, examining whether machines can exhibit true creative abilities.",
      arabic:
        "استكشاف تقاطع الذكاء الاصطناعي والإبداع ، مع النظر في ما إذا كانت الآلات قادرة على عرض قدرات إبداعية حقيقية.",
    },
  },
  {
    question: {
      english: "Challenges in AI Research and Development",
      arabic: "التحديات في البحث والتطوير في مجال الذكاء الاصطناعي",
    },
    answer: {
      english:
        "Identify the current challenges and hurdles faced by researchers and developers working in the field of AI.",
      arabic:
        "تحديد التحديات الحالية والعقبات التي تواجه الباحثين والمطورين العاملين في مجال الذكاء الاصطناعي.",
    },
  },
  {
    question: {
      english: "The Role of AI in Solving Global Issues",
      arabic: "دور الذكاء الاصطناعي في حل القضايا العالمية",
    },
    answer: {
      english:
        "Examine how AI can contribute to addressing global challenges, such as climate change, healthcare crises, and poverty.",
      arabic:
        "فحص كيف يمكن للذكاء الاصطناعي أن يساهم في التعامل مع التحديات العالمية ، مثل تغير المناخ وأزمات الرعاية الصحية والفقر.",
    },
  },
  {
    question: {
      english: "Future of AI: Predictions and Speculations",
      arabic: "مستقبل الذكاء الاصطناعي: توقعات وتأملات",
    },
    answer: {
      english:
        "Speculate on the future developments and potential breakthroughs in the field of artificial intelligence.",
      arabic:
        "التأمل في التطورات المستقبلية والاختراقات المحتملة في مجال الذكاء الاصطناعي.",
    },
  },
];
const AppAccordionList = () => {
  const locale = useLocale();

  return (
    <>
      {faqs.map((faq, index) => {
        const title =
          locale === "en" ? faq.question.english : faq.question.arabic;
        const description =
          locale === "en" ? faq.answer.english : faq.answer.arabic;

        return (
          <AppAccordion
            key={index}
            question={title.toString()}
            answer={description.toString()}
          />
        );
      })}
    </>
  );
};

export default AppAccordionList;
