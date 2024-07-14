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
            arabicAccomplishmentDescription="تنظم يلا كفالة حدث 'الكفالة هي الحب' للاحتفال بروح الحب والرعاية داخل الأسر الكافلة. يهدف هذا الحدث إلى جمع الأسر الكافلة، وزيادة الوعي حول أهمية الكفالة، وتعزيز شعور بالدعم المجتمعي والانتماء."
            englishAccomplishmentDescription="Yalla Kafala organizes the 'Kafala is Love Event' to celebrate the spirit of love and care within kafala families. This event aims to bring together kafala families, raise awareness about the importance of kafala, and foster a sense of community support and belonging."
          />

          <AccomplishmentCard
            imgSrc="/images/kafala-bus.jpg"
            locale={locale}
            arabicImgAlt="صورة حافلة كفالة"
            englishImgAlt="Kafala Bus Photo"
            arabicAccomplishmentTitle="حافلة الكفالة"
            englishAccomplishmentTitle="Kafala Bus"
            englishAccomplishmentDescription="The 'Kafala Bus' initiative by Yalla Kafala aims to provide mobile support services to kafala families in various communities. This mobile unit offers resources, information, and assistance related to kafala, making it more accessible for families who may face challenges in accessing traditional support channels."
            arabicAccomplishmentDescription="تهدف مبادرة 'حافلة الكفالة' من يلا كفالة إلى تقديم خدمات الدعم المتنقلة للأسر الكافلة في مختلف المجتمعات. تقدم هذه الوحدة المتنقلة موارد ومعلومات ومساعدة تتعلق بالكفالة، مما يجعلها أكثر إمكانية للأسر التي قد تواجه تحديات في الوصول إلى قنوات الدعم التقليدية."
          />

          <AccomplishmentCard
            imgSrc="/images/garage-sale.jpg"
            locale={locale}
            arabicImgAlt="صورة البيع الخيرى"
            englishImgAlt="Garage Sale Photo"
            arabicAccomplishmentTitle="بيع خيري"
            englishAccomplishmentTitle="Garage Sale"
            englishAccomplishmentDescription="Yalla Kafala organizes garage sales as part of its community engagement efforts. These events provide an opportunity for kafala families to purchase goods at a discounted amount while promoting a sense of community involvement and support."
            arabicAccomplishmentDescription="تنظم يلا كفالة مبيعات الجراج كجزء من جهودها في مجال المشاركة المجتمعية. توفر هذه الفعاليات فرصة للأسر الكافلة لشراء البضائع بمبلغ مخفض مع تعزيز شعور بالمشاركة والدعم المجتمعي."
          />

          <AccomplishmentCard
            imgSrc="/images/kafala-training.jpg"
            locale={locale}
            arabicImgAlt="صورة تدريب الكفالة"
            englishImgAlt="Kafala Training Photo"
            arabicAccomplishmentTitle="تدريب الكفالة"
            englishAccomplishmentTitle="Kafala Training"
            englishAccomplishmentDescription="Yalla Kafala provides mandatory training sessions for prospective kafala families as required by the Ministry of Social Solidarity. These training programs are designed to equip families with the necessary knowledge and skills to navigate the kafala process successfully and ensure the well-being of the children under their care."
            arabicAccomplishmentDescription="تقدم يلا كفالة جلسات تدريبية إلزامية للأسر المستقبلية للكفالة كما يتطلبها وزارة التضامن الاجتماعي. تم تصميم هذه البرامج التدريبية لتزويد الأسر بالمعرفة والمهارات اللازمة للتنقل بنجاح في عملية الكفالة وضمان رفاهية الأطفال الذين تحت رعايتهم."
          />

          <AccomplishmentCard
            imgSrc="/images/positive-discipline-workshops-1.jpg"
            locale={locale}
            arabicImgAlt="صورة ورش عمل التربية الإيجابية"
            englishImgAlt="Positive Discipline Workshops Photo"
            arabicAccomplishmentTitle="ورش عمل التربية الإيجابية"
            englishAccomplishmentTitle="Positive Discipline workshops"
            englishAccomplishmentDescription="Yalla Kafala conducts Positive Discipline Workshops to empower kafala families with effective parenting techniques and strategies. These workshops focus on promoting a nurturing and safe environment for children under kafala care, emphasizing positive reinforcement and constructive discipline methods."
            arabicAccomplishmentDescription="تقوم يلا كفالة بتنظيم ورش عمل للتربية الإيجابية لتمكين الأسر الكافلة بتقنيات واستراتيجيات تربية فعالة. تركز هذه الورش على تعزيز بيئة تربوية آمنة ومحبة للأطفال الذين تحت رعاية الكفالة، مع التركيز على تعزيز الإيجابية وطرق التأديب البناءة."
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
            englishAccomplishmentDescription="Yalla Kafala will offer art therapy services as part of its comprehensive support for kafala children. Art therapy sessions provide a creative outlet for children to express themselves, process emotions, and develop coping skills. This therapeutic approach aims to enhance the emotional well-being and resilience of children in kafala families."
            arabicAccomplishmentDescription="ستقدم يلا كفالة خدمات العلاج بالفن كجزء من دعمها الشامل لأطفال الكفالة. توفر جلسات العلاج بالفن منفذًا إبداعيًا للأطفال للتعبير عن أنفسهم ومعالجة العواطف وتطوير مهارات التكيف. تهدف هذه النهج العلاجي إلى تعزيز الرفاه العاطفي والمرونة لدى الأطفال في الأسر الكافلة."
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
