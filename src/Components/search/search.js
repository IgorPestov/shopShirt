import React, {Component} from "react";
import './search.css';
import sirvice from "../service";



export default class Search extends Component {

    render() {
        const {product}= this.props.product;
        return(
            <div className='search-item'>
                <span> {product.length} product(s) found.</span>
            </div>
        )

    }


};


