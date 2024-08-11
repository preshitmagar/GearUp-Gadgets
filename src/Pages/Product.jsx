import React, {useContext} from 'react';
import {ShopContext} from '../ContextApis/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
    return(
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts />
        </div>
    )

}

export default Product;