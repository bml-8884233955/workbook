import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Hooks from "../pages/Hooks/index";
import Form from "../pages/Forms/index";
import NotFound from "../pages/NotFound/NotFound";
import PropsDemo from "../pages/Props/index";
import UseEffect from "../pages/Hooks/UseEffect";
import UseState from "../pages/Hooks/UseState";
import UseContext from "../pages/Hooks/UseContext";
import UseRef from "../pages/Hooks/UseRef";
import UseMemo from "../pages/Hooks/UseMemo";
import UseCallback from "../pages/Hooks/UseCallback";
import CustomHook from "../pages/Hooks/CustomHook";
import UseReducer from "../pages/Hooks/UseReducer";
import ControlledForm from "../pages/Forms/ControlledForm";
import UncontrolledForm from "../pages/Forms/UncontrolledfForm";
import Styling from "../pages/Styling/Styling";
import LoginForm from "../pages/Forms/LoginForm";
import PaymentForm from "../pages/Forms/PaymentForm";
import RoutePage from "../pages/Routing/RoutePage";
import ProductPage from "../pages/Routing/ProductPage";
import ProductDetail from "../pages/Routing/ProductDetail";
import ApiPage from "../pages/Api/ApiPage";
import Pagination from "../pages/Api/Pagination";
import FetchingData from "../pages/Api/FetchingData";
import Loading from "../pages/Api/Loading";
import CartPage from "../pages/Cart/CartPage";
import ProductListPage from "../pages/Cart/ProductListPage";
import TestingDemo from "../pages/Testing/TestingDemo";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Parent Route */}
                <Route path="/" element={<MainLayout />}>
                    {/* Child Routes */}
                    <Route index element={<Home />} />
                    <Route path="hooks" element={<Hooks />}>
                        <Route path="use-effect" element={<UseEffect />} />
                        <Route path="use-state" element={<UseState />} />
                        <Route path="use-context" element={<UseContext />} />
                        <Route path="use-ref" element={<UseRef />} />
                        <Route path="use-memo" element={<UseMemo />} />
                        <Route path="use-callback" element={<UseCallback />} />
                        <Route path="use-customhook" element={<CustomHook />} />
                        <Route path="use-reducer" element={<UseReducer />} />
                    </Route>
                    <Route path="props" element={<PropsDemo />} />
                    <Route path="forms" element={<Form />}>
                        <Route path="controled-form" element={<ControlledForm />} />
                        <Route path="uncontroled-form" element={<UncontrolledForm />} />
                        <Route path="login-form" element={<LoginForm />} />
                        <Route path="payment-form" element={<PaymentForm />} />
                    </Route>
                    <Route path="style" element={<Styling />} />
                    <Route path="routePage" element={<RoutePage />}>
                        <Route index element={<ProductPage />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                    </Route>
                    <Route path="api" element={<ApiPage />}>
                        <Route index element={<FetchingData />} />
                        <Route path="pagination" element={<Pagination />} />
                        <Route path="loading" element={<Loading />} />
                    </Route>
                    <Route path="product" element={<ProductListPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="testing" element={<TestingDemo />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    );
}

export default AppRoutes;