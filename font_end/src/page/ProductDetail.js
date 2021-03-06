import ProductAPI from "../api/productsAPI";
import Footer from "../conponent/footer";
import Header from "../conponent/header"
import { parseRequestUrl } from "../ultils";

const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: product } = await ProductAPI.get(id);
        const { data: products } = await ProductAPI.gets({_page:1,_limit:5});
        const { data: proincate } = await ProductAPI.gets()
        console.log(products);
        // const resultcate = products.filter(value => value.category == id);
        const resultcate = proincate.filter(producta => producta.category == product.category).map(cate=>{
            return `
            <div class="single-product">
                             <div class="product-f-image">
                                <img src="${cate.img}" width=200px alt="">
                              <div class="product-hover">
                                <a href="" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                <a href="/#/products/${cate._id}" class="view-details-link"><i class="fa fa-eye"></i> View more</a>
                               </div>
                                </div>
                              <h2><a href="/#/products/${cate._id}">${cate.name}</a></h2>
                          <div class="product-carousel-price">
                                <ins>${cate.price}</ins> <del>$100.00</del>
                                </div> 
                              </div>
            `
        }).join("")
        const result = products.data.map(product => {
            return ` 
                        <div class="thubmnail-recent">
                            <img src="${product.img}" class="recent-thumb" alt="">
                            <h2><a href="">${product.name}</a></h2>
                            <div class="product-sidebar-price">
                                <ins>${product.price}</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        `
        }).join("")
        console.log(resultcate);
        return `
        ${await Header.render()}
        
    
    
    
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Search Products</h2>
                        <form action="">
                            <input type="text" placeholder="Search products...">
                            <input type="submit" value="Search">
                        </form>
                    </div>
                    
                    <div class="single-sidebar">
                    <h2 class="sidebar-title">Products</h2>
                        ${result}
                     
                    </div>
                    
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">Recent Posts</h2>
                        <ul>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-8">
                    <div class="product-content-right">
                        <div class="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">${product.name}</a>
                        </div>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="product-images">
                                    <div class="product-main-img">
                                        <img src="${product.img}" alt="">
                                    </div>
                                    
                                    <div class="product-gallery">
                                        <img src="img/product-thumb-1.jpg" alt="">
                                        <img src="img/product-thumb-2.jpg" alt="">
                                        <img src="img/product-thumb-3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="product-inner">
                                    <h2 class="product-name">${product.name}</h2>
                                    <div class="product-inner-price">
                                        <ins>${product.price}</ins> <del>$100.00</del>
                                    </div>    
                                    
                                    <form action="" class="cart">
                                        <div class="quantity">
                                            <input type="number" size="4" class="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1">
                                        </div>
                                        <button class="add_to_cart_button" type="submit">Add to cart</button>
                                    </form>   
                                    
                                    <div class="product-inner-category">
                                        <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p>${product.description}</p>
                                               
                                            </div>
                                            <div role="tabpanel" class="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div class="submit-review">
                                                    <p><label for="name">Name</label> <input name="name" type="text"></p>
                                                    <p><label for="email">Email</label> <input name="email" type="email"></p>
                                                    <div class="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div class="rating-wrap-post">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                       
                        <div class="related-products-wrapper">
                            <h2 class="related-products-title">Related Products</h2>
                            <div class="related-products-carousel">

                            
                            
                                    
                              ${resultcate}
                                
                         
                            </div>       
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    ${await Footer.render()}
        `
    }
}
export default ProductDetail