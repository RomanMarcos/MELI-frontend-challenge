import axios from "axios";
import { env } from '../env/env.js';

export function getProducts(query) {
    return axios.get(`${env.url}/items/`, 
        {
            params: {
               search: query
           }
       }
    );
}

export function getProductDetail(id) {
    return axios.get(`${env.url}/items/${id}`);
}