import React, { useState } from 'react';

import { Divider } from "antd";
import styled from "styled-components";
import "../styles/index.css";
import img2 from "../photos/2.jpg";
import img3 from "../photos/3.jpg";
import img4 from "../photos/4.jpg";
import img5 from "../photos/5.jpg";
import img6 from "../photos/6.jpg";
import img7 from "../photos/7.jpg";
import img8 from "../photos/8.jpg";
import img9 from "../photos/9.jpg";
import img10 from "../photos/10.jpg";
import img11 from "../photos/11.jpg";
import img12 from "../photos/12.jpg";
import img13 from "../photos/13.jpg";
import img14 from "../photos/14.jpg";
import img15 from "../photos/15.png";
import img16 from "../photos/16.jpg";
import img17 from "../photos/17.jpg";
import img18 from "../photos/18.jpg";
import img19 from "../photos/19.jpg";
import img20 from "../photos/20.jpg";
import img21 from "../photos/21.jpg";
import img22 from "../photos/22.jpg";

export function DefaultGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const data = [
    {
      imageLink:
       img2,
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
        img10
    },
    {
      imageLink:
        img11
    },
    {
      imageLink:
        img12
    },
    {
      imageLink:
        img13
    },
    {
      imageLink:
        img14
    },
    {
      imageLink:
        img15
    },
    {
      imageLink:
        img16
    },
    {
      imageLink:
        img17
    },
    {
      imageLink:
        img18
    },
    {
      imageLink:
        img19
    },
    {
      imageLink:
        img20
    },
    {
      imageLink:
        img21
    },
    {
      imageLink:
        img22
    },
    
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
            className="absolute right-0 text-white text-3xl p-4 cursor-pointer bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-100"
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
