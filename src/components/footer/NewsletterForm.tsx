import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const NewsletterForm = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        sx={{
          mb: 3.5,
          bgcolor: "#FFFFFF",
          borderRadius: "4px",
          borderColor: "#AFB6C0",
          placeholder: {
            color: "#74808D",
          },
        }}
        size="small"
        id="outlined-basic"
        placeholder="Email"
        variant="outlined"
      />
      <br />
      <Button color="secondary" disableElevation variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default NewsletterForm;
