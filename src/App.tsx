import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from 'styled-components'
import Routes from "./routes";
import GlobalStyles from './styles/globalstyles'
import { Theme } from "./styles/theme";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <CartProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
