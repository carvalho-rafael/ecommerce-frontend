import { Header, HeaderContainer } from "./styles";
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";
import UserStatus from "../userStatus";

export default function Navbar() {
    return (
        <Header>
            <HeaderContainer>
                <div>
                    <Link to="/login">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <UserStatus />
            </HeaderContainer>
        </Header>
    )
}
