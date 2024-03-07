import React from "react";
import SectionTitle from "./sectionTitle";
import SectionList from "./sectionList";
import { useLocale } from "next-intl";

const KafalaSteps = () => {
  const locale = useLocale();
  const englishKafalaSteps = [
    "Meeting with applying families",
    "Submit a Kafala application form",
  ];
  const englishKafalaStepsTitle = "Kafala Steps";
  const arabicKafalaSteps = [
    "مقابلة الأسرة المتقدمة",
    "تقديم استمارة طلب الكفالة",
  ];
  const arabicKafalaStepsTitle = "خطوات الكفالة";
  const englishEvaluationStage = [
    "Initial evaluation visit",
    "Detailed evaluation of family",
    "Revision and accreditation of documents",
    "Passing the mandatory training",
    "Meeting of families with the local panel, assessment of the panel to all documents",
    "Approval by local panel followed by security query",
  ];
  const englishEvaluationStageTitle = "Evaluation stage";
  const arabicEvaluationStage = [
    "زيارة التقييم المبدئي",
    "التقييم التفصيلي للأسرة",
    "مراجعة واعتماد الاستمارات",
    "التدريب الإلزامي للأسرة واجتيازها التدريب",
    "مقابلة اللجنة المحلية بالأسرة ودراسة ملف الأسرة",
    "مرحلة الاستعلام الأمني",
  ];
  const arabicEvaluationStageTitle = "مرحلة التقييم";
  const englishTheJourneyToFindMyChild = [
    "Issuance of a viewing letter",
    "Meeting and matching",
    "Completion of 6 visits to the child parallel to medical examination of the child",
    "Providing a copy of the birth certificate to start a savings account for the child worth 3000 EGP, or to open a bank account in 'Nasser's Social Bank' to deposit 3000 EGP under the child's name.",
  ];
  const englishTheJourneyToFindMyChildTitle = "The Journey to Find my Child";
  const arabicTheJourneyToFindMyChild = [
    "إصدار خطاب المشاهدة",
    "المقابلة والموائمة",
    "القيام ب ٦ زيارات للطفل مع مراعاة القيام بالكشف الطبي على الطفل من قبل الأسرة المقبلة على الكفالة",
    "أخذ صورة من شهادة الميلاد من أجل فتح دفتر توفير للطفل بقيمة ٣٠٠٠ جنيه أو فتح حساب في بنك ناصر الاجتماعي بإسم الطفل يودع فيه مبلغ ٣٠٠٠ جنيه",
  ];
  const arabicTheJourneyToFindMyChildTitle = "رحلة البحث عن طفلي";
  const englishSocialCompatibilityStage = [
    "Signing the code of ethics",
    "Conveyance and signing the contract",
    "Transitional merge",
    "Submitting an application for the issuance of Kafala family cards",
  ];
  const englishSocialCompatibilityStageTitle = "Social compatibility stage";
  const arabicSocialCompatibilityStage = [
    "التوقيع على الميثاق الأخلاقي",
    "الاستلام وتوقيع العقد",
    "الدمج الانتقالي",
    "تقديم طلب استخراج كارنيه الأسر البديلة الكافلة",
  ];
  const arabicSocialCompatibilityStageTitle = "مرحلة التوافق الاجتماعي";
  return (
    <>
      <SectionTitle
        title={
          locale === "en" ? englishKafalaStepsTitle : arabicKafalaStepsTitle
        }
      />
      <SectionList
        content={locale === "en" ? englishKafalaSteps : arabicKafalaSteps}
      />
      <SectionTitle
        title={
          locale === "en"
            ? englishEvaluationStageTitle
            : arabicEvaluationStageTitle
        }
      />
      <SectionList
        content={
          locale === "en" ? englishEvaluationStage : arabicEvaluationStage
        }
      />
      <SectionTitle
        title={
          locale === "en"
            ? englishTheJourneyToFindMyChildTitle
            : arabicTheJourneyToFindMyChildTitle
        }
      />
      <SectionList
        content={
          locale === "en"
            ? englishTheJourneyToFindMyChild
            : arabicTheJourneyToFindMyChild
        }
      />
      <SectionTitle
        title={
          locale === "en"
            ? englishSocialCompatibilityStageTitle
            : arabicSocialCompatibilityStageTitle
        }
      />
      <SectionList
        content={
          locale === "en"
            ? englishTheJourneyToFindMyChild
            : arabicSocialCompatibilityStage
        }
      />
    </>
  );
};

export default KafalaSteps;
