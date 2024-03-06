import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '../../apiCalls/products';
import { ProductDetailComponent } from '../../components/productDetailComponent/ProductDetailComponent';

export const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    //Need to check this hook initialization because it's give me an infinite loop trying to use it..
    useEffect(() => {
       getProductDetail(id).then(({ data }) => {
            if (data.apiResponse.payload.error) {
                navigate('/'); //No product found with that specific ID
            } else {
                setProduct(data.apiResponse.payload.item);
                setCategories(data.apiResponse.payload.categories);
                setIsLoad(true);
            }
        });
    }, [id, navigate]);

  return (
    <>
    <section>
        {isLoad ? (
            <ProductDetailComponent product={product} categories={categories} />
        ) : (
            <Loader />
        )}
    </section>
    </>
  )
}
