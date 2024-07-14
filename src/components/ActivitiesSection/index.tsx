"use client";

import { Box } from "@mui/material";
import ActivityItem from "./ActivityItem";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";

const ActivitiesSection = ({ locale }: { locale: string }) => {
  const isMD = useResponsiveBreakpoint("md");

  return (
    <Box
      id="activities-section"
      width="100%"
      display="flex"
      justifyContent="center"
    >
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
          arabicDescription="نساهم في تشكيل السياسات المُنظمة لخيارات الرعاية البديلة، مع التركيز على نموذج البيت الصغير، بالتعاون مع وزارة التضامن الاجتماعي واللجان المحلية."
          isMD={isMD}
        />

        <ActivityItem
          locale={locale}
          isMD={isMD}
          englishTitle="Education and Training"
          arabicTitle="التعليم والتدريب"
          englishDescription="We have trained over 1,000 kafala families across 11 governorates and provided specialized training for Ministry of Social Solidarity committees."
          arabicDescription="قمنا بتدريب أكثر من ١٠٠٠ أسرة كافلة عبر ١١ محافظة وقدمنا تدريبًا متخصصًا للجان المحلية في وزارة التضامن الاجتماعي."
        />

        <ActivityItem
          locale={locale}
          isMD={isMD}
          englishTitle="Community Building and Support"
          arabicTitle="بناء المجتمع والدعم"
          englishDescription="Our Kafala Family Support Center guides families through the Kafala process, providing medical, educational, social, and legal support."
          arabicDescription="يوجه مركز الدعم في يلا كفالة الأسر الكافلة خلال رحلة الكفالة، ويوفر الدعم الطبي والتعليمي والاجتماعي والقانوني."
        />

        <ActivityItem
          locale={locale}
          isMD={isMD}
          englishTitle="Awareness and Outreach"
          englishDescription="Our digital campaigns and community engagement efforts have reached over 900,000 individuals, raising awareness about Kafala."
          arabicTitle="التوعية والتواصل"
          arabicDescription="وصلت حملاتنا الرقمية وجهود المشاركة المجتمعية لأكثر من ٩٠٠،٠٠٠ شخص، لنشر الوعي حول الكفالة."
        />

        <ActivityItem
          locale={locale}
          isMD={isMD}
          englishTitle="Safe Home, Safe Future (For Refugees & Migrants)"
          englishDescription="We empower refugee communities to care for unaccompanied children through training, support, and advocacy, collaborating with international partners."
          arabicTitle="منزل آمن، مستقبل آمن (للاجئين والمهاجرين)"
          arabicDescription="نُمكن مجتمعات اللاجئين من رعاية الأطفال غير المصحوبين عبر التدريب والدعم والدعوة، بالتعاون مع شركاء دوليين."
        />
      </Box>
    </Box>
  );
};

export default ActivitiesSection;
