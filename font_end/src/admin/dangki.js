import AuthAPI from "../api/auth";
import { $ } from "../ultils";
const CreateAccount ={
   async render(){
        return `
        <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-1">
                <h5 style="text-align: center;">Đăng kí thành viên</h6>
                <form id="form-add">
                 <div class="form-group">
                        <input id="username" type="text" class="form-control" placeholder="Username *" value="" />
                    </div>
                    <div class="form-group">
                        <input id="email" type="text" class="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div class="form-group">
                        <input id="password" type="password" class="form-control" placeholder="Your Password *" value="" />
                    </div>
                    <div class="form-group">
                    <input id="password-confirm"  type="password" class="form-control" placeholder="Confirm password *" value="" />
                 </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Submit" />
                    </div>
                    <div class="form-group">
                        <a href="#" class="ForgetPwd">Forget Password?</a>
                    </div>
                </form>
            </div>
            <div class="col-6">
            <img src="https://img.lovepik.com/photo/40008/0007.jpg_wh860.jpg"><br><br><br>
            <h4>Chăm sóc tận tình. Giao hàng thần tốc!!!</h4>
            <p>Desc:CÔNG TY TNHH RECESS
            Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.
            Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM
            Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.</p>
            </div>
        </div>
    </div>
        `
    },
    async afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const passwordConfirm = document.getElementById('password-confirm').value
            if(password == passwordConfirm){
                const user = {
                    name: $('#username').value,
                    email: $('#email').value,
                    password: $('#password').value
                }
                console.log(user);
                AuthAPI.signup(user).then(() => {
                    alert("Đắng kí thành công vui lòng đăng nhập");
                    window.location.hash='/login'
                });
               
            }else{
                alert('Mật khẩu không khớp');
            }
            
        })
    }
}
export default CreateAccount