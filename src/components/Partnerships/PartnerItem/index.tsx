import { Box } from "@mui/material";

const PartnerItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      border="0.4px solid #D9D9D9"
      position="relative"
      display="flex"
      justifyContent="center"
      height="165px"
      width="165px"
      alignItems="center"
      boxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.25)"
    >
      {children}
    </Box>
  );
};

export default PartnerItem;

