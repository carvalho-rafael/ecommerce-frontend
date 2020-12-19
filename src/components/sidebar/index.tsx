import { NavLink } from "react-router-dom";
import { Aside } from "./styles";

export default function Sidebar() {
    return (
        <Aside>
            <h3>Masculino</h3>
            <ul>
                <li><NavLink to={`/categoria/${2}`}>Blusas</NavLink></li>
                <li>blusas</li>
            </ul>
            <h3>Feminino</h3>
            <ul>
                <li><NavLink to={`/categoria/${5}`}>Calças</NavLink></li>
                <li>blusas</li>
            </ul>
            <h3>Agenero</h3>
            <ul>
                <li>Bolsas</li>
                <li>Calçados</li>
            </ul>
        </Aside>
    )
}