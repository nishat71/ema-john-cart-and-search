import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './Component/About/About';
import Shop from './Component/Shop/Shop';
import Inventory from './Component/Inventory/Inventory';
import Orders from './Component/Orders/Orders';
import ShopDemo from './Component/ShopDemo/ShopDemo';
import { ProductsAndCartLoader } from './Component/loaders/ProductsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader:()=>fetch("products.json"),
          element: <Shop />
          // element: <ShopDemo/>
        },
        {
          path: "orders",
          loader: ProductsAndCartLoader,
          element: <Orders />
        },
        {
          path: "inventory",
          element: <Inventory />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
