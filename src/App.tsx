import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from 'styled-components'
import Routes from "./routes";
import GlobalStyles from './styles/globalstyles'
import { Theme } from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
