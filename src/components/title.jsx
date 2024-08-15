import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../config.js";
import img1 from "../photos/1.jpg";

const Layout = styled.div`
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  // color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;


const WeddingInvitation = styled.p`
  font-family: "bodoni";
  font-size: 1.5rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 3rem;
  opacity: 0.9;
  margin-bottom: 16px;
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const TitleImage = () => {
  return (
    <figure class="max-w-lg ">
      <img class="h-auto max-w-full rounded-lg  " src={img1} alt="image description"/>
    </figure>
    
  );
};


const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING  INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} ♥︎ {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <TitleImage />
    </Layout>
  );
};

export default Title;
