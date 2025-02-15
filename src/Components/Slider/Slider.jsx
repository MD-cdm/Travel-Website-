import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.png";
import img6 from "../../Assets/img6.png";

const teamMembers = [
  { img: img1, name: "Md Neyaz", role: "Web Developer" },
  { img: img2, name: "Gulam Kadir", role: "Software Developer" },
  { img: img3, name: "Irfan Ali", role: "MERN Stack devloper" },
  { img: img4, name: "Ash har khalid", role: "Data Analysis" },
  { img: img5, name: "Aasif Ali ", role: "Civil Engineer" },
  { img: img6, name: "Safdar imam ", role: "Mechanical Engineer" },
];

const CardSlider = () => {
  return (
    <div className="card-slider-container">
      <Swiper
        slidesPerView={window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="card-image">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="image-card">
                  <img src={member.img} className="img" alt={member.name} />
                </div>
              </div>

              <div className="image-content">
                <h2 className="name">{member.name}</h2>
                <h2 className="dev">"{member.role}"</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ipsum fuga accusantium qui fugiat incidunt provident ea.
                </p>
                <button className="btne">View More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
