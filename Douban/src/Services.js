/**
 * Public Service Managementa
 * Created by Swain & Addice 
 * @date 20180717
 */
import axios from 'axios';
import http from './fetch/index'
const login = (params) => {
    return http.get('https://api.douban.com/v2/book/1220562', {
        params
    })
}

export default {
    login
}