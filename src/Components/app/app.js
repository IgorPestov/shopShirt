import React, {Component} from 'react';
import '../../store'

import './app.css'

import Size from '../size'
import Sorting from "../sorting";
import Search from "../search";
import Shirt from "../shirt";
import sirvice from "../service";


export default class App extends Component {
    api = new sirvice();
    state = {
        products: [],
        productsIds: [],
        sizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
        sorting: '0'
    };

    componentDidMount() {


        this.api.getAllShirts()
            .then((res) => this.setState({
                products: res.products,
                productsIds: res.products.map(productItem => productItem.id)
            }))

    }

    filterArr = (sizes) => {

        const {products} = this.state;
        console.log('dddd', sizes)
        const productsIds = products.filter(productItem => {
            return sizes.find(filterItem =>
                productItem.availableSizes.find(size => size === filterItem)
            );
        }).map(productItem => productItem.id);

        this.setState({
            productsIds
        })
    }

    setFilters = (sizes) => {

        console.log('uuu')
        if (this.state.sizes.length === 0) {
            sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']
        }

        this.setState({
            sizes
        });

        this.filterArr(sizes)
    };

    getSortedData = (value) => {

        return this.setState({
                sorting: value
            }
        )
        

    };

    getProductById = (id) => {
        return this.state.products.find(element => id === element.id);
    }

    render() {

        const {productsIds, products} = this.state;
        // console.log(this.state.sorting)
        return (
            <div className="container">
                <Size product={this.state}
                      setFilters={this.setFilters}
                />
                <div className='search-sorting'>
                    <Search length={productsIds.length}/>
                    <Sorting product={this.state}
                             getSortedData={this.getSortedData}/>
                </div>
                {products.length ? <Shirt products={productsIds} getProductById={this.getProductById}/> : 'jhbjhh'}
            </div>
        )
    };

}



