import { $ } from "../ultils";
import AuthAPI from "../api/auth";
const LoginPage={
    async render(){
        return `
        <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1" style="height: 380px">
                    <h5 style="text-align: center;">Chào mừng bạn đến với Ustora. Đăng nhập ngay! </h6>
                    <form id="form-add">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" id="email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" id="password" />
                        </div>
                       
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                            <a href="/#/create-acount" class="ForgetPwd">Create account.</a>
                        </div>
                    </form>
                    
                </div>
                <div class="col-6">
                    <img src="https://img.lovepik.com/photo/40008/0279.jpg_wh860.jpg">
                    </div>
               
            </div>
        </div>
        `
    },async afterRender(){
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            var email = document.getElementById("email").value;
            var pass = document.getElementById('password').value;
            if (email == "") {
                document.getElementById('erroEmail').innerHTML = "Vui lòng nhập email";
            }
            const user = {
                email: $('#email').value,
                password: $('#password').value
            }

            AuthAPI.signin(user)
                .then(({ data }) => {
                    console.log(data);
                    // nó nhận vào là token chứ k phải object, tocken là 1 chuỗi
                    const sub = data.user.role;
                    console.log(sub);

                    if (sub == 1) {
                       console.log("Thành công");
                        window.location.hash = "/admin";
                    } else {
                        window.location.href = "/";
                    }
                    localStorage.setItem('token', JSON.stringify(data))
                    })
                    .catch(error => {
                    });
        });
    }

}
export default LoginPage