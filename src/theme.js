import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Automatically configures dark mode
    background: {
      default: '#000', // Black background
      paper: '#333', // Slightly lighter for elements considered "paper"
    },
    text: {
      primary: '#fff', // White text
    },
  },
  typography: {
    fontFamily: 'Richsten, sans-serif', // Specify the 'Richsten' font along with a fallback
    allVariants: {
      color: "white" // Ensures all text is white by default
    },
  },
  // You can also define custom shadows or effects here
});

export default theme;
