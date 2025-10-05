
import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", borderTop: "1px solid rgba(0,0,0,0.06)", mt: 6, py: 4 }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} "TenThuongHieu". Manifess your future.</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="#" color="inherit" underline="hover">Privacy</Link>
          <Link href="#" color="inherit" underline="hover">Terms</Link>
        </Box>
      </Container>
    </Box>
  );
}
