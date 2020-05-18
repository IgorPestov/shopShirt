import React, {Component} from "react";
import './shirt.css';



export default class Shirt extends Component {



    render() {
        const { product } = this.props.product;

        return (

            <div className="shirts">
                { product.map(element => {

                    let a = element.price.toFixed(2);

                    return (
                        <div className='shirt-item'>
                            <img src={require(`../../products/${element.sku}_1.jpg`)}/>
                            <span className='shirt-title'>  {element.title} </span>
                            <span className='shirt-price'> $ {a} </span>
                            <button className='add-shirt'>Add to cart</button>

                        </div>)
                })}
            </div>
        );


    }
}
