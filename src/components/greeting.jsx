import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1.5rem;
  // color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;
  // color: var(--title-color);
  line-height: 2.3rem;
  opacity: 0.75;
  background-repeat: no-repeat;
  background-position: center;
`;


const GroomBride = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title>초대합니다</Title>
      </Divider>
      <Image src={Flower} />
      <Content>
      연애 초반 서로의 걸음걸이를 맞추느라 서툴렀던 저희가
        <br />
        지난 7년간 서로를 이해하고 닮아가며
        <br />
        깊은 사랑을 키워왔습니다.
        <br />
        이제는 부부의 연으로 새로운 길을 나란히 걸어가고자 합니다.
        <br />
        이 길의 시작점에 여러분을 초대하오니
        <br />
        오셔서 축복해 주시면 큰 기쁨이겠습니다.
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의   장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의   차녀 {BRIDE_NAME}
      </GroomBride>
      
    </Wrapper>
  );
};

export default Greeting;
