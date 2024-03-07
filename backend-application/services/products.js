const axios = require('axios');

const baseUrl = process.env.API_URL;
const STATUS_MAPPER = {
  'new': 'Nuevo',
  'used': 'Usado',
  'not_specified': 'No especificado',
}

const findProducts = async({ search }) => {
    try {
      const products = await getProducts(search);

      if (products.length == 0) throw new Error("No products found");

      let response = {
        categories: [],
        items: []
      };


      products.categories.map((category) => {
        response.categories = [...response.categories, category.name]
      });

      /* 
      The objetive of the promise is to resolve the situation with each product seller address information, because the map() function returns a promise,
      then in order to handle it it's necessary to use the Promise.

      The reason why its commented is because is not efficient to request to each product of the result list EVERY time the some product is searched, 
      and the endpoint https://api.mercadolibre.com/items/${PRODUCT_ID} is the only one I found that retrieve this info.
      
      const [promiseToReturn] = await Promise.all( products.data.map(async(product) => {
         const productData =  await getProductData(product.id);
          response.items = [ ...response.items, parseProduct(product, productData.seller_address.state) ];
          return response;
      }) );

      Instead of this promese, the code below return the necessary data

      */

      products.data.map((product) => {
        response.items = [ ...response.items, parseProduct(product) ];
      });

      return response;
    } catch (err) {
        return {error: err.message}
    }
}

const findProduct = async({ id }) => {
    try {

      const productData = await getProductData(id);
      const productDescription = await getProductDescription(id);

      const response = {
        categories: [],
        items: parseProduct(productData),
      };
    
      response.items.description = productDescription.plain_text;
      response.categories = await getProductCategory(productData.category_id);

      return response;
    } catch(err) {
      return {error: err.message}
    }
}

const getProducts = async(query) => {
    const {data} = await axios.get(`${baseUrl}/sites/MLA/search?`, {
        params: { q: query },
    });
    
    const resultCategory = data.filters.find((filter) => filter.name === 'Categorías');
    const filterCategory = resultCategory ? resultCategory.values[0].path_from_root : [];

    return {
      data: data.results.slice(0, 4),
      categories: filterCategory
    }
}

const getProductData = async(id) => {
    const { data } = await axios.get(`${baseUrl}/items/${id}`);
    return data;
}

const getProductDescription = async(id) => {
    const { data } = await axios.get(`${baseUrl}/items/${id}/description`);
    return data;
}

const getProductCategory = async(categoryID) => {
    const { data } = await axios.get(`${baseUrl}/categories/${categoryID}`);
    return data.path_from_root.map(categoryItem => {
      return categoryItem.name;
    });
}

const parseProduct = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: 0
        },
        picture: product.pictures ? product.pictures[0].url : product.thumbnail,
        condition: STATUS_MAPPER[product.condition],
        free_shipping: product.shipping.free_shipping,
        seller_address: 'Capital Federal'
    }
}

module.exports = {
    findProducts,
    findProduct
};