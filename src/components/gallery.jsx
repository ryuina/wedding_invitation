import React, { useState } from 'react';

import { Divider } from "antd";
import styled from "styled-components";
import "../styles/index.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";


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
            {/* Previous Button */}
            <button
              className="absolute left-0 text-white text-3xl p-4 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-100"
              onClick={handlePrev}
            >
              &#10094;
            </button>

            {/* Full-Size Image */}
            <img
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              src={data[selectedIndex].imageLink}
              alt="full-size"
            />

            {/* Next Button */}
            <button
              className="absolute right-0 text-white text-3xl p-4 cursor-pointer bg-gray-800 bg-opacity-0 rounded-full hover:bg-opacity-100"
              onClick={handleNext}
            >
              &#10095;
            </button>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.5rem;
  // color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;


const Photos = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <DefaultGallery />
    </Wrapper>
  );
};

export default Photos;
