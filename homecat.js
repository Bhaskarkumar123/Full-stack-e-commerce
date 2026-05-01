import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {

  const [categories] = useState([
    {
      bg: "#fffceb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png",
      name: "Vegetables"
    },
    {
      bg: "#ecffec",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png",
      name: "Fruits"
    },
    {
      bg: "#feefea",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png",
      name: "Milk & Dairy"
    },
    {
      bg: "#fff3eb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png",
      name: "Snacks"
    },
    {
      bg: "#fff3ff",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png",
      name: "Beverages"
    },
    {
      bg: "#f2fce4",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-6.png",
      name: "Bakery"
    },
    {
      bg: "#feefea",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-7.png",
      name: "Meat"
    },
    {
      bg: "#fffceb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-8.png",
      name: "Seafood"
    },
    {
      bg: "#fffceb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png",
      name: "Vegetables"
    },
    {
      bg: "#ecffec",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png",
      name: "Fruits"
    },
    {
      bg: "#feefea",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png",
      name: "Milk & Dairy"
    },
    {
      bg: "#fff3eb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png",
      name: "Snacks"
    },
    {
      bg: "#fff3ff",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png",
      name: "Beverages"
    },
    {
      bg: "#f2fce4",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-6.png",
      name: "Bakery"
    },
    {
      bg: "#feefea",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-7.png",
      name: "Meat"
    },
    {
      bg: "#fffceb",
      img: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-8.png",
      name: "Seafood"
    }
  ]);

  return (
    <>
      <section className="homeCat">
        <div className="container">
          <h3 className="mb-3 hd">Featured Categories</h3>

          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            slidesPerGroup={2}
            modules={[Navigation]}
            className="mySwiper"
          >

            {
              categories.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="item text-center cursor"
                      style={{ background: item.bg, padding: "10px", borderRadius: "10px" }}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "80px", marginBottom: "10px" }}
                      />
                      <h6>{item.name}</h6>
                    </div>
                  </SwiperSlide>
                );
              })
            }

          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeCat;