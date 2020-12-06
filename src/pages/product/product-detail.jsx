import React from 'react'
import ProductDetail from './../../components/products/product-detail/ProductDetail';
import { productDetailData } from '../../components/products/product-detail/ProductDetailData';

function ProductDetail() {
   
    return (
        <>
           <ProductDetail data={ productDetailData  }/>
        </>
    );
}
export default ProductDetail;