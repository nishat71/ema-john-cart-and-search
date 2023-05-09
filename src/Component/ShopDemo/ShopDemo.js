import React, { useEffect, useState } from 'react'
import '../Shop/Shop.css'
import ProductDemo from '../ProductDemo/ProductDemo';
import CartDemo from '../CartDemo/CartDemo';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';


const ShopDemo = () => {
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch("products.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data);
    //         })
    // }, [])


    useEffect(() => {
        // console.log('Local storage first line',products)
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find((product) => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct)
                savedCart.push(addedProduct);
            };
        }
        setCart(savedCart);
        // console.log('Local storage finished');
    }, [products])




    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedProduct.id)

        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const res = cart.filter((product)=>product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...res, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }


    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map((product) => (
                        <ProductDemo
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}>
                        </ProductDemo>
                    ))}
            </div>
            <div className="cart-container">
                <CartDemo cart={cart} />
            </div>
        </div>
    )
}

export default ShopDemo