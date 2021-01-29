import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../services";
import { Aside } from "./styles";

interface ICategory {
    _id: number,
    name: string
    description: string
}

export default function Sidebar() {
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        api.get('product-category').then(response => {
            const categories = response.data;
            setCategories(categories);
        })
    }, [])
    return (
        <Aside>
            <h3>Categorias</h3>
            <ul>
                {categories.map(category => (
                    <li key={category._id}><NavLink to={`/category/${category._id}`}>{category.name}</NavLink></li>
                ))}
            </ul>
        </Aside>
    )
}