
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Navbar({ user }: { user: string | null }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Group Expense Tracker
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
        <Button color="inherit" component={Link} to="/member">
          Member
        </Button>
        {user ? (
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

