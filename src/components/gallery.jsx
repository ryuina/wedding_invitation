import React, { useState } from 'react';

import styled from "styled-components";
import { Title } from "./common.js"
import StyledDivider from "./StyledDivider";
import "../styles/index.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

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
    /*
    4-6 : 뛰어오는 시리즈
    7-9 : 기타 웨딩사진
    10-19 : 14년도 ~ 23년도
    20,21 or 24: 23, 24년도 찍은거 + 맛깜이랑
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
                className="inset-0 h-full w-full rounded-lg object-cover object-center cursor-pointer"
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
  padding: 0 16px;
  margin: 0 auto;
`;


const Photos = () => {
  return (
    <Wrapper>
      <StyledDivider>
        <Title>우리의 아름다운 순간</Title>
      </StyledDivider>
      <DefaultGallery />
    </Wrapper>
  );
};

export default Photos;
