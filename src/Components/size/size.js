import React, {Component} from 'react';

import './size.css'

export default class Size extends Component {

onChange = (e ) => {
        const {product} = this.props.product;
        product.map((element) =>  {
           let sizeShirt = element.availableSizes.filter(size => size === e.target.id);

           console.log(sizeShirt)

            })

    };

    render() {


        return (
            <div className='shirt-size'>
                <span> Size </span>
                <input
                    onChange={this.onChange}
                    id='XS' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='S' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='M' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='ML' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='L' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='XL' type='checkbox'/>
                <input
                    onChange={this.onChange}
                    id='XXL' type='checkbox'/>
            </div>
        );
    }
};
