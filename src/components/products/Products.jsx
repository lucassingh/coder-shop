import  React from 'react';
import { ProductsData } from './ProductsData.json';
import Product  from './product/Product';

const Products = () => {

return (
        <>
            <div className="section-products">
                <Product data={ ProductsData }/>
            </div>
            
        </>   
    )
}

export default Products;