const axios = require('axios');

let baseUrl = process.env.API_URL;

const findProducts = async(req, res) => {
    try {
      const query = req.query.search;

      const products = await getProducts(query);

      let response = {
        items: []
      };

      products.map((product) => {
        response.items = [ ...response.items, parseProduct(product, {}) ]
      })
      
      res.status(200).json({ data: response });
    } catch (err) {
        res.status(500).json({ error: 'Error trying to get elements.' });
    }
}

const findProduct = async(req, res) => {
    try {
      const id = req.params.id;

      const productData = await getProductData(id);
      const productPathFromRoot = await getProductCategory(productData.category_id);
      const productDescription = await getProductDescription(id);

      const response = {
        item: parseProduct(productData, productDescription)
      };

      res.status(200).json({ response });
    } catch(err) {
      res.status(500).json({ err });
    }
}

const getProducts = async(query) => {
    const {data} = await axios.get(`${baseUrl}/sites/MLA/search`, {
        params: { q: query },
    });
    return data.results.slice(0, 4);
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
    return data.path_from_root;
}

const parseProduct = (product, productDescription) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: product.original_price
        },
        picture: product.pictures ? product.pictures[0].url : product.thumbnail,
        condition: product.condition,
        free_shipping: product.free_shipping,
        sold_quantity: product.sold_quantity,
        description: productDescription.plain_text
    }
}

module.exports = {
    findProducts,
    findProduct
};