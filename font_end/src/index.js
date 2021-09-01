import adminPage from "./admin/adminPage";
import CreateAccount from "./admin/dangki";
import LoginPage from "./admin/login";
import listProduct from "./conponent/lisProducts";
import listCategories from "./conponent/list-categories";
import listPost from "./conponent/listpost";
import CartPage from "./page/CartPage";
import CategoryAdd from "./page/CategoryAdd";
import CategoryEdit from "./page/CategoryEdit";
import CategoryPage from "./page/CategoryPage";
import CheckOut from "./page/CheckOut";
import Error404Page from "./page/Error404Page";
import Home from "./page/HomePage";
import PostAdd from "./page/PostAdd";
import ProductDetail from "./page/ProductDetail";
import ProductEditPage from "./page/ProductEdit";
import ProductAdd from "./page/ProductsAdd";
import ProductsPage from "./page/ProductsPage";
import SearchPage from "./page/search";
import UserPage from "./page/User";
import { parseRequestUrl,$ } from "./ultils";

const routes = {
    '/' : Home,
    '/products/:id' : ProductDetail,
    '/admin':adminPage,
    '/login': LoginPage,
    '/create-acount':CreateAccount,
    '/list-products': listProduct,
    '/add-products':ProductAdd,
    '/categories':listCategories,
    '/add-categories':CategoryAdd,
    '/category-edit/:id':CategoryEdit,
    '/categories/:id' : CategoryPage,
    '/cart':CartPage,
    '/products':ProductsPage,
    '/user':UserPage,
    '/products-edit/:id':ProductEditPage,
    '/blog': listPost,
    '/search':SearchPage,
    '/post-add':PostAdd,
    '/checkout':CheckOut
}
const router = async () => {
    const {resource,id} = parseRequestUrl();
    const parseUrl =  (resource ? `/${resource}` : '/') + (id ? `/:id` :'');
  

  
    // console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    // console.log(page); 
    // $('#header').innerHTML = await Header.render();
    // $('#footer').innerHTML = await Footer.render();
    $('#main-content').innerHTML = await page.render();
 
    if(page.afterRender){
        await page.afterRender();
    }
}
    window.addEventListener('DOMContentLoaded', router);
    window.addEventListener('hashchange',router);
// const router =() =>{
//     document.querySelector('#main-content').innerHTML = Home.render();
// }


