import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from "query-string";

import { getProducts } from "../../apiCalls/products";
import { Loader } from '../../components/loader/Loader';
import { ProductsDisplay } from '../../components/productsDisplay/ProductsDisplay';

export const Results = () => {

    const [results, setResults] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const { search } = useLocation();
    const query = queryString.parse(search);

    useEffect(() => {
        getProducts(query.search).then(({ data }) => {
            setResults(data.apiResponse.payload.item);
            setCategories(data.apiResponse.payload.categories);
            setIsLoad(true);
        });
    }, [query.search])

  return (
    <>
      <section>
        {isLoad ? (
          <ProductsDisplay results={results} categories={categories} />
        ) : (
          <Loader />
        )}
      </section>
    </>
  )
}
