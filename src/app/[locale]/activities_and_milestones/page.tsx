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
  imgAlt,
  achievementNumber,
  englishPrefix,
  arabicPrefix,
  englishAchievementDescription,
  arabicAchievementDescription,
}: {
  locale: string;
  color: string;
  imgSrc: string;
  imgAlt: string;
  achievementNumber: string;
  englishPrefix?: string;
  arabicPrefix?: string;
  englishAchievementDescription: string;
  arabicAchievementDescription: string;
}) => {
  return (
    <Box bgcolor="white" display="flex" flexDirection="column">
      <Box bgcolor={color}>
        <Image src={imgSrc} alt={imgAlt} width="255" height="150" />
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
            src="/images/yk-team-1.svg"
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

        <Box bgcolor="#B9D7E0" width="100%" padding="30px" textAlign="center">
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
              imgAlt="Trained Kafala Families"
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
              imgAlt="Governorates"
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
              imgAlt="Kafala Guided Families"
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
              imgAlt="Community Events"
              achievementNumber="600+"
              englishPrefix="Hosted"
              arabicPrefix="تم تنظيم"
              englishAchievementDescription="Community Engagement Events"
              arabicAchievementDescription="فاعلية مشاركة مجتمعية"
            />
          </Box>
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ActivitiesAndMilestonesPage;
