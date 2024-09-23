import React from "react";
import styled from "styled-components";
import mainImage from "../assets/images/img3.jpg"

const Layout = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500 !important;
  // color: var(--title-color);
  /* animation: fadein 3s; */
  /* -moz-animation: fadein 3s; Firefox */
  /* -webkit-animation: fadein 3s; Safari and Chrome */
  /* -o-animation: fadein 3s; Opera */
`;


const WeddingInvitation = styled.div`
  font-size: 1.5rem;
  opacity: 0.8;
  margin-top: 48px;
  margin-bottom: 32px;
`;

const MainImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    height: 600px;
    max-width: 900px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const GroomBride = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 3rem;
  margin-top: 64px;
  margin-bottom: 16px;
  color: var(--title-color);
  
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
    margin-bottom: 32px;
`;


const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>WEDDING  INVITATION</WeddingInvitation>
        <MainImageWrapper>
          <MainImage src={mainImage} />
        </MainImageWrapper>
        <GroomBride>
          주현우
          <svg width="20" height="20" viewBox="0 0 128 128" >
            <path d="M90.35,16.05c-11.66,0-21.81,6.97-26.35,17.06c-4.54-10.08-14.69-17.06-26.35-17.06 c-15.92,0-28.87,12.96-28.87,28.88c0,35.9,51.79,65.46,54,66.7c0.38,0.21,0.79,0.32,1.21,0.32c0.42,0,0.84-0.11,1.21-0.32 c2.2-1.24,54.01-30.8,54.01-66.7C119.22,29.01,106.27,16.05,90.35,16.05z" fill="currentColor" />
          </svg>
          류인아
        </GroomBride>
        <Schedule>
          2024년 11월 2일, 토요일 오후 12시
          <br />
          공간한옥 [근화원]
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
