import React, { useState } from 'react';

import styled from "styled-components";
import { Title } from "./common.js"
import StyledDivider from "./StyledDivider";
import "../styles/index.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4_1.jpg";
import img5 from "../assets/images/img5_1.jpg";
import img6 from "../assets/images/img6_1.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.JPG";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.JPG";
import img16 from "../assets/images/img16.JPG";
import img17 from "../assets/images/img17.jpeg";
import img18 from "../assets/images/img18.jpeg";
import img19 from "../assets/images/img19.jpeg";
import img20 from "../assets/images/img20.jpeg";
import img21 from "../assets/images/img21.jpeg";
import img22 from "../assets/images/img22.jpeg";
import img23 from "../assets/images/img23.jpeg";
import img24 from "../assets/images/img24.jpeg";

import video1 from "../assets/video1_720.mov";
import video2 from "../assets/video2_720.mov";


const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  right: 2px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;

`;

const Video = styled.video`
  max-width: 900px;
  width: 100%;
  margin: 0.25rem 0 auto;
`;

const ImageTitle = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3rem;
  font-size : 2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    bottom: -2rem;
  }
`

export function DefaultGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const data = [
    {
      imageLink:
        img1,
    },
    {
      imageLink:
        img2
    },
    {
      imageLink:
        img3
    },
    {
      imageLink:
        img4
    },
    {
      imageLink:
        img5
    },
    {
      imageLink:
        img6
    },
    {
      imageLink:
        img7
    },
    {
      imageLink:
        img8
    },
    {
      imageLink:
        img9
    },
    {
      imageLink:
        img10,
      title: '2014년의 인아 현우'
    },
    {
      imageLink:
        img11,
      title: '2015년의 인아 현우'
    },
    {
      imageLink:
        img12,
      title: '2016년의 인아 현우'
    },
    {
      imageLink:
        img13,
      title: '2017년의 인아 현우'
    }, {
      imageLink:
        img14,
      title: '2018년의 인아 현우'
    },
    {
      imageLink:
        img15,
      title: '2019년의 인아 현우'
    },
    {
      imageLink:
        img16,
      title: '2020년의 인아 현우'
    },
    {
      imageLink:
        img17,
      title: '2021년의 인아 현우'
    },
    {
      imageLink:
        img18,
      title: '2022년의 인아 현우'
    },
    {
      imageLink:
        img19,
      title: '2023년 프로포즈'
    },
    {
      imageLink:
        img20,
      title: '2023년 프로포즈'
    },
    {
      imageLink:
        img24,
      title: '그리고 지금'
    },
    {
      imageLink:
        img21,
    },
    {
      imageLink:
        img22,
    },
    {
      imageLink:
        img23,
    },

    /*
    4-6 : 뛰어오는 시리즈
    7-9 : 기타 웨딩사진
    10-18 : 14년도 ~ 23년도
    19,21 or 24: 23, 24년도 찍은거 + 맛깜이랑
    영상 2개 
    */

  ];
  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };
  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleBackgroundClick = (e) => {
    // Close only if the click is outside the image container
    if (e.target.id === "modal-background") {
      handleClose();
    }
  };
  return (
    <>
      {/* Gallery Grid */}
      <div className="flex justify-center margin:0">
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="aspect-square">
              <img
                className="inset-0 h-full w-full object-cover object-center cursor-pointer"
                src={imageLink}
                alt="gallery-photo"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full-Size Image */}
      {selectedIndex !== null && (
        <div
          id="modal-background"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleBackgroundClick}
        >

          <div className="relative flex items-center">
            {/* Full-Size Image */}
            <img
              className="max-h-[100vh] max-w-[100vw] object-contain"
              src={data[selectedIndex].imageLink}
              alt="full-size"
            />
            <ImageTitle >
              {data[selectedIndex].title}
            </ImageTitle>
          </div>
          {/* Previous Button */}
          <button
            className="absolute left-0 text-white text-3xl p-4 cursor-pointer bg-gray-800 bg-opacity-0 rounded-full"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          {/* Next Button */}
          <button
            className="absolute right-0 text-white text-3xl p-4 cursor-pointer bg-gray-800 bg-opacity-0 rounded-full"
            onClick={handleNext}
          >
            &#10095;
          </button>

          {/* Close Button */}
          <CloseButton
            onClick={handleClose}
          >
            &times;
          </CloseButton>
        </div>
      )}
    </>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;


const Photos = () => {
  return (
    <>
      <Wrapper>
        <StyledDivider>
          <Title>함께 걸어온 지난 날들</Title>
        </StyledDivider>
        <DefaultGallery />
      </Wrapper>
      <Video src={video1} autoPlay muted playsInline loop />
      <Video src={video2} autoPlay muted playsInline loop />

    </>
  );
};

export default Photos;
