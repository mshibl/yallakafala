import { Box } from "@mui/material";
import MilestoneItem from "./MilestoneItem";

const MilestonesSection = ({
  isMD,
  locale,
}: {
  isMD: boolean;
  locale: string;
}) => {
  return (
    <Box
      id="milestones-section"
      position="relative"
      width="100%"
      height="2100px"
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
          />

          <MilestoneItem
            imgSrc="/images/Rasha-Mostage-Article-1.jpg"
            englishImgAlt="Yalla Kafala became an initiative in 2017"
            arabicImgAlt="يلا كفالة أصبحت مبادرة في 2017"
            align="left"
            locale={locale}
            milestoneYear="2017"
            englishMilestoneText="Yalla Kafala became an initiative"
            arabicMilestoneText="يلا كفالة أصبحت مبادرة"
            index={1}
          />

          <MilestoneItem
            imgSrc="/images/Mostafa-party-1.jpg"
            englishImgAlt="Yalla Kafala became an NGO in the US in 2020"
            arabicImgAlt="يلا كفالة أصبحت منظمة غير حكومية في الولايات المتحدة في 2020"
            align="right"
            locale={locale}
            milestoneYear="2020"
            englishMilestoneText="Yalla Kafala became an NGO in the US"
            arabicMilestoneText="يلا كفالة أصبحت منظمة غير حكومية في الولايات المتحدة"
            index={2}
          />

          <MilestoneItem
            imgSrc="/images/YK-Egypt-NGO.jpg"
            englishImgAlt="Yalla Kafala became an NGO in Egypt in 2021"
            arabicImgAlt="يلا كفالة أصبحت منظمة غير حكومية في مصر في 2021"
            align="left"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Yalla Kafala became an NGO in Egypt"
            arabicMilestoneText="يلا كفالة أصبحت منظمة غير حكومية في مصر"
            index={3}
          />

          <MilestoneItem
            imgSrc="/images/first-kafala-is-love-event.jpg"
            englishImgAlt="First Kafala is Love event in 2021"
            arabicImgAlt="أول حدث الكفالة هى الحب في 2021"
            align="right"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="First Kafala is Love event"
            arabicMilestoneText="أول حدث الكفالة هى الحب"
            index={4}
          />

          <MilestoneItem
            imgSrc="/images/Positive-Discipline-session.jpg"
            englishImgAlt="Started Positive Discipline and How to tell the truth about kafala sessions in 2021"
            arabicImgAlt="بدأت جلسات الانضباط الإيجابي وكيف تقول الحقيقة عن الكفالة في 2021"
            align="left"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Started “Positive Discipline” and “How to tell the truth about kafala” sessions"
            arabicMilestoneText="بدأت جلسات “الانضباط الإيجابي” و “كيف تقول الحقيقة عن الكفالة”"
            index={5}
          />

          <MilestoneItem
            imgSrc="/images/Family-Support-Center.jpg"
            englishImgAlt="Launched the Training Center and the Family Support Center in 2021"
            arabicImgAlt="أطلق مركز التدريب ومركز دعم الأسر الكفلاء في 2021"
            align="right"
            locale={locale}
            milestoneYear="2021"
            englishMilestoneText="Launched the Training Center and the Family Support Center"
            arabicMilestoneText="أطلق مركز التدريب ومركز دعم الأسر الكفلاء"
            index={6}
          />

          <MilestoneItem
            imgSrc="/images/MoU-with-MoSS.jpg"
            englishImgAlt="Signed a Memorandum of Understanding (MoU) with the Ministry of Social Solidarity (MoSS) and launched the Kafala Bus in 2023"
            arabicImgAlt="وقعت مذكرة تفاهم مع وزارة التضامن الاجتماعي وأطلقت حافلة الكفالة في 2023"
            align="left"
            locale={locale}
            milestoneYear="2023"
            englishMilestoneText="Signed a Memorandum of Understanding (MoU) with the Ministry of Social Solidarity (MoSS) and launched the Kafala Bus"
            arabicMilestoneText="وقعت مذكرة تفاهم مع وزارة التضامن الاجتماعي وأطلقت حافلة الكفالة"
            index={7}
          />

          <MilestoneItem
            imgSrc="/images/YK-family-house.svg"
            englishImgAlt="Opened the first Yalla Kafala Family House in 2024"
            arabicImgAlt="افتتح أول منزل أسرة يلا كفالة في 2024"
            align="right"
            locale={locale}
            milestoneYear="2024"
            englishMilestoneText="Opened the first Yalla Kafala Family House"
            arabicMilestoneText="افتتح أول منزل أسرة يلا كفالة"
            index={8}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MilestonesSection;
