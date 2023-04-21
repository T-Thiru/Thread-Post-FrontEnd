import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ThiruBook
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ fontSize: 40, display: { xs: "block", sm: "none" } }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <Button variant="contained" color="success">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
