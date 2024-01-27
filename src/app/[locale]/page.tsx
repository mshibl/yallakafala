import AppFooter from "@/src/components/AppFooter";
import Navbar from "@/src/components/Navbar";
import { Container } from "@mui/material";

export default function AppFooterPage() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <AppFooter />
    </Container>
  );
}
