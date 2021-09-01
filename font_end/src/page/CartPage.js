import Footer from "../conponent/footer"
import Header from "../conponent/header"
import { currency, getCarts, totalPrice } from "../ultils"

const CartPage ={
    async render(){
        const carts = getCarts();
       
        const totalCart = totalPrice();
        console.log(totalCart);
        return `
        ${await Header.render()}
      
    
    
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Search Products</h2>
                        <form action="#">
                            <input type="text" placeholder="Search products...">
                            <input type="submit" value="Search">
                        </form>
                    </div>
                    
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Products</h2>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" class="recent-thumb" alt="">
                            <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                    </div>
                    
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Recent Posts</h2>
                        <ul>
                            <li><a href="#">Sony Smart TV - 2015</a></li>
                            <li><a href="#">Sony Smart TV - 2015</a></li>
                            <li><a href="#">Sony Smart TV - 2015</a></li>
                            <li><a href="#">Sony Smart TV - 2015</a></li>
                            <li><a href="#">Sony Smart TV - 2015</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-8">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            <form method="post" action="#">
                                <table cellspacing="0" class="shop_table cart">
                                    <thead>
                                        <tr>
                                            
                                            <th class="product-thumbnail">Image</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                            <th class="product-remove">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${carts.map((value,index)=>{
                                        
                                        return `
                                        <tr class="cart_item">
                                           
                                        <td class="product-thumbnail">
                                            <a href="single-product.html"><img style="width:30px"  alt="poster_1_up" class="shop_thumbnail" src="${value.image}"></a>
                                        </td>

                                        <td class="product-name">
                                            <a href="single-product.html">${value.ten_sp}</a> 
                                        </td>

                                        <td class="product-price">
                                            <span class="amount">${value.price}</span> 
                                        </td>

                                        <td class="product-quantity">
                                            <div class="quantity buttons_added">
                                                <input type="number" size="4" class="input-text qty text" title="số lượng" value="${value.quantity}" min="0" step="1">
                                            </div>
                                        </td>

                                        <td class="product-subtotal">
                                            <span class="amount">${parseInt(value.price * value.quantity)}</span> 
                                        </td>
                                        <td class="product-remove">
                                        <a title="Remove this item" class="remove" href="#" data-id="${value.id}">×</a> 
                                    </td>
                                    </tr>
                                        `
                                    })}
                                        
                                        
                                        <tr>
                                            <td class="actions" colspan="6">
                                                <div class="coupon">
                                                    <label for="coupon_code">Coupon:</label>
                                                    <input type="text" placeholder="Coupon code" value="" id="coupon_code" class="input-text" name="coupon_code">
                                                    <input type="submit" value="Apply Coupon" name="apply_coupon" class="button" id="code-submit">
                                                </div>
                                                <input type="submit" value="Update Cart" name="update_cart" class="button"><br><br>
                                                <span style="font-weight:bold;" id="total-price">Tổng tiền: ${currency(totalCart)}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                         
                            <div class="cart_totals ">
                                <h2>Cart Totals</h2>
                                <table cellspacing="0">
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>Cart Subtotal</th>
                                            <td><span class="amount">£15.00</span></td>
                                        </tr>

                                        <tr class="shipping">
                                            <th>Shipping and Handling</th>
                                            <td>Free Shipping</td>
                                        </tr>

                                        <tr class="order-total">
                                            <th>Order Total</th>
                                            <td><strong><span class="amount">£15.00</span></strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/#/checkout"><input style="margin-top: 20px;" type="submit" value="Checkout" name="proceed" class="checkout-button button alt wc-forward"></a>
                            </div>
                           

                            

                          
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
        ${await Footer.render()}
        `
    },async afterRender(){
        let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
        let btns = document.querySelectorAll('.remove');
        btns = [...btns]
        if (btns) {
          btns.map(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function () {
              const newCart = carts.filter(item => item.id !== id);
              localStorage.setItem('carts', JSON.stringify(newCart))
              window.location.reload();
            })
          })
        }

        const code = document.getElementById('code-submit');
        const manhap = document.getElementById('coupon_code');
        const price = document.getElementById('total-price')
        code.addEventListener('click', async(e)=>{
            e.preventDefault();
            console.log(manhap.value);
            const macode = "CHUNGDEPTRAI";
            // console.log(macode);
            const totalprice  = totalPrice()
            if(manhap.value == macode){
                alert("Nhập mã code thành công")
               price.innerHTML = `Tổng tiền: ${currency(totalprice*50/100)}`
            }else{
                alert("Mã khuyễn mãi sai!")
            }
        })
    }
}
export default CartPage;