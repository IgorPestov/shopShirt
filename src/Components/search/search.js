import React, {Component} from "react";
import './search.css';
import sirvice from "../service";



export default class Search extends Component {

    render() {
        const { length }= this.props;

        return(
            <div className='search-item'>
                <span> {length} product(s) found.</span>
            </div>
        )

    }


};


