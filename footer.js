import { TbMilkshake } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-item-center">
                        <span><TbMilkshake/></span>
                        <span className="ml-2">Everyday fress product</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2"> Free delivery for order $80</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><TbRosetteDiscountFilled/></span>
                        <span className="ml-2">Daily mega Discount</span>
                    </div>

                    <div className="col d-flex align-item-center">
                        <span><BiSolidBadgeDollar/></span>
                        <span className="ml-2">Best price on the market</span>
                    </div>

                </div>



                 <div className ="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUIT & VEGETABLE</h5>
                        <ui>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasoning</Link></li>
                            <li><Link to="#">Fresh Fruit</Link></li>
                            <li><Link to="#">Exotic Fruit & vegetables</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                            <li><Link to="#">Packaged Product</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ui>
                    </div>

                    <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ui>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Egg Subsitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ui>
                    </div>

                    <div className="col">
                        <h5>MEAT & SEAFOOD</h5>
                        <ui>
                            <li><Link to="#">Breakfast Sausage</Link></li>
                            <li><Link to="#">Dinner Sausage</Link></li>
                            <li><Link to="#">Checken</Link></li>
                            <li><Link to="#">Sliced Deli Meat</Link></li>
                            <li><Link to="#">Wild Caught Fillets</Link></li>
                            <li><Link to="#">Crab and Shellfish</Link></li>
                            <li><Link to="#">Farm Raised Fillets</Link></li>
                        </ui>
                    </div>

                    <div className="col">
                        <h5>BEVERAGES</h5>
                        <ui>
                            <li><Link to="#">Water</Link></li>
                            <li><Link to="#">Sparkling Water</Link></li>
                            <li><Link to="#">Soda & Pop</Link></li>
                            <li><Link to="#">Coffee</Link></li>
                            <li><Link to="#">Tea</Link></li>
                            <li><Link to="#">Craft Beer</Link></li>
                            <li><Link to="#">Wine</Link></li>
                        </ui>
                    </div>

                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ui>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Chees</Link></li>
                            <li><Link to="#">Eggs</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ui>
                    </div>
                 </div>


                 <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Develop By Bhaskar Kumar</p>
                        <ul className="list list-inline ml-auto mb-0">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebookF/></Link>
                            </li>

                             <li className="list-inline-item">
                                <Link to="#"><FaTwitter/></Link>
                            </li>

                             <li className="list-inline-item">
                                <Link to="#"><FaInstagram/></Link>
                            </li>
                        </ul>
                    </div>







            </div>
        </footer>
    )
        
}

export default Footer;