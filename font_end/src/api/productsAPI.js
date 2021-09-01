import {axiosClient} from './axiosClient';

const ProductAPI = {
    gets(params){
        const url = '/products';
        return axiosClient.get(url,{
            params
        })
    },
    // getAll(limit){
    //     let url = '';
    //     if(limit){
    //         url =`/products?_limit=${limit}`;
    //     }else{
    //         url =`/products`;
    //     }
    //      return axiosClient.get(url);
    // },
    // getPage(page){
    //     let url=''
    //     if(page){
    //         url =`/products?page=${page}`
    //     }else{
    //         url =`/products`;
    //     }
    //     return axiosClient.get(url);
    // },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    
    add(product){
        const url = `/products`;
        return axiosClient.post(url,product);    
    },
    update(id,data){
        const url =`/products/${id}`;
        return axiosClient.put(url,data);
    },
    remove(id){
        const url =`/products/${id}`;
        return axiosClient.delete(url);
    }   
}
export default ProductAPI;