import React, {Component} from 'react';

import './size.css'
import {scryRenderedDOMComponentsWithClass} from "react-dom/test-utils";

export default class Size extends Component {

    state = {

        sizes: [],

    };

    onChange = (e) => {
        const currentSize = e.target.id
        const { sizes } = this.state;
        const position = sizes.indexOf(currentSize);
        if ( position === -1 ) {
            sizes.push(currentSize);
        } else {
            sizes.splice(position, 1)
        }

        this.props.setFilters(sizes)


        this.setState({
            sizes
        })




    };

    render() {


        return (
            <div className='shirt-size'>
                <span> Size </span>
                <input
                    onChange={this.onChange}
                    id='XS' type='checkbox'/>
                <label>-XS </label>
                <input
                    onChange={this.onChange}
                    id='S' type='checkbox'/>
                <label>-S </label>
                <input
                    onChange={this.onChange}
                    id='M' type='checkbox'/>
                <label>-M </label>
                <input
                    onChange={this.onChange}
                    id='ML' type='checkbox'/>
                <label>-ML </label>
                <input
                    onChange={this.onChange}
                    id='L' type='checkbox'/>
                <label>-L </label>
                <input
                    onChange={this.onChange}
                    id='XL' type='checkbox'/>
                <label>-XL </label>
                <input
                    onChange={this.onChange}
                    id='XXL' type='checkbox'/>
                <label>-XXL </label>
            </div>
        );
    }
};
