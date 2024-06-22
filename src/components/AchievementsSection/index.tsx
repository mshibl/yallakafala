import { Box } from "@mui/material";
import AchievementItem from "./AchievementItem";

const AchievementsSection = ({
  isMD,
  locale,
}: {
  isMD: boolean;
  locale: string;
}) => {
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
  );
};

export default AchievementsSection;
