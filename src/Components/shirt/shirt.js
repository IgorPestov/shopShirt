import React, {Component} from "react";
import './shirt.css';
import sorting from "../sorting/sorting";




export default class Shirt extends Component {

    //

    // renderArr = () => {
    //
    //     const {product, sizes, sorting} = this.props.product;
    //     return product.map((element, index) => {
    //         const array = this.filterArr(element, sizes)
    //         if (array.length !== 0) {
    //
    //             let a = element.price.toFixed(2);
    //
    //             return (
    //                 <div key={index} className='shirt-item'>
    //                     <img src={require(`../../products/${element.sku}_1.jpg`)}/>
    //                     <span className='shirt-title'>  {element.title} </span>
    //                     <span className='shirt-price'> $ {a} </span>
    //                     <button className='add-shirt'>Add to cart</button>
    //
    //                 </div>)
    //         }
    //
    //     })
    // };

    render() {

        console.log()
        const {products, getProductById} = this.props;
        return (

            <div className="shirts">
                {products.map((element, index) => {
                   const productInfo =  getProductById(element)

                    return (
                        <div key={'cards'+ index} className='shirt-item'>
                            <img src={require(`../../products/${productInfo.sku}_1.jpg`)}/>
                            <span className='shirt-title'>  {productInfo.title} </span>
                            <span className='shirt-price'> $ { productInfo.price.toFixed(2)} </span>
                            <button className='add-shirt'>Add to cart</button>
                        </div>)
                })}
            </div>
        );


    }
}
