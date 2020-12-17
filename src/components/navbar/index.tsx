import { Header } from "./styles";
import logo from '../../assets/logo.jpg';
import { LargeContainer } from "../../styles/globalstyles";

export default function Navbar () {
    return (
        <Header>
            <LargeContainer>
            <img src={logo} alt="logo"/>                
            </LargeContainer>
        </Header>
    )    
}
