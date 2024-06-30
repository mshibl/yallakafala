import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { title } from "process";
import React from "react";

const initiatives = [
  {
    number: "01",
    titleEn: "Yalla Family House",
    titleAr: "بيت يلا العائلي",
    descriptionEn:
      "A haven for vulnerable Egyptian children, providing a nurturing home environment with high-standard education and vocational skills.",
    descriptionAr:
      " ملاذ للأطفال المصريين الضعفاء، يوفر بيئة منزلية مغذية مع تعليم عالي المستوى ومهارات مهنية.",
  },
  {
    number: "02",
    titleEn: "Safe Independent Future",
    titleAr: "مستقبل مستقل آمن",
    descriptionEn:
      "A haven for vulnerable Egyptian children, providing a nurturing home environment with high-standard education and vocational skills.",
    descriptionAr:
      " ملاذ للأطفال المصريين الضعفاء، يوفر بيئة منزلية مغذية مع تعليم عالي المستوى ومهارات مهنية.",
  },
  {
    number: "03",
    titleEn: "Safe Family Guidelines",
    titleAr: "إرشادات الأسرة الآمنة",
    descriptionEn:
      "Comprehensive guidelines for orphans and kafala families, ensuring safety and well-being.",
    descriptionAr:
      " إرشادات شاملة للأيتام وأسر الكفالة، تضمن السلامة والرفاهية.",
  },
  {
    number: "04",
    titleEn: "Safe Family Placement",
    titleAr: "توظيف الأسرة الآمنة",
    descriptionEn:
      "Matching orphans, migrants, and refugees with loving Kafala families for long-term stability.",
    descriptionAr:
      "مطابقة الأيتام والمهاجرين واللاجئين مع عائلات الكفالة المحبة لتحقيق الاستقرار على المدى الطويل.",
  },
  {
    number: "05",
    titleEn: "Safe Little Home",
    titleAr: "منزل صغير آمن",
    descriptionEn:
      "Providing a safe, nurturing home environment for refugee and migrant children, facilitating placement with families.",
    descriptionAr:
      "توفير بيئة منزلية آمنة ومغذية لأطفال اللاجئين والمهاجرين، وتسهيل توظيفهم مع العائلات.",
  },
];

const Initiatives = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        paddingX: { xs: "40px", md: "180px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          marginTop: { xs: "20px", md: "40px" },
          lineHeight: { sx: "32px", md: "61px" },
          color: "primary.main",
        }}
        variant="h2"
      >
        {locale === "en" ? (
          <>
            Yalla Kafala&aposs <br /> Initiatives
          </>
        ) : (
          "مبادرات يلا كفالة"
        )}
      </Typography>
      <Box
        sx={{
          paddingX: { xs: "0px", md: "180px" },
        }}
      >
        {initiatives.map((item, index) => {
          return (
            <Box
              sx={{
                width: "100%",
              }}
              key={index}
            >
              <Typography
                textAlign={
                  index % 2 === 0
                    ? locale === "en"
                      ? "left"
                      : "right"
                    : locale === "en"
                    ? "right"
                    : "left"
                }
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "55px", md: "95px" },
                }}
                color={"primary.main"}
                variant="h1"
              >
                {item.number}
              </Typography>
              <Typography
                textAlign={
                  index % 2 === 0
                    ? locale === "en"
                      ? "left"
                      : "right"
                    : locale === "en"
                    ? "right"
                    : "left"
                }
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                }}
                color={"secondary.main"}
                variant="h3"
              >
                {locale === "en" ? item.titleEn : item.titleAr}
              </Typography>
              <Typography
                textAlign={
                  index % 2 === 0
                    ? locale === "en"
                      ? "left"
                      : "right"
                    : locale === "en"
                    ? "right"
                    : "left"
                }
                variant="body1"
              >
                {locale === "en" ? item.descriptionEn : item.descriptionAr}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Initiatives;
