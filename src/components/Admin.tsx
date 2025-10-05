import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function AdminDashboard() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    alert(`Expense added: ${expense} - $${amount}`);
    setExpense("");
    setAmount("");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Expense Name"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Expense
        </Button>
      </Box>
    </Container>
  );
}