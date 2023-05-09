import { getStoredCart } from "../../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    //get products
    const productsData = await fetch("products.json");      //loader teke jehetu return krtesi na, niche abr use krbo sejnno normal async await er  moto use krbo
    const products = await productsData.json();             //ai products cart er hisab er jnno lagbe tai ebabe dicchi

    //get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find((product) => product.id === id)
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;

            console.log(id, quantity)
            initialCart.push(savedCart);
            // console.log(id,addedProducts);

        }
    }
    //ekan teke 2ta jinish drker products and savedCart. but normal js function teke 2ta alada value return kora jay na 
    // 2ta alada value return krte hole hoy object or array er modde return krte hobe
    return { products: products, initialCart: initialCart }; // j eta k cll krbe sey object pabe, shey object er modde distructuring kore value niye nibo
}



//sudu products er data chaile tkn just fetch kore return kore dilei hoto
//cart er data jkanei takuk na keno localstorage e takle o key value pair obstay ase
//array of object teke product pete chaile kuno id diye tkn find krte hobe

/* akta function teke return hisebe 1ta item e patate parbo, shey item hote pare 1ta value/string/number/array/object
tai object er bitor shortand diye akta name & akta value likhe disi*/