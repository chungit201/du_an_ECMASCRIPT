import PostAPI from "../api/postAPI";
import ProductAPI from "../api/productsAPI";
import Footer from "../conponent/footer"
import Header from "../conponent/header"
import { $, currency, getCarts, isAuthenticated } from "../ultils";
const Home ={
    async render(){
        const {data:posts} = await PostAPI.getAll();
        const {data : products} = await ProductAPI.gets({ _page : 1, _limit : 8});     
        console.log(products);
        const listPost = posts.map(post=>{
          return `
          <div class="col-md-4" >
          <div class="item-box-blog">
            <div class="item-box-blog-image">
              <!--Date-->
              <figure> <img alt="" src="${post.img}"> </figure>
            </div>
            <div class="item-box-blog-body">
              <!--Heading-->
              <div class="item-box-blog-heading">
                <a href="#" tabindex="0">
                  <h5 class="post-title">${post.title}</h5>
                </a>
              </div>
              <!--Data-->
              <div class="item-box-blog-data" style="padding: px 15px;">
                <p><i class="fa fa-user-o"></i> Admin, <i class="fa fa-comments-o"></i> Comments(3)</p>
              </div>
              <!--Text-->
              <div class="item-box-blog-text">
                <p>${post.desc}</p>
              </div>
              <div class="mt"> <a href="#" tabindex="0" class="btn btn-primary">View more</a> </div>
              <!--Read More Button-->
            </div>
          </div>
        </div>
          `
        }).join("") 
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
         <div class="promo-area">
         <div class="zigzag-bottom"></div>
         <div class="container">
             <div class="row">
                 <div class="col-md-3 col-sm-6">
                     <div class="single-promo promo1">
                         <i class="fa fa-refresh"></i>
                         <p>30 Days return</p>
                     </div>
                 </div>
                 <div class="col-md-3 col-sm-6">
                     <div class="single-promo promo2">
                         <i class="fa fa-truck"></i>
                         <p>Free shipping</p>
                     </div>
                 </div>
                 <div class="col-md-3 col-sm-6">
                     <div class="single-promo promo3">
                         <i class="fa fa-lock"></i>
                         <p>Secure payments</p>
                     </div>
                 </div>
                 <div class="col-md-3 col-sm-6">
                     <div class="single-promo promo4">
                         <i class="fa fa-gift"></i>
                         <p>New products</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
          
                <div class="col-md-12">
                <div class="latest-product">
                    <h2 class="section-title">Latest Products</h2>
                        ${products.data.map(value=>{
                            return `
                            <div class="single-product col-md-3 col-sm-6" style="float:left">
                            <div class="product-f-image">
                                <img src="${value.img}" alt="">
                                <div class="product-hover">
                                    <a href="" data-id="${value._id}" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="/#/products/${value._id}" class="view-details-link"><i class="fa fa-eye"></i> View more</a>
                                </div>
                            </div>
                            
                            <h2><a href="/#/products/${value._id}">${value.name}</a></h2>
                            
                            <div class="product-carousel-price">
                                <ins>${currency(value.price)}</ins> 
                                <del>${value.oldprice}</del>
                            </div> 
                        </div>
                            `
                        }).join('')}
                        
                
           
               
                    
                    </div><br><br>
                    
                    
                </div>
            </div>
            <center><a href="/#/products" class="btn btn-secondary view-all">XEM TẤT CẢ</a></center>
            <!-- end-row -->           

        </div>
    </div>
    <!-- post -->
    <div class="container cta-100 ">
    <div class="container">
      <div class="row blog">
        <div class="col-md-12">
        <h2 class="section-title">-- XU HƯỚNG --</h2>
          <div id="blogCarousel" class="carousel slide container-blog" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#blogCarousel" data-slide-to="1"></li>
            </ol>
            <!-- Carousel items -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  ${listPost}
                </div>
                <!--.row-->
              </div>
              <!--.item-->

              <div class="carousel-item ">
                <div class="row">
                        ${listPost}
                </div>
                <!--.row-->
              </div>
              <!--.item-->
            </div>
            <!--.carousel-inner-->
          </div>
          <!--.Carousel-->
        </div>
      </div>
    </div>
  </div>
        <br><br>
         ${await Footer.render()}
        `
    },
    async afterRender(){
        isAuthenticated();
        const btns = $('.add-to-cart-link');
        btns.forEach(btn=>{
            const id = btn.dataset.id;
            btn.addEventListener('click', async(e)=>{
              e.preventDefault();
              if(localStorage.getItem('token')){
                console.log(id);
                const {data : product}= await ProductAPI.get(id);
                console.log(product);
                let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
                var quantity =1;
                carts.push({
                    id : `${product._id}`,
                    ten_sp: `${product.name}`,
                    image :`${product.img}`,
                    price :  `${product.price}`,
                    quantity : quantity
                });
                const cat = getCarts()
        
                localStorage.setItem('carts', JSON.stringify(carts));              
                alert("Thêm vào giỏ hàng thành công");
                window.location.reload();
              }else{
                alert("Bạn cần đăng nhập")
                window.location.hash= '/login'
              }
              })
              
              
        })
      
    }
}
export default Home