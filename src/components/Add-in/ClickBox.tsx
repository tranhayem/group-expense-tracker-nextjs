import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={3} sx={{
        mx: 3,
        py: 0,
        '& .MuiButton-root': {
          width: 255,
          borderRadius: 6,
          fontSize: 16,
          padding: '8px 16px',
          textTransform: 'none',
        },
      }}
    >
      <Button variant="outlined" startIcon={<AddIcon sx={{ fontSize: 40 }} />}>Spendation</Button>
      <Button variant="outlined" startIcon={<AddIcon sx={{ fontSize: 40 }} />}>Period</Button>
      <Button variant="outlined" disabled>
        Total Charge
      </Button>
      <Button variant="outlined" startIcon={<AddIcon sx={{ fontSize: 40 }} />}>Split Bill</Button>
      <Button variant="outlined" href="#outlined-buttons" startIcon={<AddIcon sx={{ fontSize: 40 }} />}>
        Other lists
      </Button>
    </Stack>
  );
}


