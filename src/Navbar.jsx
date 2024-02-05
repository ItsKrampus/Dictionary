import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
export default function Navbar() {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",}}>
      <AppBar position="static" color='secondary' sx={{ width: "75%", borderRadius: "10px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="book"
            sx={{ mr: 2 }}
          >
            <BookIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dictionary
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}