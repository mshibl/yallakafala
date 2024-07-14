"use client";

import { Box } from "@mui/material";
import MilestoneItem from "./MilestoneItem";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";

const MilestonesSection = ({ locale }: { locale: string }) => {
  const isMD = useResponsiveBreakpoint("md");

  return (
    <Box
      id="milestones-section"
      position="relative"
      width="100%"
      height="2300px"
      padding={"30px"}
      marginBottom="30px"
      display="flex"
      justifyContent="center"
    >
      <Box
        maxWidth="700px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          style={{
            color: "#87226C",
            fontSize: isMD ? "32px" : "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {locale === "en"
            ? "Yalla Kafala Milestones"
            : "يلا كفالة عبر السنوات"}
        </Box>

        <Box position="relative" width="100%" height="100%">
          <Box
            id="center-vertical-line"
            position="absolute"
            left="50%"
            width="12px"
            height="100%"
            bgcolor="#87226C"
            borderRadius="6px"
            zIndex="1"
          />

          <MilestoneItem
            imgSrc="/images/Rasha-Mostafa-2014.jpg"
            englishImgAlt="Rasha adopted Mostafa in 2014"
            arabicImgAlt="رشا تكفل مصطفى في 2014"
            align="right"
            locale={locale}
            milestoneYear="2014"
            englishMilestoneText="Rasha adopted Mostafa"
            arabicMilestoneText="رشا تكفل مصطفى"
            index={0}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/Rasha-Mostage-Article-1.jpg"
            englishImgAlt="Yalla Kafala became an initiative in 2017"
            arabicImgAlt="يلا كفالة أصبحت مبادرة رسمية في 2017"
            align="left"
            locale={locale}
            milestoneYear="2017"
            englishMilestoneText="Yalla Kafala became an initiative"
            arabicMilestoneText="يلا كفالة مبادرة رسمية"
            index={1}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/Mostafa-party-1.jpg"
            englishImgAlt="Yalla Kafala became an NGO in the US in 2020"
            arabicImgAlt="يلا كفالة أصبحت منظمة غير حكومية في الولايات المتحدة في 2020"
            align="right"
            locale={locale}
            milestoneYear="2020"
            englishMilestoneText="Yalla Kafala became an NGO in the US"
            arabicMilestoneText="الاعلان عن يلا كفالة منظمة غير ربحية في الولايات المتحدة"
            index={2}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/YK-Egypt-NGO.jpg"
            englishImgAlt="Yalla Kafala became an NGO in Egypt in 2021"
            arabicImgAlt="يلا كفالة أصبحت منظمة غير حكومية في مصر في 2021"
            align="left"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Yalla Kafala became an NGO in Egypt"
            arabicMilestoneText="الاعلان عن يلا كفالة منظمة غير ربحية في مصر"
            index={3}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/first-kafala-is-love-event.jpg"
            englishImgAlt="First Kafala is Love event in 2021"
            arabicImgAlt="أول حدث الكفالة هى الحب في 2021"
            align="right"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="First Kafala is Love event"
            arabicMilestoneText="إطلاق أول حفل سنوي بأسم 'الكفالة حب'"
            index={4}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/Positive-Discipline-session.jpg"
            englishImgAlt="Started Positive Discipline and How to tell the truth about kafala sessions in 2021"
            arabicImgAlt="بدأت جلسات الانضباط الإيجابي وكيف تقول الحقيقة عن الكفالة في 2021"
            align="left"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Started “Positive Discipline” and “How to tell the truth about kafala” sessions"
            arabicMilestoneText="تقديم ورش عمل التربية الإيجابية ومحاضرات 'إخبار حقيقة الكفالة'"
            index={5}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/Family-Support-Center.jpg"
            englishImgAlt="Launched the Training Center and the Family Support Center in 2021"
            arabicImgAlt="أطلق مركز التدريب ومركز دعم الأسر الكفلاء في 2021"
            align="right"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Launched the Training Center and the Family Support Center"
            arabicMilestoneText="افتتاح مركز التدريب ومركز الدعم"
            index={6}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/MoU-with-MoSS.jpg"
            englishImgAlt="Signed a Memorandum of Understanding (MoU) with the Ministry of Social Solidarity (MoSS) and launched the Kafala Bus in 2023"
            arabicImgAlt="وقعت مذكرة تفاهم مع وزارة التضامن الاجتماعي وأطلقت حافلة الكفالة في 2023"
            align="left"
            locale={locale}
            milestoneYear="2023"
            englishMilestoneText="Signed a Memorandum of Understanding (MoU) with the Ministry of Social Solidarity (MoSS) and launched the Kafala Bus"
            arabicMilestoneText="توقيع بروتوكول تعاون بين يلا كفالة ووزارة التضامن الاجتماعي"
            index={7}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/kafala-bus.jpg"
            englishImgAlt="Launched the Kafala Bus campaign in 2023"
            arabicImgAlt="إطلاق حملة 'أوتوبيس الكفالة' في ٢٠٢٣"
            align="right"
            locale={locale}
            milestoneYear="2023"
            englishMilestoneText="Launched the Kafala Bus campaign"
            arabicMilestoneText="إطلاق حملة 'أوتوبيس الكفالة'"
            index={8}
            isMD={isMD}
          />

          <MilestoneItem
            imgSrc="/images/YK-family-house.svg"
            englishImgAlt="Opening the first Yalla Kafala Family House in 2024"
            arabicImgAlt="افتتح أول منزل أسرة يلا كفالة في 2024"
            align="left"
            locale={locale}
            milestoneYear="2024"
            englishMilestoneText="Opening the first Yalla Kafala Family House"
            arabicMilestoneText="تدشين أول بيت صغير"
            index={9}
            isMD={isMD}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MilestonesSection;
