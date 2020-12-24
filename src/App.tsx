import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from 'styled-components'
import Routes from "./routes";
import GlobalStyles from './styles/globalstyles'
import { Theme } from "./styles/theme";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <AuthProvider>
          <CartProvider>
            <AddressProvider>
              <Routes />
            </AddressProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
