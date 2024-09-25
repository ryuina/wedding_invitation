import React, { useState } from "react";
import styled from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import StyledDivider from "./StyledDivider.jsx";
import { Title } from "./common.js"
import Rsvp from "./rsvp.jsx";


const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  margin-bottom: 32px;
  font-size: 1rem;
  text-align: center;
  line-height: 2.3rem;

  background-repeat: no-repeat;
  background-position: center;

  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.75rem;
  }
`;


const GroomBride = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
  @media (max-width: 768px) {
    width: 1.25rem;
  }
  @media (max-width: 480px) {
    width: 1rem;
  }
`;

const Greeting = () => {
  
  return (
    <Wrapper>
      <StyledDivider>
        <Title>인아 <span>그리고</span> 현우</Title>
      </StyledDivider>
      {/* <Image src={Flower} /> */}
      <Content>
        대학시절 시작한 풋풋한 사랑이
        <br />
        10년이 지난 지금 그 결실을 맺으려 합니다.
        <br />
        한땀 한땀 키워온 소중한 사랑,
        <br />
        아름답게 간직하며 즐겁게 살겠습니다.
        <br />
        <br />
        저희의 새로운 시작을 함께 기뻐해주실
        <br />
        소중한 분들께 이 초대장을 드립니다.
      </Content>
      <EllipsisOutlined style={{ opacity: 0.5 }} />
      <GroomBride>
        <div><span><b>주일륜</b> · <b>송정화</b> 의 차남</span><span><b>주현우</b></span></div>
        <div><span><b>류광영</b> · <b>장동숙</b> 의 장녀</span><span><b>류인아</b></span></div>
      </GroomBride>
      <div>
      <Rsvp />
      </div>
    </Wrapper >
  );
};

export default Greeting;
