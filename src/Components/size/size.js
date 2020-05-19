import React, {Component} from 'react';

import './size.css'


export default class Size extends Component {

    state = {

        sizes: [],

    };

    onChange = (e) => {
        const currentSize = e.target.id;
        const {sizes} = this.state;
        const position = sizes.indexOf(currentSize);
        if (position === -1) {
            sizes.push(currentSize);
        } else {
            sizes.splice(position, 1)
        }

        this.props.setFilters(sizes);


        this.setState({
            sizes
        })


    };

    render() {


        return (
            <div className='shirt-size'>
                <span className='size-name'> Sizes : </span>
                <div className='size-checkbox'>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='XS' type='checkbox'/>
                    <label htmlFor={'XS'}
                           className='checkbox-text'>
                        XS
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='S' type='checkbox'/>
                    <label htmlFor={'S'}
                           className='checkbox-text'>
                        S
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='M' type='checkbox'/>
                    <label htmlFor={'M'}>
                        M
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='ML' type='checkbox'/>
                    <label htmlFor={'ML'}>
                        ML
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='L' type='checkbox'/>
                    <label htmlFor={'L'}>
                        L
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='XL' type='checkbox'/>
                    <label htmlFor={'XL'}>
                        XL
                    </label>
                    <input className='checkbox'
                           onChange={this.onChange}
                           id='XXL' type='checkbox'/>
                    <label htmlFor={'XXL'}>
                        XXL
                    </label>
                </div>
            </div>
        );
    }
};
