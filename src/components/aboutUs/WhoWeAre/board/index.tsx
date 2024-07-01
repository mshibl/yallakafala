"use client";
import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import BoardModal from "./boardModal";
import BoardMember from "./boardMember";

const boardMembers = [
  {
    nameEn: "Rasha Mekky",
    nameAr: "رشا مكي",
    titleEn: "Executive Director",
    titleAr: "المدير التنفيذي",
    image: "/images/rasha.png",
    bioEn:
      "Rasha Mekky has over 25 years of experience in Child Development, Child Assessment, and Positive Discipline. Her journey began with the Kafala of her son Mostafa eight years ago, which inspired her to launch Yalla Kafala. Rasha also established Little Pharaohs daycare in the San Francisco Bay Area in 2015.",

    bioAr:
      "رشا مكي لديها أكثر من 25 عامًا من الخبرة في تطوير الطفل، تقييم الطفل، والانضباط الإيجابي. بدأت رحلتها مع الكفالة لابنها مصطفى قبل ثماني سنوات، مما ألهمها لإطلاق يلا كفالة. أسست رشا أيضًا حضانة Little Pharaohs في منطقة خليج سان فرانسيسكو في عام 2015.",
  },
  {
    nameEn: "Azza Harrarah",
    nameAr: "عزة هرارة",
    titleEn: "Board Member",
    titleAr: "عضو مجلس الإدارة",
    image: "/images/azza.png",
    bioEn: `Azza Hararah is an accomplished professional with a diverse skill set and a strong commitment to both business success and social impact. She brings several years of experience helping high-growth businesses and nonprofits achieve their goals through people, technology, and process. Her expertise in Human Resources, Training, Business Transformation, Global System and Program Implementation, Change Management, M&A, Sales Operations, and Sales Enablement underscores her ability to drive organizational effectiveness across various functional areas.

    She is most passionate about making a positive difference beyond the corporate sphere and enjoys dedicating her time to causes that aim to uplift marginalized communities and those left behind.`,
    bioAr: `عزة هرارة هي محترفة متميزة بمجموعة مهارات متنوعة والتزام قوي بالنجاح التجاري والتأثير الاجتماعي. تتمتع بعدة سنوات من الخبرة في مساعدة الشركات الناشئة والمنظمات غير الربحية على تحقيق أهدافها من خلال الناس والتكنولوجيا والعمليات. تؤكد خبرتها في الموارد البشرية والتدريب وتحويل الأعمال وتنفيذ النظام والبرنامج العالمي وإدارة التغيير والاندماج وعمليات البيع وتمكين المبيعات على قدرتها على تعزيز الفعالية التنظيمية عبر مجموعة متنوعة من المجالات الوظيفية.
    
    تشعر بالشغف الشديد تجاه إحداث فرق إيجابي خارج النطاق الشركي وتستمتع بتكريس وقتها للقضايا التي تهدف إلى رفع مستوى المجتمعات المهمشة والمتخلفة.`,
  },
  {
    nameEn: "Ghada Ahmed",
    nameAr: "غادة أحمد",
    titleEn: "Board Member",
    titleAr: "عضو مجلس الإدارة",
    image: "/images/ghada.png",
    bioEn: `Ghada Ahmed, founder of Insurgent Business Analytics and senior fellow at Duke University, examines the impact of business practices and policies on the sustainability of communities. Her research at Duke University has focused on pioneering frameworks on clean technology, food, and energy security. Previously, her work as a lead socio-economist at the Food and Agriculture Organization of the United Nations and the World Bank centered on sustainable economic development strategies. Notably, she led the development of Google's groundbreaking impact studies on data centers. Ms. Ahmed is a recognized author with over 30 publications and holds degrees in International Development Policy and Business & Computer Science.

    Duke Profile link: https://dcid.sanford.duke.edu/profile/ghada-ahmed-0/
    Linkedin Profile (needs updating): https://www.linkedin.com/in/ghada-ahmed/
`,
    bioAr: `تفحص غادة أحمد، مؤسسة Insurgent Business Analytics وزميلة كبيرة في جامعة ديوك، تأثير الممارسات والسياسات التجارية على استدامة المجتمعات. تركز بحوثها في جامعة ديوك على إطارات رائدة في التكنولوجيا النظيفة والأمن الغذائي والطاقة. سبق أن كانت عملها كاقتصادية اجتماعية رئيسية في منظمة الأغذية والزراعة للأمم المتحدة والبنك الدولي مركزًا على استراتيجيات التنمية الاقتصادية المستدامة. ولا يُغفل أنها قادت تطوير دراسات جوجل الرائدة في مجال الأثر على مراكز البيانات. تعتبر السيدة أحمد مؤلفة معترف بها بأكثر من 30 منشورًا وتحمل درجات في سياسات التنمية الدولية وعلوم الأعمال والحاسوب.`,
  },
];
const Board = ({ locale }: { locale: string }) => {
  const [currentMember, setCurrentMember] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        paddingX: { xs: "32px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          marginTop: { xs: "20px", md: "40px" },
          lineHeight: "32px",
          color: "primary.main",
        }}
        variant="h2"
      >
        {locale === "en" ? "Our Board Members" : "أعضاء مجلس الإدارة"}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "40px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
        }}
        color={"secondary.main"}
        variant="h3"
      >
        {locale === "en"
          ? "USA Board Members"
          : "أعضاء مجلس الإدارة في الولايات المتحدة الأمريكية"}
      </Typography>
      <Grid gap={10} container>
        {boardMembers.map((member, index) => {
          return (
            <BoardMember
              name={locale === "en" ? member.nameEn : member.nameAr}
              title={locale === "en" ? member.titleEn : member.titleAr}
              image={member.image}
              bio={locale === "en" ? member.bioEn : member.bioAr}
              key={index}
              index={index}
              setCurrentMember={setCurrentMember}
              handleOpen={handleOpen}
            />
          );
        })}
      </Grid>
      <BoardModal
        currentMember={currentMember}
        open={open}
        handleClose={handleClose}
        setCurrentMember={setCurrentMember}
        locale={locale}
        boardMembers={boardMembers}
      />
    </Box>
  );
};

export default Board;
