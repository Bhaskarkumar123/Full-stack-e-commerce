import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Sidebar = () =>{
      const [value, setValue] = useState([100, 6000]);
      const [value2, setValue2] = useState(0);
     

   return(
    <>
    <div className="sidebar">
      <div className='sticky'>
        <div className="filterBox">
            <h7>PRODUCT CATEGOIES</h7>
            <div className='scroll'>
               <ul>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Beverages" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Biscuits & Snacks" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Breads & Bakery" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Brakefast & Dairy" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Frozen Foods" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Fruits & Vegetables" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Grocery & Staples" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Household Needs" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Meats & Seafood" />
                </li>
                 
               </ul>
            </div>
        </div>

        <div className="filterBox">
            <h7>FILTER BY PRICE</h7>

            <RangeSlider value={value} onInput={setValue} min={100} max={5000} step={5}/>

            <div className='d-flex pt-2 pb-2 priceRange'>
                  <span>From: <strong className='text-succss'>Rs: {value[0]}</strong></span>
                  <span className='ml-auto'>From: <strong className='text-dark'>Rs: {value[1]}</strong></span>
            </div>

            <div className="filterBox">
              <h7>PRODUCT STATUS</h7>
            <div className='scroll'>
               <ul>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="In Stock" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="On Sale" />
                </li>
                 
               </ul>
            </div>

           </div>

            <div className="filterBox">
              <h7>BRANDS</h7>
            <div className='scroll'>
               <ul>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Frito Lay" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Nespresso" />
                </li>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Oreo" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Quaker" />
                </li>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Welch`s" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Bikajii" />
                </li>
                <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Bouncs" />
                </li>
                 <li>
                      <FormControlLabel className='w-100' control={<Checkbox  />} label="Nescfee" />
                </li>
                 
               </ul>
               </div>
            </div>
         </div>   

         
          <Link to="#"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className='w-100'/></Link>
         
    </div>
    </div>
    </>
   )
}
export default Sidebar;