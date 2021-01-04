import { Header, HeaderContainer } from "./styles";
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";
import UserStatus from "../userStatus";
import Cart from "../cart";

export default function Navbar() {
    return (
        <Header>
            <HeaderContainer>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav>
                    <Cart />
                    <UserStatus />
                </nav>
            </HeaderContainer>
        </Header>
    )
}
