import React from 'react'

import './Category.css'
import Fetch from './Fetch';
const Category = () => {
    
    return (
        <div>
            <div class="container my-5">
                <div class="Category">
                    <label for="dog-names">CATEGORY</label>
                    <br /><br />
                    <select name="dog-names" id="dog-names">
                        <option value="rigatoni">Select Category</option>
                        <option value="Islamic">Islamic</option>
                        <option value="pumpernickel">Ramadan</option>
                        <option value="reeses">Health</option>
                        <option value="reeses">Weather Forecast</option>
                        <option value="reeses">Informative Speaking</option>
                        <option value="reeses">Media Informative</option>
                    </select>

                </div>

                <div class="Fetch">
                    <Fetch />
                </div>
            </div>


        </div>
    )
}

export default Category;
