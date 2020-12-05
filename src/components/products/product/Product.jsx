import  React from 'react';


const Product = (props) => {
   return (
       <div className="product-container">
            { props.data.map((item, index) => {
                return(
                    <div key={ index } className="product-card">
                        <div className="product-card-img">
                            <img src={item.urlImg} alt="shoe"/>
                        </div>
                        <div className="product-card-body">
                            <h3 className="product-card-title">{ item.title }</h3>
                            <p>{ item.price }</p>

                            <button className="product-card-button">Add to cart</button>
                        </div>
                    </div>                    
                )
            })}
        </div>
    )
}

export default Product;