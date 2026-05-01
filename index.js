import Dialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import {MdClose}  from "react-icons/md";
import Rating from '@mui/material/Rating';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'inner-image-zoom/lib/styles.min.css';
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";
import { HiShoppingCart } from "react-icons/hi2";


const ProductModal =(props) =>{

      return(
        <> 
           <Dialog open={true} className="productModal" onClose={()=>props.closeProductModal()}>
            <Button className="close_"  onClick={()=>props.closeProductModal()}><MdClose/></Button>
            <h4 class="mb-0 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
            <div className="d-flex align-items-center">
                <div className="d-flec align-items-center mr-4">
                    <span>Brands:</span>
                    <span className="ml-2"><b>Bk Jha</b></span>
                </div>

                <Rating name="read-only" Value={5} size="small" precision={0.5} readOnly />


            </div>

            <hr/>

            <div className="row mt-2 productDetaileModal">
                <div className="col-md-5">
                    
                   <ProductZoom/>

                </div>

                <div className="col-md-7">
                    <div className="d-flex info align-items-center mb-3">
                        <span className="oldPrice lg mr-2">$9.35</span>
                        <span className="netPrice text-danger lg">$7.25</span>
                    </div>

                   <span className="badge bg-success">IN STOCK</span>

                   <p className="mt-3"> Vivamus sdipiscing nisl ut dolor dignissim semper.Nulla luctus malesuada tinciduct.
                        Class asptent taciti sociosqu ad litora torquent. </p>

                    <div className="d-flex align-items-center">
                        <QuantityBox/>
                        <Button className="btn-blue btn-lg btn-big btn-round mt-4"><HiShoppingCart/>Add to Cart</Button>
                    </div>

                    <div className="d-flex align-items-center mt-4 actions">
                        <Button className="btn-round btn-sml" variant="outlined"><FaRegHeart/> &nbsp; ADD TO WISHLIST</Button>
                        <Button className="btn-round btn-sml ml-3" variant="outlined"><MdCompareArrows/> &nbsp; COMPARE</Button>
                    </div>

                </div>

            </div>
           </Dialog>
        </>
      ) 
}

export default ProductModal;