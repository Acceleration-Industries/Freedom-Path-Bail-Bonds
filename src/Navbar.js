import React, { useState } from 'react'; // Import useState
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import InmateSearchPopup from './InmateSearchPopup'; // Ensure this path is correct

function Navbar() {
  const theme = useTheme();
  // Add useState for managing the popup's visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const buttonStyle = {
    fontSize: '2rem',
    textTransform: 'none',
    marginRight: theme.spacing(1),
    fontFamily: "'Richardo Flacky', sans-serif",
    color: 'black', // Text color updated for visibility
    textShadow: '0 0 14px #808080', // Gray glow for the text
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <img src="set-free-icon.png" alt="logo" style={{ marginRight: theme.spacing(2), height: '11vh' }} />
        <Typography variant="h1" color="inherit" component="div" sx={{ flexGrow: 1, textShadow: '0 0 8px #808080' }}>
          Freedom Path Bail Bonds
        </Typography>
        {/* Update each Button's onClick to properly manage the popup for the Inmate Search */}
        <Button color="inherit" href="/" sx={buttonStyle}>-Home-</Button>
        {/* Inmate Search button now toggles the popup */}
        <Button color="inherit" sx={buttonStyle} onClick={() => setIsPopupOpen(true)}>-Inmate Search-</Button>
        <Button color="inherit" href="/jails" sx={buttonStyle}>-Jails-</Button>
        <Button color="inherit" href="/attorneys" sx={buttonStyle}>-Attorneys-</Button>
        <Button color="inherit" href="/contact" sx={buttonStyle}>-Contact-</Button>
        <Typography variant="button" sx={{ ...buttonStyle, flexGrow: 0, marginLeft: theme.spacing(2) }}>
          (949) 872-6504
        </Typography>
      </Toolbar>
      {/* Place the InmateSearchPopup outside the Toolbar but inside AppBar */}
      <InmateSearchPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </AppBar>
  );
}

export default Navbar;
