"use client";

import { Box } from "@mui/material";
import AchievementItem from "./AchievementItem";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";

const AchievementsSection = ({ locale }: { locale: string }) => {
  const isMD = useResponsiveBreakpoint("md");

  return (
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

      <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
        <AchievementItem
          locale={locale}
          color="#2194BC"
          imgSrc="/images/trained-kafala-families.svg"
          englishImgAlt="More than 1000 Trained Kafala Families"
          arabicImgAlt="أكثر من 1000 عائلة كفالة تم تدريبها"
          achievementNumber="1000+"
          englishPrefix="Trained"
          arabicPrefix="دربنا"
          englishAchievementDescription="Kafala Families"
          arabicAchievementDescription="أسرة كفالة"
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
          arabicPrefix="وجهنا"
          englishAchievementDescription="Families through the kafala process"
          arabicAchievementDescription="أسرة خلال رحلة الكفالة"
        />

        <AchievementItem
          locale={locale}
          color="#87226C"
          imgSrc="/images/community-events.svg"
          englishImgAlt="Yalla Kafala organized more than 10 community engagement events"
          arabicImgAlt="يلا كفالة نظمت أكثر من 10 فاعلية مشاركة مجتمعية"
          achievementNumber="10+"
          englishPrefix="Hosted"
          arabicPrefix="نظمنا"
          englishAchievementDescription="Community Engagement Events"
          arabicAchievementDescription="فعاليات مجتمعية بمشاركة + ٦٠٠ أسرة كافلة"
        />
      </Box>
    </Box>
  );
};

export default AchievementsSection;
