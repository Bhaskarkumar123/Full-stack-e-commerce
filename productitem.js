import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from '../ProductModal';
import { useState } from 'react';

const ProductItem =(props) =>{
    const[isOpenProductModal,setisOpenProductModal] = useState(false);
    const viewProductDetails=(productId)=>{
        setisOpenProductModal(true);
    }

    const closeProductModal=()=>{
        setisOpenProductModal(false);
    }

    const product = props.product || {};

    return(
        <>
            <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
            <img src={product.image || "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-600x600.jpg"} className="w-100"/>
            
            <span className="badge badge-primary">20%</span>

            <div className='actions'>
                <Button onClick={()=>viewProductDetails(product.id || 1)}><AiOutlineFullscreen/></Button>
                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>
            </div>
            </div>
            <div className="info">
            <h4>{product.name || "Werther`s Original Caramal harder Candies"}</h4>
            <span className="text-success d-block">{product.inStock ? "In Stock" : "Out of Stock"}</span>
            <Rating className="mt-2 mb-2" name="size-small" defaultValue={product.rating || 3} size="small" precision={0.5} />

                <div className="d-flex">
                <span className="oldPrice">${product.oldPrice || "20.0"}</span>
                <span className="netPrice text-denger ml-2">${product.price || "14.0"}</span>
                </div>
                </div>
                </div>

                {
                    isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
                }

              {/*<ProductModal/> */}
        </>
    )

}

export default ProductItem;
