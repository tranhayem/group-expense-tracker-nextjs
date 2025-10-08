"use client";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import ModeSwitch from "../modeSwitch/ModeSwitch";

export default function Header() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ fontWeight: 600 }}>Quản lý chi tiêu nhóm</Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ModeSwitch />
          <Button
            variant="contained"
            startIcon={<SupervisorAccountIcon sx={{ color: "#463378" }} />}
            sx={{ textTransform: "none" }}
          >
            Thành viên
          </Button>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Đăng xuất
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}
