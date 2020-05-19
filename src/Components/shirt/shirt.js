import React, {Component} from "react";
import './shirt.css';


export default class Shirt extends Component {


    render() {

        console.log()
        const {products, getProductById} = this.props;
        return (

            <div className="shirts">
                {products.map((element, index) => {
                    const productInfo = getProductById(element);

                    return (
                        <div key={'cards' + index} className='shirt-item'>
                            <img src={require(`../../products/${productInfo.sku}_1.jpg`)}/>
                            <span className='shirt-title'>  {productInfo.title} </span>
                            <span className='Free-shipping' > Free shipping</span>
                            <span className='shirt-price'> $ {productInfo.price.toFixed(2)} </span>
                            <button className='add-shirt'>Add to cart</button>
                        </div>)
                })}
            </div>
        );


    }
}
