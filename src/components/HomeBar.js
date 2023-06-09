import {
  AppBar,
  Box,
  TextField,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Autocomplete,
  InputAdornment,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
const HomeBar = () => {
  const [open, setOpen] = useState(false);

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          fontWeight={800}
          marginRight={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ThiruBook
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ fontSize: 40, display: { xs: "block", sm: "none" } }}
        />
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: "50vw", bgcolor: "white", borderRadius: 1 }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Search..." variant="outlined" />
          )}
        />

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "inherit" }}>
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "inherit" }} onClick={(e) => setOpen(true)}>
            <Avatar alt="" src="" />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HomeBar;
