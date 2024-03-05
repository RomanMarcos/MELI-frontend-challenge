class ApiResponse {

    constructor() {
        this.payload = {
            author: {
              'name': "Marcos Esteban",
              'lastname': "Roman"
            }
        }
    }

    setProducts(products) {
        products.categories ? this.payload.categories = products.categories : null;
        products.items ? this.payload.item = products.items : this.payload = products;
    }

    setError(error) {
        this.payload.error = error;
    }

}

module.exports = ApiResponse;