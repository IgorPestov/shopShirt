import React, {Component} from 'react';
import '../../store'

import './app.css'

import Size from '../size'
import Sorting from "../sorting";
import Search from "../search";
import Shirt from "../shirt";



export default class App extends Component {


    render() {
        const {productsIds, products} = this.props;
        return (
            <div className="container">

                <Size
                      setFilters={this.props.setFilters}
                />
                <div className='search-sorting'>
                    <Search length={productsIds.length}/>
                    <Sorting
                        setSortedData={this.props.setSortedData}
                    />
                </div>
                {products.length ? <Shirt products={productsIds} getProductById={this.props.getProductById}/> : 'jhbjhh'}
            </div>

        )
    }
    ;

}



