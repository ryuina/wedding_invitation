import React from "react";
import styled from "styled-components";
import { Divider} from "antd";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  width: 70%;
`;

const Title = styled.p`
  font-size: 1.5rem;
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
  line-height: 2.3rem;
  opacity: 0.75;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
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

const Acknowledge = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Special Thanks To</Title>
      </Divider>
      <Image src={Flower} />
      <Content>
        이 결혼식을 준비하는 데 큰 도움을 주신 분들께 
        특별히 감사 인사를 남깁니다.
        <br />  
        <br />  
        <b>용휘</b>, 덕분에 모바일 청첩장 만들었다! 
        <br />  
        결혼사진 예쁘게 찍어줘서 정말 고마워!
        <br />  
        <b>석찬&서정</b>, 도와준 덕분에 셀프 웨딩촬영이 정말 성공적이었어!
        정말 고마워!
        <br />  
        <b>혜준</b>, 런던까지 청첩장을 가져와 준 덕분에 
        우리가 미국에서도 청첩 모임을 할 수 있게 됐어!
        고마워!
        <br />  
        <b>진구</b>, 네가 사회를 맡아줘서 얼마나 든든한지 몰라! 
        정말 고맙다!
        <br />  
        <b>하진</b>, 천상의 보이스로 
        식장을 채워 줄 마징 사랑해, 고마워!
        <br />  
        <b>Linus</b>, we're so grateful for your singing
        <br />  
        at our wedding. Tack!
        <br />          
      </Content>
    </Wrapper>
  );
};

export default Acknowledge;
