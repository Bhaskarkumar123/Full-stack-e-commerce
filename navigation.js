import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () =>{

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return(
        <>
                <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                               <div className='catWrapper'>
                                <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                                  <span className='icon1 mr-2'><IoIosMenu/></span>
                                  <span class="text">All CATEGORIES</span>  
                                  <span className='icon2 ml-2'><FaAngleDown/></span> 
                               </Button>
                               <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`}>
                                 <ul>
                                     <li> <Link to="/"><Button>Fruit & Vegetables<FaAngleRight className='ml-auto'/></Button></Link>
                                     <div className="submenu">
                                        <Link to="/"><Button>Cuts & Sprouts</Button></Link>
                                        <Link to="/"><Button>Exotic Fruit & Veggies</Button></Link>
                                        <Link to="/"><Button>Fresh Fruit</Button></Link>
                                        <Link to="/"><Button>Fresh Vegetables</Button></Link>
                                        <Link to="/"><Button>Herbs & Seasoning</Button></Link>
                                        <Link to="/"><Button>Packaged Product</Button></Link>
                                        <Link to="/"><Button>Party Trays</Button></Link>
                                     </div>
                                     </li>
                                     <li> <Link to="/"><Button>Bevrages<FaAngleRight className='ml-auto'/></Button></Link>
                                     <div className="submenu">
                                        <Link to="/"><Button>Coffee</Button></Link>
                                        <Link to="/"><Button>Craft Beer</Button></Link>
                                        <Link to="/"><Button>Drink Boxes & Pouches</Button></Link>
                                        <Link to="/"><Button>Milk & Plant-Based Milk</Button></Link>
                                        <Link to="/"><Button>Soda & Pop</Button></Link>
                                        <Link to="/"><Button>Sparkling Water</Button></Link>
                                        <Link to="/"><Button>Tea & Kombucha</Button></Link>
                                        <Link to="/"><Button>Water</Button></Link>
                                        <Link to="/"><Button>Wine</Button></Link>
                                     </div>
                                     </li>
                                     <li> <Link to="/"><Button>Breakfast & Dairy</Button></Link></li>
                                     <li> <Link to="/"><Button>Meats & Seafood</Button></Link></li>
                                     <li> <Link to="/"><Button>Breads & Bakery</Button></Link></li>
                                     <li> <Link to="/"><Button>Frozen Foods</Button></Link></li>
                                     <li> <Link to="/"><Button>Biscuits & Snacks</Button></Link></li>
                                     <li> <Link to="/"><Button>Grocery & Staples</Button></Link></li>
                                     <li> <Link to="/"><Button>Costmatic</Button></Link></li>
                                     <li> <Link to="/"><Button>Cake`s</Button></Link></li>
                                     <li> <Link to="/"><Button>Choclates</Button></Link></li>
                                     
                                  </ul>
                               </div>
                               </div>
                            </div>
                            <div className='col-sm-9 navPart2  d-flex align-items-center'>
                               <ul className='list list-inline w-auto'>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Home</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Home 1</Button></Link>
                                        <Link to="/"><Button>Home 2</Button></Link>
                                        <Link to="/"><Button>Home 3</Button></Link>
                                        <Link to="/"><Button>Home 4</Button></Link>
                                        <Link to="/"><Button>Home 5</Button></Link>
                                        <Link to="/"><Button>Home 6</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Shop</Button></Link>
                                        <div className='submenu shadow'>
                                        <Link to="/"><Button>Shop List</Button></Link>
                                        <Link to="/"><Button>Product Detail</Button></Link>
                                        <Link to="/"><Button>Product Feature</Button></Link>
                                        <Link to="/"><Button>Product Type</Button></Link>
                                        <Link to="/"><Button>Shop Detail</Button></Link>
                                        <Link to="/"><Button>Shop Layout</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Meats & Seafood</Button></Link> 
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Brakfast Sausage</Button></Link>
                                        <Link to="/"><Button>Chicken</Button></Link>
                                        <Link to="/"><Button>Crab And Shellfish</Button></Link>
                                        <Link to="/"><Button>Shrimp</Button></Link>
                                        <Link to="/"><Button>Dinner Sausage</Button></Link>
                                        <Link to="/"><Button>Farm Raised Fillets</Button></Link>
                                        <Link to="/"><Button>Sliced Deli Meat</Button></Link>
                                        <Link to="/"><Button>Wild Caught Fillets</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Bakery</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Buns and Roll</Button></Link>
                                        <Link to="/"><Button>Cakes and Cupcakes</Button></Link>
                                        <Link to="/"><Button>Cookies and Browines</Button></Link>
                                        <Link to="/"><Button>Donuts and Muffins</Button></Link>
                                        <Link to="/"><Button>Cheese</Button></Link>
                                        <Link to="/"><Button>packaged Breads</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Bevrages</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Coffee</Button></Link>
                                        <Link to="/"><Button>Tea</Button></Link>
                                        <Link to="/"><Button>Soda & Pop</Button></Link>
                                        <Link to="/"><Button>Sparkling Water</Button></Link>
                                        <Link to="/"><Button>Water</Button></Link>
                                        <Link to="/"><Button>Wines</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Blog</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>lothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watvhes</Button></Link>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                    </li>

                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Contact</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>lothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watvhes</Button></Link>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                    </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Navigation;