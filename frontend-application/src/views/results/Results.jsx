import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from "query-string";

import { getProducts } from "../../apiCalls/products";

export const Results = () => {

    const [results, setResults] = useState();
    const { search } = useLocation();
    const query = queryString.parse(search);

    useEffect(() => {
        getProducts(query.search).then(({ data }) => {
            //Continue working on this feature
        });
    }, [query.search])

  return (
    <>

    </>
  )
}
