import Home from '../page/Home';
import Blog from '../page/Blog';
import Contact from '../page/Contact';
import Introduce from '../page/Introduce';
import Watchman from '../page/Watchman';
import Watchwomen from '../page/Watchwomen';
import DetailProduct from '../page/DetailProduct';
import Cart from '../page/Cart';
import Pay from '../page/Pay';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/blog',
        component: Blog,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/gioi-thieu',
        component: Introduce,
    },
    {
        path: '/dong-ho-nam',
        component: Watchman,
    },
    {
        path: '/dong-ho-nu',
        component: Watchwomen,
    },
    ,
    {
        path: 'product/:id',
        component: DetailProduct,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/thanh-toan',
        component: Pay,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
