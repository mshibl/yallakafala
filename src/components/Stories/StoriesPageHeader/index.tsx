import { Box, Typography } from "@mui/material";
import Image from "next/image";

const StoriesPageHeader = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: { xs: "center", md: "center" },
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ mb: "16px", display: { xs: "block", md: "none" } }}
      >
        {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
      </Typography>

      <Box>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ mb: "16px", display: { xs: "none", md: "block" } }}
        >
          {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
        </Typography>
        <Box bgcolor="#E4F8FF" padding="20px">
          <Typography variant="body1" color="text.secondary" fontSize="1rem">
            {locale === "ar"
              ? "في قلب كل طفل حلم بمنزل مليء بالحب، وفي قلب كل أسرة كفالة تبدأ رحلة ملؤها الأمل والحب. هنا، نحتفل بالروابط القوية التي تُشكّل من خلال الكفالة، معروضةً قصص حقيقية لأسر وأطفال يجتمعون معًا. هذه السرديات ليست مجرد حكايات عن الكفالة، بل هي شهادات على الحب اللامحدود، والمرونة، والفرح الذي تجلبه الكفالة إلى الحياة. استكشف هذه القصص الملهمة ودعها تؤثر فيك، وتعلمك، وربما، توجهك في رحلتك الخاصة نحو إحداث فارق."
              : "In the heart of every child lies a dream for a loving home, and in the heart of every Kafala family, a journey begins with hope and love. Here, we celebrate the powerful connections formed through Kafala, showcasing real stories of families and children coming together. These narratives are not just tales of guardianship but are testaments to the boundless love, resilience, and joy that Kafala brings into lives. Explore these inspiring stories and let them move you, teach you, and perhaps, guide you on your own journey towards making a difference."}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StoriesPageHeader;
