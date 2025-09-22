import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h4" component="h1" sx={{ my: 4 }}>
          Home
        </Typography>
      </Box>
    </Container>
  );
}
