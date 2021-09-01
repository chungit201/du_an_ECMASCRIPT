export const parseRequestUrl = () =>{
    const url = window.location.hash.toLowerCase(); //  /#/products/1
    const request = url.split('/'); // ["#",'product','1']

    return{
        resource : request[1],
        id : request [2]
    }
}
export const $ = selector =>{
    let elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : [...elements] ;
}
export const reRender = async (component,position="")=>{
    if(position){
        $(position).innerHTML =await component.render();
    }else{
        $('#main-content').innerHTML =await component.render();
    }
    await component.afterRender();
}
export const currency = (money)=>{
    return money.toLocaleString('it-IT', {style : 'currency', currency : 'vnd'});
}
export const authenticated =({accessToken})=>{
const user = jtw_decode(accessToken);
    if(typeof window !=='undefined'){
        return localStorage.setItem['user', JSON.stringify(user)];
    }
}
export const isAuthenticated =  () => {
    
    if(localStorage.getItem('token')){
        const {user} =JSON.parse( localStorage.getItem('token'));
         console.log(user);
         if(user.role==1){
            $('.user-menu').innerHTML = `
        <ul>
                            <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                            <li class="sub-menu"><a href="/#/admin"><i class="fa fa-user"></i> ${user.name}</a></li>
                                <a href="" id="log-out">Đăng xuất</a>
                        </ul>
    
        `;
         }else{
            $('.user-menu').innerHTML = `
            <ul>
                            <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                            <li class="sub-menu"><a href=""><i class="fa fa-user"></i> ${user.name}</a></li>
                                <a href="" id="log-out">Đăng xuất</a>
                        </ul>
    
        `;
         }
        
      
        
        document.getElementById('log-out').addEventListener('click',function(){
            logout()
           });
           
      }
    
  

}
export const logout= ()=>{
    if(localStorage.getItem('token')){
        return localStorage.removeItem('token')
    }
}
export const getCarts = () => {
    if(typeof window=='undefined'){
        return false;
    }
    if(localStorage.getItem('carts')){
        return JSON.parse(localStorage.getItem('carts'));

    }else{
        return false;
    }
    
}
export const totalPrice=()=>{
    var totalPrice = 0;
        const carts = JSON.parse(localStorage.getItem('carts'));
       
        carts.forEach((cart,index)=>{
           totalPrice+= parseInt(cart.price*cart.quantity)
         })
        return totalPrice;
}
