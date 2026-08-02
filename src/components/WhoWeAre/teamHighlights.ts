import type { BoardMember } from "@/lib/types";
import { translations } from "./translations";

export const featuredBoardMembers: BoardMember[] = [
  {
    id: "founder-rasha-mekky",
    nameEn: translations.founder.name.en,
    nameAr: translations.founder.name.ar,
    imageUrl: translations.founder.image,
    bioEn: translations.founder.bio[0]!.en,
    bioAr: translations.founder.bio[0]!.ar,
    type: "board",
    country: "all",
    publish: true,
  },
  {
    id: "board-ahmed-faramawy",
    nameEn: "Ahmed Faramawy",
    nameAr: "أحمد فرماوي",
    bioEn: `<p><strong>Ahmed Faramawy</strong> is a seasoned travel executive with over 35 years of leadership experience across the MEA region and international markets. He currently serves as a <strong>Board Member at Yalla Kafala</strong>, bringing strategic insight, operational excellence, and a proven track record of building sustainable organizations.</p><p>Ahmed co-founded <strong>Lots of Hotels</strong> in Dubai, helping it become the world's second-largest bedbank, and now leads <strong>Umrah Holidays</strong> as CEO and <strong>WebBeds Saudi Arabia</strong> as MD. He also launched <strong>Travel Destinations Solutions (TDS)</strong>, a global venture with operations in 12 countries and a network spanning 30+ markets.</p><p>With expertise in business growth, organizational strategy, and cross-cultural leadership, Ahmed's guidance ensures Yalla Kafala delivers meaningful impact to children without parental care. Outside work, he values family, fitness, travel, and personal development.</p>`,
    bioAr: `<p><strong>أحمد فرماوي</strong> قيادي متمرس في قطاع السفر، يتمتع بأكثر من 35 عامًا من الخبرة في القيادة عبر منطقة الشرق الأوسط وأفريقيا والأسواق الدولية. ويشغل حاليًا منصب <strong>عضو مجلس إدارة في يلا كفالة</strong>، حيث يساهم برؤية استراتيجية وتميز تشغيلي وسجل حافل في بناء المؤسسات المستدامة.</p><p>شارك أحمد في تأسيس <strong>Lots of Hotels</strong> في دبي، وساهم في تحولها إلى ثاني أكبر بنك أسِرّة في العالم، ويقود حاليًا <strong>Umrah Holidays</strong> بصفته الرئيس التنفيذي و<strong>WebBeds Saudi Arabia</strong> بصفته العضو المنتدب. كما أطلق <strong>Travel Destinations Solutions (TDS)</strong>، وهو مشروع عالمي يعمل في 12 دولة وله شبكة تمتد إلى أكثر من 30 سوقًا.</p><p>وبفضل خبرته في نمو الأعمال والاستراتيجية المؤسسية والقيادة عبر الثقافات، يضمن أحمد أن تحقق يلا كفالة أثرًا ملموسًا للأطفال فاقدي الرعاية الوالدية. وخارج العمل، يقدّر الأسرة واللياقة والسفر والتطور الشخصي.</p>`,
    type: "board",
    country: "all",
    publish: true,
  },
];
