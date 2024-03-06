import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from '../../apiCalls/products';

export const ProductDetail = () => {

    let [product, setProduct] = useState({
        item: {}
    });
    const [isLoad, setIsLoad] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    //Need to check this hook initialization because it's give me an infinite loop trying to use it..
    useEffect(() => {
       getProductDetail(id).then(({ data }) => {
            if (data.apiResponse.payload.error) {
                navigate('/'); //No product found with that specific ID
            } else {
                setProduct((p) => {
                    p.item = data.apiResponse.payload.item;
                });
                setIsLoad(true);
            }
        });
    }, [id]);

  return (
    <>
    <section>
        {isLoad ? (
            <ProductDetail product={product} />
        ) : (
            <Loader />
        )}
    </section>
    </>
  )
}
