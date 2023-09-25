import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Components/layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import USers from "./pages/Users";
import Single from "./pages/Single";
import New from "./pages/New";
import Products from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users" element={<USers />} />
      <Route path="users">
        <Route index element={<USers />} />
        <Route path=":userId" element={<Single />} />
        <Route path=":new" element={<New />} />
      </Route>
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Single />} />
        <Route path=":new" element={<New />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
