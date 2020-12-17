import { Container } from "./styles";
import logo from '../../assets/logo.jpg';

export default function Navbar () {
    return (
        <Container>
            <img src={logo} alt="logo"/>
        </Container>
    )    
}