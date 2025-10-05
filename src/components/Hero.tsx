
import { Box, Typography, Stack, Button, Paper } from "@mui/material";

export default function Hero() {
  return (
    <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2, background: "linear-gradient(90deg, rgba(26,115,232,0.06), rgba(26,115,232,0.02))" }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: -0.5 }}>
          Free your finance with "TenThuongHieu" 
        </Typography>

        <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 680 }}>
          A new innovation of money management system, building a community where users can share and manage their finances effectively.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <Button variant="contained" size="large">Get started</Button>
          <Button variant="outlined" size="large">Observe in-depth</Button>
        </Box>
      </Stack>
    </Paper>
  );
}
