import { Container } from "@mui/material";
import Hero from "./Hero";
import Showcase from "./Showcase";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 6 }}>
      <Hero />
      <Showcase />
    </Container>
  );
}