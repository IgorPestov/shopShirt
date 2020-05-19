import React, {Component} from "react";

import './sorting.css'


export default class Sorting extends Component {

    onChange = (e) => {

        this.props.setSortedData(e.target.value)

    };


    render() {

        return (

            <div className='sorting-item'>
                <span>Order by : </span>
                <select onChange={this.onChange}
                        className='select-sorting'>
                    <option value='0'> Select</option>
                    <option value='1'> Lowest to highest</option>
                    <option value='2'> Highest to lowest</option>
                </select>
            </div>
        );
    }


};



