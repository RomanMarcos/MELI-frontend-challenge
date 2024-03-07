/* 
This function will be use on the ProductDetailComponent component to simulate the number of sold quantitu of each product because the in the API 
the value isn't available. 

API Documentation: https://developers.mercadolibre.com.ar/es_ar/atributos
Endpoint that should retrieve this information: https://api.mercadolibre.com/items/${item_id}

*/

export function random_soldQuantity(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}