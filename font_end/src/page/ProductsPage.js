import CategoryAPI from "../api/cateAPI";
import ProductAPI from "../api/productsAPI"
import Footer from "../conponent/footer";
import Header from "../conponent/header"
import { isAuthenticated } from "../ultils";

const ProductsPage = {
  async render() {
    const { data: products } = await ProductAPI.gets({ _page: 1, _limit: 12 })
    console.log(products);
    const { data: category } = await CategoryAPI.getAll();
    const filter_cate = category.map(value => {
      return `
            <a href="/#/categories/${value._id}" style="color:black;">
            <h6 style="line-height: 20px;">- ${value.name}</h6>
            </a>
            `
    }).join('')
    const result = products.data.map(product => {
      return `
            <div class="col-md-3 col-sm-6">
            <div class="single-shop-product">
                <div class="product-upper">
                    <img src="${product.img}" alt="">
                </div>
                <h6 style="margin-top: 10px;"><a href="" style="color:black">${product.name}</a></h6>
                <div class="product-carousel-price">
                    <ins>${product.price}</ins> <del>$999.00</del>
                </div>  
                <div class="product-option-shop">
                    <a class="btn btn-danger" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href=""><i class="fa fa-shopping-cart"></i>Add to cart</a>
                </div>                       
            </div>
        </div>
            `
    }).join("")
    return `
        ${await Header.render()}
        <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/banner-uu-dai-ao-thun-thang-5.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20%C4%90%E1%BB%93%20Nam.jpg" alt="Second slide">
          </div>
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a  class="carousel-control-next" href="" role="button" data-slide="next" style="color:red">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        </div>
        <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
        <h4 class="section-title">Danh mục sản phẩm</h4>
            <div class="row" id="newpage">
            <div class="col-md-2">
            <h5>BỘ LỌC TÌM KIẾM</h5>
            <span>Theo danh mục:</span><br><br>
            <div class="sub-cate">
              ${filter_cate}
            </div>
           
          
       
            </div>
            <div class="col-md-10">
            ${result}
            <div class="col-md-10">
            <div class="product-pagination text-center">
            <nav>
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                ${ProductsPage.pagination({ totalPage: products.totalPage }).join("")}
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>                        
        </div>
        </div>
            </div>
                        
            
                  
          
              </div>                                 
            </div> 
            </div>  
            </div>
            ${await Footer.render()}
        `
  },
  async afterRender() {

    isAuthenticated();
    // const {data : products} = await ProductAPI.gets({ _page : 1, _limit : 8});     
    // console.log(products);
    const btns = document.querySelectorAll('.page-link');
    // const {data : products} = await ProductAPI.gets({ _page : 2, _limit : 8});

    //     console.log(products)
    btns.forEach(btn => {
      const page = btn.dataset.id;

      btn.addEventListener('click', async (e) => {
        document.getElementById('newpage').innerHTML = '';
        e.preventDefault();
        const { data: products } = await ProductAPI.gets({ _page: page, _limit: 12 });
        console.log(page);
        console.log(products);
        products.data.map(product => {
          const newProducts =/*html*/  `   
              <div class="col-md-3 col-sm-6">
              <div class="single-shop-product">
                  <div class="product-upper">
                      <img src="${product.img}" alt="">
                  </div>
                  <h2><a href="" id="title-name">${product.name}</a></h2>
                  <div class="product-carousel-price">
                      <ins>${product.price}</ins> <del>$999.00</del>
                  </div>  
                  
                  <div class="product-option-shop">
                      <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="">Add to cart</a>
                  </div>                       
              </div>
          </div>
                                   `;
          const lisst = document.getElementById('newpage');
          lisst.innerHTML += newProducts;
        }).join("");


      })

    })
  }, pagination({ totalPage }) {
    const paginations = [];
    for (let i = 0; i < totalPage; i++) {
      paginations.push(`<li><a href="#" class="page-link" data-id=${i + 1} >${i + 1}</a></li>`)
    }
    // console.log(paginations);
    return paginations
  }
}
export default ProductsPage