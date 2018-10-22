import axios from "axios";

const baseURL='http://211.67.177.56:8080/hhdj';
const instance=axios.create({
    baseURL,
    timeout:20000
});
const xhr={
    //封装get方法
   get(url,data,config){
        return new Promise((resolve,reject)=>{
          instance.get(url,{params:data},config).then(res=>{
             
            // if(res){
                resolve(res.data);
            //  }
          }).catch(error=>{
              reject(error)
          })
        })
   },
   //封装post方法
   post(url,data,config){
    return new Promise((resolve,reject)=>{
      instance.post(url,data,config).then(res=>{
        // if(res.code==1){
            resolve(res.data);
        // }
      }).catch(error=>{
          reject(error);
      })
    })
}
}
export const $axios=xhr;



