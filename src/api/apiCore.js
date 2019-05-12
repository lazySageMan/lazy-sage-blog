// 全局网络请求起点
import axios from 'axios'

class Http {
    constructor(){
        this.apiHost = 'http://127.0.0.1:3000'
    }

    createUrl(url){
        return this.apiHost + url;
    }

    async getData(url, token = null){
        let baseUrl = this.createUrl(url);
        let data = await axios({
            method: "get",
            url: baseUrl,
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            return {
                status: true,
                data: res.data
            }
        }).catch(err => {
            return {
                status: false,
                msg: err.response.msg,
                code: err.response.status
            }
        })

        return data;
    }

    async postData(url, userData = null, token = null){
        let baseUrl = this.createUrl(url);
        let data = await axios({
            method: "post",
            url: baseUrl,
            data: userData,
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            return {
                status: true,
                data: res.data
            }
        }).catch(err => {
            return {
                status: false,
                msg: err.response.msg,
                code: err.response.status
            }
        })

        return data;
    }
}

export default Http;