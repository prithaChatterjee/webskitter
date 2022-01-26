import './App.css';
import { ThemeProvider } from "styled-components";
import Routing from './Routing';

const theme = {
  primary: "#1771f1",
  secondary: "#707070",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
