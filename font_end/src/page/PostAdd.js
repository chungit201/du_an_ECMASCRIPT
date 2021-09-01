import PostAPI from "../api/postAPI";
import { $ } from "../ultils";
const PostAdd ={
    async render(){
        const {data:posts} = await PostAPI.getAll();
        console.log(posts);
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
                                     <div class="card-header">Add post</div>
                                     <div class="card-body">
                                         <form id="form-add" method="">

                                                <table>
                                                <thead>
                                                    <tr>
                                                        <td>Tiêu đề:</td>
                                                        <td><input type="text" class="form-control" id="title"></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hình ảnh:</td>
                                                        <td><input type="file" class="form-control" id="image"></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nội dung:</td>
                                                        <td><input type="text" class="form-control" id="desc"></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                        <button type="submit" class="btn btn-primary" style="margin-top: 20px;">
                                                        Add Post
                                                    </button>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
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
                    
            const postImage  = $('#image').files[0];
            const storageRef = firebase.storage().ref(`images/${postImage.name}`);
            storageRef.put(postImage).then(function(){
            console.log(postImage);
            storageRef.getDownloadURL().then((url)=>{
                const d= new Date()
                let day ='';
                day = day + d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
                console.log(day);
                const post = new FormData();
                 post.append('title',$('#title').value);
                post.append('img',url);
                post.append('desc',$('#desc').value);
                post.append('date',day)
                console.log(post);
                PostAPI.add(post).then((data)=>{
                        console.log(data);
                        console.log('upload thành công');
                       
                  }).catch(error=>{
                      console.log(error);
                  })
                 
            });
        });
                       
                  });
    }
}

export default PostAdd;
