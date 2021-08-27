import React from 'react'
import products from '../data/productData';

const MainContent = () => {
    console.log(products);
   const listItems = products.map((product) => 
       <div className="card" key={product.id}>
           <div className="card_img">
            <img src= {product.image}/>
           </div>
           <div className="card_header">
               <h2>{product.product_name}</h2>
               <p>{product.price}</p>
               <span><p>{product.currency}</p></span>
            <div className="btn">Add to cart</div>   
           </div>
       </div>
   );
   return(
       <div className="main_content">
           <h3>Geeds Stores</h3>
           {listItems}
       </div>
   )
}

export default MainContent
