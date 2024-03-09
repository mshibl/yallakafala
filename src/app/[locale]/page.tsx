import { Box, Typography } from "@mui/material";
import Image from "next/image";
import QuickDonate from "@/src/components/QuickDonate";

const Home = ({ params: { locale } }: { params: { locale: "ar" | "en" } }) => {
  return (
    <Box>
      <Box display="flex" flexDirection={{ xs: "column-reverse", md: "row" }}>
        <Box
          flex={1}
          bgcolor="primary.main"
          color="#ffffff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding="40px"
        >
          <Typography
            fontSize={{ xs: "25px", md: "40px" }}
            lineHeight={1.5}
            paddingBottom="20px"
          >
            {locale === "ar"
              ? "شاركنا فى بناء أفضل مستقبل ممكن لفاقدي الرعاية الأسرية والأسر الكافلة"
              : "Join us in building a better future for orphans and Kafala families"}
          </Typography>
          <QuickDonate locale={locale} />
        </Box>
        <Box
          maxWidth="100%"
          position="relative"
          width={500}
          height={{
            xs: 350,
            md: 500,
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Yalla Kafala hero image"
            style={{ objectFit: "cover" }}
            fill={true}
            sizes="100% 100%"
          />
        </Box>
      </Box>
      <Box height={300} />
    </Box>
  );
};

export default Home;
