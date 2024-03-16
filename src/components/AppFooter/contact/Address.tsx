import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface AddressProps {
  title?: string;
  content: React.ReactNode;
}
const Address: React.FC<AddressProps> = ({ title, content }) => {
  return (
    <Grid
      item
      sx={{
        pb: 10.5,
      }}
    >
      <Box>
        <Typography sx={{ pb: 3.5 }} variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Grid>
  );
};

export default Address;
