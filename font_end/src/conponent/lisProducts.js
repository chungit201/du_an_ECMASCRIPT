import ProductAPI from "../api/productsAPI";
import { $, logout, reRender } from "../ultils";
const listProduct = {
  async render() {
    const { data: products } = await ProductAPI.gets({ _page: 1, _limit: 6 });
    return `
                 <div class=" container-scroller">
                 <!-- partial:partials/_navbar.html -->
                 <nav class="navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                   <div class="bg-white text-center navbar-brand-wrapper">
                     <a class="navbar-brand brand-logo" href="index.html"><img src="img/logo_star_black.png" /></a>
                     <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo_star_mini.jpg" alt=""></a>
                   </div>
                   <div class="navbar-menu-wrapper d-flex align-items-center">
                     <button class="navbar-toggler navbar-toggler d-none d-lg-block navbar-dark align-self-center mr-3" type="button" data-toggle="minimize">
                       <span class="navbar-toggler-icon"></span>
                     </button>
                     <form class="form-inline mt-2 mt-md-0 d-none d-lg-block">
                       <input class="form-control mr-sm-2 search" type="text" placeholder="Search">
                     </form>
                     <ul class="navbar-nav ml-lg-auto d-flex align-items-center flex-row">
                       <li class="nav-item">
                         <a class="nav-link profile-pic" href="#"><img class="rounded-circle" src="img/face.jpg" alt=""></a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" href="#"><i class="fa fa-th"></i></a>
                       </li>
                     </ul>
                     <button class="navbar-toggler navbar-dark navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                       <span class="navbar-toggler-icon"></span>
                     </button>
                   </div>
                 </nav>
             
                 <!-- partial -->
                 <div class="container-fluid">
                   <div class="row row-offcanvas row-offcanvas-right">
                     <!-- partial:partials/_sidebar.html -->
                     <nav class="bg-white sidebar sidebar-offcanvas" id="sidebar">
                       <div class="user-info">
                         <img src="img/face.jpg" alt="">
                         <p class="name">Richard V.Welsh</p>
                         <p class="designation">Manager</p>
                         <span class="online"></span>
                       </div>
                       <ul class="nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/#/admin">
                    <img src="img/icons/1.png" alt="">
                    <span class="menu-title">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/list-products">
                    <img src="img/icons/2.png" alt="">
                    <span class="menu-title">Products</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/categories">
                    <img src="img/icons/005-forms.png" alt="">
                    <span class="menu-title">Categories</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/user">
                    <img src="img/icons/4.png" alt="">
                    <span class="menu-title">User</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/blog">
                    <img src="img/icons/5.png" alt="">
                    <span class="menu-title">Bolg</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/charts/index.html">
                    <img src="img/icons/6.png" alt="">
                    <span class="menu-title">Charts</span>
                  </a>
                </li>
              
      
                
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="img/icons/10.png" alt="">
                    <span class="menu-title">Settings</span>
                  </a>
                </li>
              </ul>
                     </nav>
             
                     <!-- partial -->
                     <div class="content-wrapper table-products" >
                     <div class="container">
                     <div class="row  custyle">
                     <a href="/#/add-products" class="btn btn-primary btn-xs pull-right"><b>+</b> Add new products</a>
                     <form  id="search-product">
                          <input type="text" placeholder="Search.." name="search" id="search">
                          <button type="submit"><i class="fa fa-search"></i></button>
                     </form>
                     <table class="table table-striped custab">
                     <thead>
                 
                         <tr>
                             <th>#</th>
                             <th>Name</th>
                             <th>Image</th>
                             <th>Price</th>
                             <th>Quantity</th>
                             <th>Status</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                             <tbody id="newpage">
                             ${products.data.map((value, index = 0) => {
                                index++
                                  return `
                                 <tr>
                                 <td>${index}</td>
                                 <td>${value.name}</td>
                                 <td><img src="${value.img}" width=50px></td>
                                 <td>${value.price}</td>
                                 <td>${value.quantity}</td>
                                 <td>${value.status}</td>
                                 <td class="text-center">
                                 <a class='btn btn-info btn-xs' href="/#/products-edit/${value._id}">
                                 <span class="glyphicon glyphicon-edit"></span> Edit
                                 </a>
                                  <a data-id="${value._id}" class="btn btn-danger btn-xs" id="remove-products"><span class="glyphicon glyphicon-remove"></span> Del</a>
                                  </td>
                             </tr>
                                 `
    }).join('')}
                            
                             </tbody>
                     </table>
                     <div class="col-md-12">
                    <div class="product-pagination text-center">
                        <nav>
                          <ul class="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            ${listProduct.pagination({ totalPage: products.totalPage }).join("")}
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
                     <!-- partial:partials/_footer.html -->
                     <footer class="footer">
                       <div class="container-fluid clearfix">
                         <span class="float-right">
                             <a href="#">Star Admin</a> &copy; 2017
                         </span>
                       </div>
                     </footer>
             
                     <!-- partial -->
                   </div>
                 </div>
             
               </div>
                 `




  }
  , async afterRender() {
    const btnlog =  document.getElementById('logout')
    btnlog.addEventListener('click',()=>{
      logout()
    })
    const panginationProduct = async()=>{
      const btnss = document.querySelectorAll('.page-link');
    // const {data : products} = await ProductAPI.gets({ _page : 2, _limit : 8});

    //     console.log(products)
    btnss.forEach(btn => {
      const page = btn.dataset.id;
      btn.addEventListener('click', async (e) => {
        document.getElementById('newpage').innerHTML = '';
        e.preventDefault();
        const { data: products } = await ProductAPI.gets({ _page: page, _limit: 6 });
        console.log(page);
        console.log(products);
        products.data.map((value, index = 1) => {
          index++
          const newProduct = `
             <tr>
             <td>${index}</td>
             <td>${value.name}</td>
             <td><img src="${value.img}" width=50px></td>
             <td>${value.price}</td>
             <td>${value.quantity}</td>
             <td>${value.status}</td>
             <td class="text-center">
             <a class='btn btn-info btn-xs' href="/#/products-edit/${value._id}">
             <span class="glyphicon glyphicon-edit"></span> Edit
             </a>
              <a data-id="${value._id}" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
              </td>
         </tr>
             `
          const lisst = document.getElementById('newpage');
          lisst.innerHTML += newProduct;
        }).join("")


      })

    })
    }
    const  deleteProduct= async()=> {
      const { data: products } = await ProductAPI.gets();
      console.log(products);
      let btns = document.querySelectorAll('#remove-products');
      btns = [...btns]
      if (btns) {
        btns.map(btn => {
          const id = btn.dataset.id;
          btn.addEventListener('click', function () {
            ProductAPI.remove(id).then(() => {
              window.location.reload();
            });

          })
        })
      }
    }
    const search =()=>{
      document.getElementById('search-product').addEventListener('submit',async(e)=>{
          e.preventDefault();
          const valueSearch = document.getElementById('search').value;
          let url =`http://localhost:8000/api/search?name=${valueSearch}`
          fetch(url)
          .then(response=>response.json(response))
          .then(data=>{
            console.log(data);
            document.getElementById('newpage').innerHTML = '';
            const result = data.map((value,index=0)=>{
                index ++
                return `
                <tr>
                <td>${index}</td>
                <td>${value.name}</td>
                <td><img src="${value.img}" width=50px></td>
                <td>${value.price}</td>
                <td>${value.quantity}</td>
                <td>${value.status}</td>
                <td class="text-center">
                <a class='btn btn-info btn-xs' href="/#/products-edit/${value._id}">
                <span class="glyphicon glyphicon-edit"></span> Edit
                </a>
                 <a data-id="${value._id}" class="btn btn-danger btn-xs" id="remove-products"><span class="glyphicon glyphicon-remove"></span> Del</a>
                 </td>
            </tr>
                `
            })
            document.getElementById('newpage').innerHTML +=result
          })
      })
    }
    panginationProduct();
    deleteProduct();
    search();
  }, pagination({ totalPage }) {
    const paginations = [];
    for (let i = 0; i < totalPage; i++) {
      paginations.push(`<li><a href="#" class="page-link" data-id=${i + 1} >${i + 1}</a></li>`)
    }
    // console.log(paginations);
    return paginations
  }
}
export default listProduct