import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CopyrightStatement = () => {
  return (
    <Grid item container md={8} xs={12}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Copyright © 2023. All rights reserved | Yalla Kafala USA is a
          registered 501c3 nonprofit organization. All donations are tax
          deductible. EIN: 85-3323627
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CopyrightStatement;
