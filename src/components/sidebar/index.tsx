import { Link } from "react-router-dom";
import { Aside } from "./styles";

export default function Sidebar() {
    return (
        <Aside>
            <h3>Masculino</h3>
            <ul>
                <li><Link to={`/categoria/${2}`}>Blusas</Link></li>
                <li>blusas</li>
            </ul>
            <h3>Feminino</h3>
            <ul>
                <li><Link to={`/categoria/${5}`}>Calças</Link></li>
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