import React, {Component} from "react";

import './sorting.css'
import sirvice from "../service";

export default class Sorting extends Component{

   


    render() {

        return(

            <div className='sorting-item'>
                <span>Order by </span>
                <select>
                    <option value='0'> Select</option>
                    <option value='1'> Lowest to highest</option>
                    <option value='2'> Highest to lowest</option>
                </select>
            </div>
        );
    }


};



