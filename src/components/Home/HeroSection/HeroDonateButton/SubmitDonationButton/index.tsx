import { Button } from "@mui/material";

const SubmitDonationButton = ({
  handleSubmit,
  locale,
}: {
  handleSubmit: () => void;
  locale: "ar" | "en";
}) => {
  return (
    <Button
      variant="contained"
      onClick={handleSubmit}
      sx={{
        marginTop: "20px",
        fontWeight: "bold",
        width: "160px",
        bgcolor: "#ffffff",
        color: "primary.main",
        borderRadius: "39px",
        fontSize: "20px",
        "&:hover": {
          bgcolor: "#ffffff",
        },
      }}
    >
      {locale === "ar" ? "تبرع الآن" : "Donate now"}
    </Button>
  );
};

export default SubmitDonationButton;
