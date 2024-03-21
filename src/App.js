import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography'; // Import Typography
import theme from './theme'; // Import the theme
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        {/* Added inline styling for padding below the Navbar */}
        <header className="App-header" style={{ paddingTop: '20px' }}> 
          <Typography sx={{
            color: 'black', // Black text color
            textShadow: '0 0 8px #fff', // White glow
            fontSize: '5rem', // Larger font size
          }}>
            Welcome to Freedom Path Bail Bonds
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
