"use client";

import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";
import { Box } from "@mui/material";
import Image from "next/image";
import { Suspense } from "react";

const ActivityItem = ({
  locale,
  englishTitle,
  arabicTitle,
  englishDescription,
  arabicDescription,
  isMD,
}: {
  locale: string;
  englishTitle: string;
  arabicTitle: string;
  englishDescription: string;
  arabicDescription: string;
  isMD: boolean;
}) => {
  return (
    <Box
      marginBottom="30px"
      fontSize={isMD ? "24px" : "20px"}
      lineHeight={isMD ? "38px" : "32px"}
    >
      <Box fontWeight="bold">
        {locale === "en" ? englishTitle : arabicTitle}
      </Box>
      {locale === "en" ? englishDescription : arabicDescription}
    </Box>
  );
};

const AchievementItem = ({
  locale,
  color,
  imgSrc,
  englishImgAlt,
  arabicImgAlt,
  achievementNumber,
  englishPrefix,
  arabicPrefix,
  englishAchievementDescription,
  arabicAchievementDescription,
}: {
  locale: string;
  color: string;
  imgSrc: string;
  englishImgAlt: string;
  arabicImgAlt: string;
  achievementNumber: string;
  englishPrefix?: string;
  arabicPrefix?: string;
  englishAchievementDescription: string;
  arabicAchievementDescription: string;
}) => {
  return (
    <Box bgcolor="white" display="flex" flexDirection="column">
      <Box bgcolor={color}>
        <Image
          src={imgSrc}
          alt={locale === "en" ? englishImgAlt : arabicImgAlt}
          width="255"
          height="150"
        />
      </Box>
      <Box
        padding="10px"
        lineHeight={1.3}
        color={color}
        bgcolor="#ffffff"
        height="166px"
        width="255px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {englishPrefix && arabicPrefix && (
          <Box fontWeight="bold" fontSize="20px">
            {locale === "en" ? englishPrefix : arabicPrefix}
          </Box>
        )}
        <Box fontWeight="700" fontSize="54px" lineHeight={1.3}>
          {achievementNumber}
        </Box>
        <Box fontWeight="bold" fontSize="20px" textAlign="center">
          {locale === "en"
            ? englishAchievementDescription
            : arabicAchievementDescription}
        </Box>
      </Box>
    </Box>
  );
};

const MilestoneItem = ({
  imgSrc,
  englishImgAlt,
  arabicImgAlt,
  align,
  locale,
  milestoneYear,
  englishMilestoneText,
  arabicMilestoneText,
  index,
}: {
  imgSrc: string;
  englishImgAlt: string;
  arabicImgAlt: string;
  align: "left" | "right";
  locale: string;
  milestoneYear: string;
  englishMilestoneText: string;
  arabicMilestoneText: string;
  index: number;
}) => {
  return (
    <Box
      id="milestone-box"
      position="absolute"
      top={`${index * 200}px`}
      left={align === "right" ? "50%" : "auto"}
      right={align === "right" ? "auto" : "50%"}
      width="100%"
      height="240px"
      display="flex"
      justifyContent={
        align === "right"
          ? locale === "en"
            ? "flex-start"
            : "flex-end"
          : locale === "en"
          ? "flex-end"
          : "flex-start"
      }
    >
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        width="230px"
        height="240px"
      >
        <Image
          src={imgSrc}
          alt={locale === "en" ? englishImgAlt : arabicImgAlt}
          fill={true}
          style={{
            objectFit: "contain",
            padding: "30px",
          }}
        />
      </Box>

      <Box
        id="dot"
        position="absolute"
        left={align === "right" ? "0%" : "100%"}
        top="100%"
        width="28px"
        height="28px"
        bgcolor="#87226C"
        borderRadius="50%"
        zIndex="1"
        style={{
          transform: "translate(-28%, 0%)",
        }}
      />

      <Box
        fontSize={40}
        fontWeight={700}
        color="#87226C"
        position="absolute"
        top="90%"
        lineHeight={1}
        paddingX="30px"
        textAlign={align === "right" ? "left" : "right"}
      >
        {milestoneYear}
        <Box
          fontSize="24px"
          color="#2194BC"
          fontWeight="normal"
          lineHeight={1.3}
        >
          {locale === "en" ? englishMilestoneText : arabicMilestoneText}
        </Box>
      </Box>
    </Box>
  );
};

const ActivitiesAndMilestonesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const isMD = useResponsiveBreakpoint("md");

  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          height="50vw"
          maxHeight="600px"
        >
          <Image
            src="/images/yk-team-1.jpg"
            alt="Yalla Kafala Team Photo"
            fill={true}
            style={{
              objectFit: "cover",
              padding: isMD ? "30px" : "0",
              borderRadius: isMD ? "50px" : "0",
            }}
          />
        </Box>

        <Box width="100%" display="flex" justifyContent="center">
          <Box maxWidth="700px" padding={isMD ? 0 : "30px"}>
            <Box
              style={{
                color: "#87226C",
                fontSize: isMD ? "32px" : "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {locale === "en" ? "Our Activities" : "أنشطتنا"}
            </Box>
            <ActivityItem
              locale={locale}
              englishTitle="Advocacy and Policy Influence"
              arabicTitle="الدعوة والتأثير على السياسات"
              englishDescription="We shape policies for alternative care options, focusing on the 'Small Home' model, in collaboration with the Ministry of Social Solidarity and local committees."
              arabicDescription="نشكل السياسات لخيارات الرعاية البديلة، مركزين على نموذج المنزل الصغير، بالتعاون مع وزارة التضامن الاجتماعي واللجان المحلية."
              isMD={isMD}
            />

            <ActivityItem
              locale={locale}
              isMD={isMD}
              englishTitle="Education and Training"
              arabicTitle="التعليم والتدريب"
              englishDescription="We have trained over 1,000 kafala families across 11 governorates and provided specialized training for Ministry of Social Solidarity committees."
              arabicDescription="قمنا بتدريب أكثر من 1000 عائلة كفالة عبر 11 محافظة وقدمنا تدريبًا متخصصًا للجان وزارة التضامن الاجتماعي."
            />

            <ActivityItem
              locale={locale}
              isMD={isMD}
              englishTitle="Community Building and Support"
              arabicTitle="بناء المجتمع والدعم"
              englishDescription="Our Kafala Family Support Center guides families through the Kafala process, providing medical, educational, social, and legal support."
              arabicDescription="مركز دعم الأسر الكفلاء يرشد الأسر خلال عملية الكفالة، ويوفر الدعم الطبي والتعليمي والاجتماعي والقانوني."
            />

            <ActivityItem
              locale={locale}
              isMD={isMD}
              englishTitle="Awareness and Outreach"
              englishDescription="Our digital campaigns and community engagement efforts have reached over 900,000 individuals, raising awareness about Kafala."
              arabicTitle="التوعية والتواصل"
              arabicDescription="وصلت حملاتنا الرقمية وجهود المشاركة المجتمعية لأكثر من 900,000 شخص، لتوعية الناس حول الكفالة."
            />

            <ActivityItem
              locale={locale}
              isMD={isMD}
              englishTitle="Safe Home, Safe Future (For Refugees & Migrants)"
              englishDescription="We empower refugee communities to care for unaccompanied children through training, support, and advocacy, collaborating with international partners."
              arabicTitle="منزل آمن، مستقبل آمن (للاجئين والمهاجرين)"
              arabicDescription="نمكن المجتمعات اللاجئة لرعاية الأطفال غير المصحوبين بالتدريب والدعم والدعوة، بالتعاون مع شركاء دوليين."
            />
          </Box>
        </Box>

        <Box
          id="achievements-section"
          bgcolor="#B9D7E0"
          width="100%"
          padding="30px"
          textAlign="center"
        >
          <Box
            style={{
              color: "#87226C",
              fontSize: isMD ? "32px" : "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {locale === "en" ? "Our Achievements" : "إنجازاتنا"}
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            gap="20px"
            flexWrap="wrap"
          >
            <AchievementItem
              locale={locale}
              color="#2194BC"
              imgSrc="/images/trained-kafala-families.svg"
              englishImgAlt="More than 1000 Trained Kafala Families"
              arabicImgAlt="أكثر من 1000 عائلة كفالة تم تدريبها"
              achievementNumber="1000+"
              englishPrefix="Trained"
              arabicPrefix="تم تدريب"
              englishAchievementDescription="Kafala Families"
              arabicAchievementDescription="عائلة كفالة"
            />

            <AchievementItem
              locale={locale}
              color="#87226C"
              imgSrc="/images/governorates.svg"
              englishImgAlt="Yalla Kafala is active in governorates"
              arabicImgAlt="يلا كفالة نشطة في 11 محافظة"
              achievementNumber="11"
              englishPrefix="Present in"
              arabicPrefix="متواجدون في"
              englishAchievementDescription="Governorates"
              arabicAchievementDescription="محافظة"
            />

            <AchievementItem
              locale={locale}
              color="#2194BC"
              imgSrc="/images/kafala-guided-families.svg"
              englishImgAlt="More than 2000 Guided Kafala Families"
              arabicImgAlt="أكثر من 2000 عائلة كفالة تم توجيهها"
              achievementNumber="2000+"
              englishPrefix="Guided"
              arabicPrefix="تم توجيه"
              englishAchievementDescription="Families through the kafala process"
              arabicAchievementDescription="أسرة خلال عملية الكفالة"
            />

            <AchievementItem
              locale={locale}
              color="#87226C"
              imgSrc="/images/community-events.svg"
              englishImgAlt="Yalla Kafala organized more than 600 community engagement events"
              arabicImgAlt="يلا كفالة نظمت أكثر من 600 فاعلية مشاركة مجتمعية"
              achievementNumber="600+"
              englishPrefix="Hosted"
              arabicPrefix="تم تنظيم"
              englishAchievementDescription="Community Engagement Events"
              arabicAchievementDescription="فاعلية مشاركة مجتمعية"
            />
          </Box>
        </Box>

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
      </Suspense>
    </ErrorBoundary>
  );
};

export default ActivitiesAndMilestonesPage;
