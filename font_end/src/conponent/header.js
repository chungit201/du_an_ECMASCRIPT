import CategoryAPI from "../api/cateAPI";
import { currency, getCarts } from "../ultils";

const Header ={
     async render(){
        const {data:categories} = await CategoryAPI.getAll();
        const carts =getCarts();
        let totalPrice = 0;
        let totalProduct = 0;
        if(carts){
        totalProduct = carts.length;
        carts.forEach((cart,index)=>{
            totalPrice+= parseInt(cart.price*cart.quantity)
            console.log(totalPrice);
         })
       }
        return `
        <div class="header-area">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="user-menu">
                        <ul>
                            <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                            <li><a href="/#/login"><i class="fa fa-user"></i> Login</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="header-right">
                        <ul class="list-unstyled list-inline">
                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">currency :</span><span class="value">USD </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End header area -->
    
    <div class="site-branding-area">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="logo">
                        <h1><a href="./"><img src="img/logo.png"></a></h1>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                <div class="search-container">
                <form id="form-search" action="" method="POST">
                  <input type="text" placeholder="Search.." name="search" id="search" style="width:290px">
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="shopping-item">
                        <a href="/#/cart">Cart - <span class="cart-amunt">${currency(totalPrice)}</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">${totalProduct}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End site branding area -->
    
    <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> 
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav" style="flex-direction: row;">
                        <li><a href="/#/">Trang chủ</a></li>
                        <li><a href="/#/products">Sản Phẩm</a></li>
                        ${categories.map(category=>{
                            return `
                            <li><a href="/#/categories/${category._id}">${category.name}</a></li>
                            `
                        }).join('')}
                        <li><a href="#">Liên hệ</a></li>
                        <li><a href="#">Tin tức</a></li>
                    </ul>
                </div>  
            </div>
        </div>
  
</div> 
 
        `
     }
}
export default Header