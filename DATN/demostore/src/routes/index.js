import HomePage from "../pages/HomePage.js/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage"
import ProductPage from "../pages/ProductPage/ProductPage"
import SigInPage from "../pages/SigInPage/SigInPage"
import SigUpPage from "../pages/SigUpPage/SigUpPage"
import NewsPage from "../pages/NewsPage/NewsPage"
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage"
import ContactPage from '../pages/ContactPage/ContactPage.jsx'
import CartPage from '../pages/CartPage/CartPage'
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage'
export const routes = [
    {
       path: '/',
       page: HomePage,
       isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SigInPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SigUpPage,
        isShowHeader: true
    },
    {
        path: '/news',
        page: NewsPage,
        isShowHeader: true
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: CartPage,
        isShowHeader: true
    },
    {
        path: '/delivery',
        page: DeliveryPage,
        isShowHeader: true
    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]