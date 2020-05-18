import React, {Component} from 'react';
import '../../store'

import './app.css'

import Size from '../size'
import Sorting from "../sorting";
import Search from "../search";
import Shirt from "../shirt";
import sirvice from "../service";


export default class App extends Component {
    state = {
        product: []
    };

    componentDidMount() {
        let api = new sirvice();

        api.getAllShirts()
            .then((res) => this.setState({
                product: res.products
            }))
    }

    render() {

        return (
            <div className="container">
                <Size product = {this.state}/>
                <div className='search-sorting'>
                    <Search product = {this.state}/>
                    <Sorting product = {this.state}/>
                </div>
                <Shirt product = {this.state}/>
            </div>
        )
    };

}



