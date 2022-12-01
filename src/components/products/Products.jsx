import React, { useEffect, useState } from "react";
import { products } from "../../data";
import Product from "../product/Product";
import { Container, ProductsMap, Button } from "./productsStyled";



const Products = ({ filters, order, handleClick, }) => {

    const [product, setProduct] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [limit, setLimit] = useState(6)

    function changeLimit() {
        if (filteredProducts.length <= limit) return;

        setLimit((prevState) => prevState + 9);
    }

    useEffect(() => {
        const getProduct = () => {
            try {
                const res = products;
                setProduct(res.data);

            } catch (err) { console.log(err) }
        };
        getProduct();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [product, filters]);

    useEffect(() => {
        if (order === "new") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.date - b.date)
            );
        } else if (order === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [order]);

    return (
        <Container>
            <ProductsMap>
                {filteredProducts.slice(0, limit).map((item) => (
                    <Product key={item.id} item={item} handleClick={handleClick} />
                ))}
            </ProductsMap>
            {filteredProducts.length > limit && (
                <Button onClick={changeLimit}><button>Carregar mais</button></Button>
            )}
        </Container>
    );
};

export default Products;
