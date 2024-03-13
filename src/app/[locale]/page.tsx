import Home from "@/src/components/Home";

const HomePage = ({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) => {
  return <Home locale={locale} />;
};

export default HomePage;
