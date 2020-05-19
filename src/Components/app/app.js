import React, {Component} from 'react';
import '../../store'

import './app.css'

import Size from '../size'
import Sorting from "../sorting";
import Search from "../search";
import Shirt from "../shirt";
import service from "../service";


export default class App extends Component {
    api = new service();
    state = {
        products: [],
        productsIds: [],
        sizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],

    };

    componentDidMount() {


        this.api.getAllShirts()
            .then((res) => this.setState({
                products: res.products,
                productsIds: res.products.map(productItem => productItem.id),

            }))

    }

    filterArr = (sizes) => {

        const {products} = this.state;
        const productsIds = products.filter(productItem => {
            return sizes.find(filterItem =>
                productItem.availableSizes.find(size => size === filterItem)
            );
        }).map(productItem => productItem.id);

        this.setState({
            productsIds
        });
    };

    setFilters = (sizes) => {
        if (this.state.sizes.length === 0) {
            sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']
        }

        this.setState({
            sizes,
        });

        this.filterArr(sizes)
    };


    setSortedData = (sorting) => {
        let {productsIds} = this.state;
        const products = this.state.products.slice();

        switch (sorting) {
            case '1' : {
                productsIds = products.sort((elemA, elemB) => {
                    return elemA.price - elemB.price
                }).map(elem => elem.id);

            }
                break;
            case '2' : {
                productsIds = products.sort((elemA, elemB) => {
                    return elemB.price - elemA.price
                }).map(elem => elem.id);

            }
                break;
            case '0' : {

                productsIds = products.map(elem => elem.id);

            }
                break;
        }
        this.setState({
            productsIds,
        })

    };

    getProductById = (id) => {
        return this.state.products.find(element => id === element.id);
    };

    render() {
        const {productsIds, products} = this.state;
        return (
            <div className="container">

                <Size
                      setFilters={this.setFilters}
                />
                <div className='search-sorting'>
                    <Search length={productsIds.length}/>
                    <Sorting
                        setSortedData={this.setSortedData}
                    />
                </div>
                {products.length ? <Shirt products={productsIds} getProductById={this.getProductById}/> : 'jhbjhh'}
            </div>

        )
    }
    ;

}



