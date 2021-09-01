import Product from '../models/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
// export const register = (req,res,next)=>{
//     var username = res.body.username;
//     var password = req.body.password;
//     console.log(username);
// }
// Hiển thị
export  const list= async(req,res)=>{
 
    //pagination
    let { _page,_limit }= req.query;
    _limit = Number(_limit)
    const countDocuments = await Product.countDocuments({});
    console.log(countDocuments);
    if(_page && _limit){
        let currentPage = Number(_page);
        if(currentPage < 1){
            currentPage = 1;
        }
        var skipDocuments = (currentPage - 1) * _limit;
        Product.find({})
        .skip(skipDocuments)
        .limit(_limit)
        .then(docs=>{
            res.status(200).json({
                data : docs, totalPage : Math.ceil(countDocuments / _limit)
            })
        })
        .catch(err=>{
            console.log(err.message);
            res.status(400).json({
                message : ['ERROR_SERVER']
            })
        })
    }else{
        Product.find({})
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.status(400).json('loi sever')
        })
    }
    
    
}

//thêm sản phẩm
export const add=(req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
        console.log(fields);
        if(err){
           return res.status(400).json({
                error:"Thêm không thành công"
            })
        }
        const {name,description,price} = fields;
        if(!name || !description ||!price){
                return res.status(400).json({
                     error:"Bạn cần nhập đầy đủ thông tin"
                 })
        }
        let product =new Product(fields);
        // if(files.image){
        //     if(files.image.size>100000){
        //         return res.status(400).json({
        //             error:"Bạn nêm upload ảnh dưới 1mb"
        //         })
        //     }
        //     product.image.data = fs.readFileSync(files.image.path);
        //     product.image.contentType = files.image.path
        // }
        product.save((err,data)=>{
            if(err){
                return res.status(400).json({
                     error:"Thêm không thành công"
                 })
             }
             res.json(data)
        })
      
     });

 
   
}
export const search = async (req, res) => {
    function xoa_dau(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
    var name = xoa_dau(req.query.name);
    console.log(name);
    var arrProduct = await Product.find();
    // console.log(arrProduct);
    // var matchUsers = [];
    var data = arrProduct.filter(function(item){
       const dulieu = item.name;
       const newvalue =  xoa_dau(dulieu);
    //    console.log(newvalue.toLowerCase());
       
        return newvalue.toLowerCase().indexOf(name.toLowerCase()) !==-1;
        // console.log(item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1); 
    });
    // console.log(data);
    res.json(data)
}
//Chi tiết sản phẩm
export const productById=(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err||!product){
            res.status(400).json({
                error:"khong tim thay san pham"
            })
        }
        req.product = product;
        next();
    })
}

export const read=(req,res)=>{
    return res.json(req.product);
}
//xóa
export const remove =(req,res)=>{
    let product = req.product;
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error:"Khong xoa dc san pham"
            })
        }
        res.json({
            product: deletedProduct,
            message:"san pham da dc xoa thanh cong"
        })
    })
}
export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
        if(err){
           return res.status(400).json({
                error:"Sửa không thành công"
            })
        }
        const {name,description,price} = fields;
        if(!name || !description ||!price){
                return res.status(400).json({
                     error:"Bạn cần nhập đầy đủ thông tin"
                 })
        }
        let product = req.product;
        product = _.assignIn(product,fields)
        // let product =new Product(fields);
        if(files.image){
            if(files.image.size>100000){
                return res.status(400).json({
                    error:"Bạn nêm upload ảnh dưới 1mb"
                })
            }
            product.image.data = fs.readFileSync(files.image.path);
            product.image.contentType = files.image.path
        }
        product.save((err,data)=>{
            if(err){
                return res.status(400).json({
                     error:"Sửa không thành công"
                 })
             }
             res.json(data)
        })
      
     });

 
} 
export const listCategories = (req, res) => {
    // console.log(req.category)
    Product.find({ "category": req.category._id }, (err, products) => {
        if (err) {
            res.status(400).json({
                error: "Products not found"
            })
        }
        products.photo = undefined;
        res.json(products);
    })


}

