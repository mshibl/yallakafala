import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Volunteer = ({ locale }: { locale: string }) => {
  return (
    <Grid item container>
      <Link style={{ textTransform: "none" }} href={`/${locale}/volunteer`}>
        <Button variant="text" sx={{ color: "white", px: 0 }}>
          <Grid item display="flex" alignItems="center">
            <VolunteerActivismIcon />
          </Grid>
          <Grid
            sx={{
              marginX: 5,
            }}
            item
          >
            <Typography variant="body2">
              {locale === "ar" ? "تطوعً معنا" : "Volunteer"}
            </Typography>
          </Grid>
        </Button>
      </Link>
    </Grid>
  );
};

export default Volunteer;
