import FAQs from "@/src/components/FAQs";

const FAQsPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return <FAQs locale={locale} />;
};

export default FAQsPage;
