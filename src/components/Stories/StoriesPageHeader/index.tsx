import { Box } from "@mui/material";
import Image from "next/image";

const StoriesPageHeader = ({ locale }: { locale: string }) => {
  return (
    <Box sx={{ padding: "16px", textAlign: { xs: "center", md: "start" } }}>
      <Box sx={{ mb: "8px", display: { xs: "block", md: "none" } }}>
        <h2>{locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}</h2>
      </Box>
      <Box display="flex" flexDirection={{ xs: "column", md: "row-reverse" }}>
        <Box m="16px">
          <Image
            src="/images/gpt_child_hugging.png"
            alt={locale === "en" ? "Yalla Kafala" : "يلا كفالة"}
            style={{ objectFit: "contain" }}
            width={250}
            height={250}
          />
        </Box>
        <Box flexBasis="150%">
          <Box sx={{ mb: "8px", display: { xs: "none", md: "block" } }}>
            <h2>{locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}</h2>
          </Box>
          {locale === "ar"
            ? "في قلب كل طفل حلم بمنزل مليء بالحب، وفي قلب كل أسرة كفالة تبدأ رحلة ملؤها الأمل والحب. هنا، نحتفل بالروابط القوية التي تُشكّل من خلال الكفالة، معروضةً قصص حقيقية لأسر وأطفال يجتمعون معًا. هذه السرديات ليست مجرد حكايات عن الكفالة، بل هي شهادات على الحب اللامحدود، والمرونة، والفرح الذي تجلبه الكفالة إلى الحياة. استكشف هذه القصص الملهمة ودعها تؤثر فيك، وتعلمك، وربما، توجهك في رحلتك الخاصة نحو إحداث فارق."
            : "In the heart of every child lies a dream for a loving home, and in the heart of every Kafala family, a journey begins with hope and love. Here, we celebrate the powerful connections formed through Kafala, showcasing real stories of families and children coming together. These narratives are not just tales of guardianship but are testaments to the boundless love, resilience, and joy that Kafala brings into lives. Explore these inspiring stories and let them move you, teach you, and perhaps, guide you on your own journey towards making a difference."}
        </Box>
      </Box>
    </Box>
  );
};

export default StoriesPageHeader;
