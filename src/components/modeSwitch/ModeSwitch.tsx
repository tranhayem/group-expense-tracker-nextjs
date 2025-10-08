"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SettingsIcon from "@mui/icons-material/Settings";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";

import React from "react";

const ICON_COLOR = "#f6c62d";

const modes = {
  light: {
    label: "Sáng",
    icon: <LightModeIcon fontSize="small" sx={{ color: ICON_COLOR }} />,
  },
  dark: {
    label: "Tối",
    icon: <NightsStayIcon fontSize="small" sx={{ color: ICON_COLOR }} />,
  },
  system: {
    label: "Hệ thống",
    icon: <SettingsIcon fontSize="small" sx={{ color: ICON_COLOR }} />,
  },
};

const ModeSwitch: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  const handleModeChange = () => {
    const nextMode =
      mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
    setMode(nextMode);
  };

  const { label, icon } = modes[mode ?? "system"];

  return (
    <Box sx={{ ml: 2 }}>
      <Button
        variant="contained"
        onClick={handleModeChange}
        startIcon={icon}
        sx={{
          px: 1.5,
          textTransform: "none",
          fontSize: 14,
        }}
      >
        {label}
      </Button>
    </Box>
  );
};

export default ModeSwitch;
