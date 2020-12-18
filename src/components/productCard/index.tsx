import { Card } from "./styles";

export default function ProductCard({ imgUrl }: any) {

    return (
        <Card>
            <img src={imgUrl} alt="" />
            <footer>
                <h3>R$ 300,00</h3>
                <p>Nome do produto</p>
            </footer>
        </Card>
    )
}
