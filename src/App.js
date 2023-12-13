import "./App.css";

import { Route, Routes } from "react-router-dom";
import NewProduct from "./components/admin/NewProduct";
import Orders from "./components/admin/Orders";
import Products from "./components/admin/Products";
import UpdateOrder from "./components/admin/UpdateOrder";
import UpdateUser from "./components/admin/UpdateUser";
import UploadImages from "./components/admin/UploadImages";
import Users from "./components/admin/Users";
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";
import Register from "./components/auth/Register";
import UpdatePassword from "./components/auth/UpdatePassword";
import UpdateProfile from "./components/auth/UpdateProfile";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ListOrders from "./components/order/ListOrders";
import ListProducts from "./components/products/ListProducts";
import ProductDetails from "./components/products/ProductDetails";
import NewAddress from "./components/user/NewAddress";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<ListProducts />} />
      <Route path="/products" element={<ListProducts />} />
      <Route path="/product/details" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/address/new" element={<NewAddress />} />
      <Route path="/profile/update" element={<UpdateProfile />} />
      <Route path="/password/update" element={<UpdatePassword />} />
      <Route path="/me/orders" element={<ListOrders />} />
      <Route path="/product/new" element={<NewProduct />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/upload_images" element={<UploadImages />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/order/update" element={<UpdateOrder />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/update" element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
