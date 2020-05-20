import React, {Component} from 'react';
import '../../store'

import App from '../app'
import service from "../service";


export default class Wrapper extends Component {
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
            <App
                productsIds={productsIds}

                products={products}

                getProductById={this.getProductById}

                setSortedData={this.setSortedData}

                setFilters={this.setFilters}

            />
        )
    }
    ;

}



