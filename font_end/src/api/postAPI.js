import {axiosClient} from './axiosClient';
const PostAPI = {
    getAll(){
        const url = '/blog';
        return axiosClient.get(url);
    },
    get(id){
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    add(blog){
        const url = `/blog`;
        return axiosClient.post(url,blog);
    },
    // update(id,data){
    //     const url =`/category/${id}`;
    //     return axiosClient.put(url,data);
    // },
    // remove(id){
    //     const url =`/category/${id}`;
    //     return axiosClient.delete(url);
    // }   
}
export default PostAPI;