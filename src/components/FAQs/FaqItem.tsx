import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid from "@mui/material/Grid";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  return (
    <Grid item xs={8}>
      <Accordion
        sx={{
          boxShadow: "0 5px 20px rgba(0,0,0,.1)",
          padding: "5px 20px 5px 30px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography color="primary.main" variant="h5">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="black" variant="body1">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default Faq;
