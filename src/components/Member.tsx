import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function MemberDashboard() {
  const expenses = [
    { name: "Electricity", amount: 30, due: "2025-10-20" },
    { name: "Water", amount: 15, due: "2025-10-25" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Member Dashboard
      </Typography>
      {expenses.map((exp, i) => (
        <Card key={i} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{exp.name}</Typography>
            <Typography>Amount: ${exp.amount}</Typography>
            <Typography>Due: {exp.due}</Typography>
            <Button variant="contained" sx={{ mt: 1 }}>
              Pay Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}