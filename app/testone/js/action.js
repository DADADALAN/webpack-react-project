import { get, post } from "common/js/http"

export function getInfo(data){
    return get("http://vipshop.tech/mock/185/api/user-info")
    .then((json) => console.log(json))
    .catch((err) => console.warn(err))
}

export function postInfo(data){
    return post("http://vipshop.tech/mock/185/api/vippay-pay",data)
    .then((json) => console.log(json))
    .catch(err => console.warn(err))
}
