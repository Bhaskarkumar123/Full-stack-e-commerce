import React from "react";
import Slider from "react-slick";

const HomeBanner =()=>{
    var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    arrow:true,
    autoplay:true
  };
    return(
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Winter_Men_web_1c367eea6d/Winter_Men_web_1c367eea6d.png"  className="w-100"/>
                </div>
                <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/men_pb_fest_main_banner_web_12219ae5d9/men_pb_fest_main_banner_web_12219ae5d9.png"  className="w-100"/>
                </div>
                <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/men_wedding_main_banner_web_d83a59e050/men_wedding_main_banner_web_d83a59e050.png"  className="w-100"/>
                </div>
                <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/KV_Banner_web_0d3ffac7f6/KV_Banner_web_0d3ffac7f6.png"  className="w-100"/>
                </div>
                <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/Luxe_Fragrance_Top_Carousel_Web_e63d7c6b03/Luxe_Fragrance_Top_Carousel_Web_e63d7c6b03.png"  className="w-100"/>
                </div>
                <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/MAC_SS_banner_Desktop_e4ee62cc4f/MAC_SS_banner_Desktop_e4ee62cc4f.jpg"  className="w-100"/>
                </div>
                 <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/Davidoff_Web_58bb9afd8a/Davidoff_Web_58bb9afd8a.jpg"  className="w-100"/>
                </div>
                 <div className="item">
                    <img src= "https://cmsimages.shoppersstop.com/17_Lancome_Idole_Power_Shoppers_Stop_com_Web_2544_X_740_a39a747dd1/17_Lancome_Idole_Power_Shoppers_Stop_com_Web_2544_X_740_a39a747dd1.jpg"  className="w-100"/>
                </div>
            </Slider>
          </div>
        </>
    )

}

export default HomeBanner;