import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from 'styled-components'
import Routes from "./routes";
import GlobalStyles from './styles/globalstyles'
import { Theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
