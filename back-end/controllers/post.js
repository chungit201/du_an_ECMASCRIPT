import Post from '../models/post';
import formidable from 'formidable';
export const add =(req,res)=>{
    let form = formidable.IncomingForm();
    form.keepExtentsions = true;
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                 error:"Thêm không thành công"
             })
         }
         const {title,desc} = fields;
         if(!title||!desc){
                 return res.status(400).json({
                      error:"Bạn cần nhập đầy đủ thông tin"
                  })
         }
         let post =new Post(fields);
         console.log(fields);
         post.save((err,data)=>{
            if(err){
                res.status(400).json({
                    error:"Them khong thành công"
                })
            }
            res.json(data);
         })
    })

}
export const list = (req,res)=>{
    Post.find((err,data)=>{
        if(err){
            console.log(err);
        }
        res.json(data);
    })
}