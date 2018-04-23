import { stringify } from "querystring";

export function post(url, data){
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: stringify(data),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(res => res.json())
    .catch(err => console.warn(err));
}

export function get(url ,data){
    return fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .catch(err => console.warn(err));
}