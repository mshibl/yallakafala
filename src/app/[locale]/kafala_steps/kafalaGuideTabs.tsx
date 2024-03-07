"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import CustomTabPanel from "./customTabPanel";
import KafalaSteps from "./kafalaSteps";
import KafalaRequiredDocuments from "./kafalaRequiredDocuments";
import KafalaFamilyCard from "./kafalaFamilyCard";
import { useLocale } from "next-intl";

const KafalaGuideTabs = () => {
  const locale = useLocale();
  const [value, setValue] = React.useState(0);
  const englishTabs = ["Steps", "Required Documents", "Kafala Family Card"];
  const arabicTabs = ["الخطوات", "الاوراق المطلوبة", "كارت الاسرة البديلة"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={locale === "en" ? englishTabs[0] : arabicTabs[0]} />
          <Tab label={locale === "en" ? englishTabs[1] : arabicTabs[1]} />
          <Tab label={locale === "en" ? englishTabs[2] : arabicTabs[2]} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <KafalaSteps />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <KafalaRequiredDocuments />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <KafalaFamilyCard />
      </CustomTabPanel>
    </>
  );
};

export default KafalaGuideTabs;
