import CategoryAPI from "../api/cateAPI";
import ProductAPI from "../api/productsAPI";
import Footer from "../conponent/footer";
import Header from "../conponent/header";
import { parseRequestUrl } from "../ultils";

const CategoryPage ={
    async render(){
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: products } = await ProductAPI.gets();
        const {data:category} = await CategoryAPI.get(id);
        const result = products.filter(product => product.category == id).map(value => {
            return `
            <div class="single-product col-md-3" style="float:left">
                        <div class="product-f-image">
                            <img src="${value.img}" alt="">
                            <div class="product-hover">
                                <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                <a href="/#/products/${value._id}" class="view-details-link"><i class="fa fa-eye"></i> View more</a>
                            </div>
                        </div>
                        
                        <h2><a href="/#/products/${value._id}">${value.name}</a></h2>
                        
                        <div class="product-carousel-price">
                            <ins>${value.price}</ins> <del>$100.00</del>
                        </div> 
                    </div>
       
                        
                        `
                    }).join('')
                return ` 
                 ${await Header.render()}
                 </div> <!-- End mainmenu area -->
                 <div id="carousel-example-generic" style=" width: 1140px;margin: 0 auto;" class="carousel slide" data-ride="carousel">
                 <!-- Indicators -->
                 <ol class="carousel-indicators">
                   <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                   <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                   <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                 </ol>
               
                 <!-- Wrapper for slides -->
                 <div class="carousel-inner ">
                 <div class="item active">
                   <img src="https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png" alt="...">
                   <div class="carousel-caption">
                     ...
                   </div>
                 </div>
                 <div class="item">
                   <img src="https://www.namu.com.vn/img/uploads/slider/slishow-1583381669-BANNER_NAMU_1348W%20X%20572H.jpg" alt="...">
                   <div class="carousel-caption">
                     ...
                   </div>
                 </div>
                 ...
               </div>
             
               <!-- Controls -->
               <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                 <span class="glyphicon glyphicon-chevron-left"></span>
               </a>
               <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                 <span class="glyphicon glyphicon-chevron-right"></span>
               </a>
             </div>
                
             <div class="maincontent-area">
                <div class="zigzag-bottom"></div>
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                    <div class="latest-product">
                        <h4 class="section-title">${category.name}</h4>
                        ${result}
                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                 ${await Footer.render()}
                `
          },
          async afterRender(){
            
          }
      }
export default CategoryPage
        
