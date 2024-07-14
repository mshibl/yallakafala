"use client";

import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../EmblaCarousel";
import { Box } from "@mui/material";
import AccomplishmentCard from "./OnGroundAccomplishmentCard";
import useResponsiveBreakpoint from "@/src/utils/mui-utils";

const OnGroundAccomplishments = ({ locale }: { locale: string }) => {
  const isMD = useResponsiveBreakpoint("md");

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box marginBottom="20px">
      <Box
        style={{
          color: "#87226C",
          fontSize: isMD ? "32px" : "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {locale === "en" ? "On-ground Accomplishments" : "إنجازاتنا الميدانية"}
      </Box>
      <Box
        className="embla"
        ref={emblaRef}
        overflow="hidden"
        style={{ direction: "ltr" }}
      >
        <Box
          className="embla__container"
          display="flex"
          gap="20px"
          padding="30px"
        >
          <AccomplishmentCard
            imgSrc="/images/yk-team-1.jpg"
            locale={locale}
            arabicImgAlt="صورة فريق يلا كفالة"
            englishImgAlt="Yalla Kafala Team Photo"
            arabicAccomplishmentTitle="الكفالة هي الحب"
            englishAccomplishmentTitle="Kafala is Love"
            arabicAccomplishmentDescription="حدثنا السنوي"
            englishAccomplishmentDescription="Yalla Kafala organizes the 'Kafala is Love Event' to celebrate the spirit of love and care within kafala families. This event aims to bring together kafala families, raise awareness about the importance of kafala, and foster a sense of community support and belonging."
          />

          <AccomplishmentCard
            imgSrc="/images/kafala-bus.jpg"
            locale={locale}
            arabicImgAlt="صورة حافلة كفالة"
            englishImgAlt="Kafala Bus Photo"
            arabicAccomplishmentTitle="حافلة الكفالة"
            englishAccomplishmentTitle="Kafala Bus"
            englishAccomplishmentDescription="Awareness Campaign"
            arabicAccomplishmentDescription="حملة توعية"
          />

          <AccomplishmentCard
            imgSrc="/images/garage-sale.jpg"
            locale={locale}
            arabicImgAlt="صورة البيع الخيرى"
            englishImgAlt="Garage Sale Photo"
            arabicAccomplishmentTitle="بيع خيري"
            englishAccomplishmentTitle="Garage Sale"
            englishAccomplishmentDescription="Quarterly Initiative"
            arabicAccomplishmentDescription="معرض مُدعم للأسر الكافلة - مبادرة ربع سنوية."
          />

          <AccomplishmentCard
            imgSrc="/images/kafala-training.jpg"
            locale={locale}
            arabicImgAlt="صورة تدريب الكفالة"
            englishImgAlt="Kafala Training Photo"
            arabicAccomplishmentTitle="تدريب الكفالة"
            englishAccomplishmentTitle="Kafala Training"
            englishAccomplishmentDescription="Primary providers of kafala training in 11 governorates"
            arabicAccomplishmentDescription="التدريب الإلزامي للكفالة - مقدم رئيسي للتدريب الإلزامي للكفالة  في ١١ محافظة."
          />

          <AccomplishmentCard
            imgSrc="/images/positive-discipline-workshops-1.jpg"
            locale={locale}
            arabicImgAlt="صورة ورش عمل التربية الإيجابية"
            englishImgAlt="Positive Discipline Workshops Photo"
            arabicAccomplishmentTitle="ورش عمل التربية الإيجابية"
            englishAccomplishmentTitle="Positive Discipline workshops"
            englishAccomplishmentDescription="For kafala and non-kafala families"
            arabicAccomplishmentDescription="ورش عمل التربية الإيجابية للأسر الكافلة وغير الكافلة."
          />

          <AccomplishmentCard
            imgSrc="/images/positive-discipline-workshops-2.jpg"
            locale={locale}
            arabicImgAlt="صورة ورش عمل التربية الإيجابية"
            englishImgAlt="Positive Discipline Workshops Photo"
            arabicAccomplishmentTitle="ورش عمل التربية الإيجابية"
            englishAccomplishmentTitle="Positive Discipline workshops"
            englishAccomplishmentDescription="Designing & delivering these workshops for social workers"
            arabicAccomplishmentDescription="ورش عمل التربية الإيجابية - تصميم وتقديم هذه الورش لموظفي الشئون الاجتماعية."
          />

          <AccomplishmentCard
            imgSrc="/images/introducing-art-therapy.jpg"
            locale={locale}
            arabicImgAlt="صورة تقديم العلاج بالفن"
            englishImgAlt="Introducing Art Therapy Photo"
            arabicAccomplishmentTitle="تقديم العلاج بالفن"
            englishAccomplishmentTitle="Introducing Art Therapy"
            englishAccomplishmentDescription="To kafala and non-kafala families"
            arabicAccomplishmentDescription="تقديم جلسات علاج بالفن للأسر الكافلة وغير الكفالة."
          />
        </Box>
        <Box display="flex" justifyContent="center" width="100%">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnGroundAccomplishments;
