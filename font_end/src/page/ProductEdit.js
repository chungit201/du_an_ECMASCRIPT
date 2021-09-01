import CategoryAPI from "../api/cateAPI";
import ProductAPI from "../api/productsAPI";
import { parseRequestUrl, $ } from "../ultils";

const ProductEditPage = {
  async render() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: category } = await CategoryAPI.getAll();
    const { data: product } = await ProductAPI.get(id);
    console.log(product);
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
                     <div class="content-wrapper">
                     <main class="login-form">
                     <div class="cotainer">
                         <div class="row justify-content-center">
                             <div class="col-md-8">
                                 <div class="card">
                                     <div class="card-header">Register</div>
                                     <div class="card-body">
                                         <form id="form-add" method="">
                                             <div class="form-group row">
                                                 <label for="" class="col-md-4 col-form-label text-md-right">Danh mục</label>
                                                 <div class="col-md-6">
                                                 <select name="" id="category" class="form-control">
                                                 ${category.map(value => {
      return `
                                                  <option value="${value._id}">${value.name}</option>
                                                  `
    })}
                                                
                                             </select>
                                                 </div>
                                             </div>
                                             <div class="form-group row">
                                             <label for="" class="col-md-4 col-form-label text-md-right">Tên sản phẩm</label>
                                             <div class="col-md-6">
                                                 <input type="text" id="name" class="form-control" name="" value="${product.name}" required autofocus>
                                             </div>
                                         </div>
                                         <div class="form-group row">
                                         <label for="" class="col-md-4 col-form-label text-md-right">Ảnh</label>
                                         <div class="col-md-6">
                                             <input type="file" id="image" class="form-control" required autofocus>
                                         </div>
                                     </div>
                                     <div class="form-group row">
                                     <label for="" class="col-md-4 col-form-label text-md-right">Ảnh cũ</label>
                                     <div class="col-md-6">
                                         <img src="${product.img}" id="anh-cu">
                                     </div>
                                 </div>            
                                 <div class="form-group row">
                                     <label for="" class="col-md-4 col-form-label text-md-right">Giá</label>
                                     <div class="col-md-6">
                                         <input type="number" id="oldprice" value="${product.oldprice}" class="form-control" name="" required autofocus>
                                     </div>
                                 </div>
                                 <div class="form-group row">
                                 <label for="" class="col-md-4 col-form-label text-md-right">Giá khuyến mãi</label>
                                 <div class="col-md-6">
                                     <input type="number" id="price" class="form-control" value="${product.price}" name="" required autofocus>
                                 </div>
                             </div>
                                 <div class="form-group row">
                                 <label for="" class="col-md-4 col-form-label text-md-right">Số lượng</label>
                                 <div class="col-md-6">
                                     <input type="number" id="quantity" value="${product.quantity}" class="form-control" name="" required autofocus>
                                 </div>
                             </div>
                             <div class="form-group row">
                             <label for="" class="col-md-4 col-form-label text-md-right">Mô tả</label>
                             <div class="col-md-6">
                                 <input type="text" id="description" value="${product.description}" class="form-control" name="" required autofocus>
                             </div>
                              </div>
                                  <div class="col-md-6 offset-md-4">
                                                 <button type="submit" class="btn btn-primary">
                                                     Add product
                                                 </button>
                                             </div>
                                     </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                     </div>
                 </main>      
                 </div>
               </div>
                 `



  },
  async afterRender() {
    const { id } = parseRequestUrl();
    $('#form-add').addEventListener('submit', (e) => {
      e.preventDefault();
      const productImage = $('#image').files[0];
      const storageRef = firebase.storage().ref(`images/${productImage.name}`);
      storageRef.put(productImage).then(function () {
        console.log(productImage);
        storageRef.getDownloadURL().then((url) => {
          const product = new FormData();
          product.append('name', $('#name').value);
          product.append('category', $('#category').value);
          product.append('description', $('#description').value);
          product.append('price', parseInt($('#price').value));
          product.append('oldprice', parseInt($('#oldprice').value));
          product.append('img', url);
          product.append('quantity', parseInt($('#quantity').value));
          product.append('status', false);
          console.log(product);
          ProductAPI.update(id, product).then((data) => {
            console.log(data);
            console.log('upload thành công');
            window.location.hash = "/list-products";
          }).catch(error => {
            console.log(error);
          })

        });
      });
    });
  }
}
export default ProductEditPage;