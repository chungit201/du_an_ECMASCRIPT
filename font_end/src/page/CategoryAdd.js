import CategoryAPI from "../api/cateAPI";

import { $ } from "../ultils";
const CategoryAdd ={
    async render(){
      const {data:category}= await CategoryAPI.getAll();
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
                  <a class="nav-link" href="index.html">
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
                  <a class="nav-link" href="pages/forms/index.html">
                    <img src="img/icons/005-forms.png" alt="">
                    <span class="menu-title">Forms</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/ui-elements/buttons.html">
                    <img src="img/icons/4.png" alt="">
                    <span class="menu-title">Buttons</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/tables/index.html">
                    <img src="img/icons/5.png" alt="">
                    <span class="menu-title">Tables</span>
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
                                             <label for="" class="col-md-4 col-form-label text-md-right">Tên danh mục</label>
                                             <div class="col-md-6">
                                                 <input type="text" id="cate-name" class="form-control" name="" required autofocus>
                                             </div>
                                         </div>
                                  <div class="col-md-6 offset-md-4">
                                                 <button type="submit" class="btn btn-primary">
                                                     Add Category
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
    async afterRender(){
        $('#form-add').addEventListener('submit', (e) => {
            e.preventDefault();
                      const category = {
                          name: $('#cate-name').value, 
                        }
                        CategoryAPI.add(category).then(()=>{
                          window.location.hash = "/categories";
                        });
                       
                  });
    }
}

export default CategoryAdd;