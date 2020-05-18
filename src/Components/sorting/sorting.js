import React, {Component} from "react";

import './sorting.css'


export default class Sorting extends Component{
      state = {
          sorting : 0
      };
    onChange = (e) => {

       this.props.getSortedData(e.target.value);
    };



    render() {

        return(

            <div className='sorting-item'>
                <span>Order by : </span>
                <select onChange={this.onChange} >
                    <option value='0'> Select</option>
                    <option value='1'> Lowest to highest</option>
                    <option value='2'> Highest to lowest</option>
                </select>
            </div>
        );
    }


};



