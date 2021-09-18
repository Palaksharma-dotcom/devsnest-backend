import React,  { userContext } from "react";
import { productcontext } from "../productcontext";
const products=()=>{
    const {products} = userContext(productcontext);
    // console.log(data);
    return(
        <div className="products">
            {products.map((product)=>
            (
                <div className="product " key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="not found" />

             </div>
             <div  className="product-details">
                 <div className="product-name">{product.name}
                     </div>
                    <div className="product-price">
                        ${product.price}.00
                    </div>
                     
                     </div>   
                     </div>   
            
        ))}
        </div>
    )
}
export default products;