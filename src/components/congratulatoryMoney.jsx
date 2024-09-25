import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import StyledDivider from "./StyledDivider.jsx";
import { Title } from "./common.js"


const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ButtonWrap = styled.div`
  margin-bottom: 36px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid #e1d9d6;
  padding: 2.188rem 0;
`;


const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <StyledDivider>
        <Title>마음 전하실 곳</Title>
      </StyledDivider>
      <ButtonWrap>
        <ContactButton onClick={() => setGroomVisible(true)}>
          <SmileFilled
            style={{ fontSize: 64, marginBottom: 10 }}
          />
          <br />
          <SubContent>신랑측 계좌번호</SubContent>
        </ContactButton>
        <ContactButton onClick={() => setBrideVisible(true)}>
          <SmileOutlined
            style={{ fontSize: 64, marginBottom: 10 }}
          />
          <br />
          <SubContent>신부측 계좌번호</SubContent>
        </ContactButton>
      </ButtonWrap>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>

            <Description>
              (계좌번호 클릭시 붙여넣기 가능한 텍스트로 복사됩니다.)
            </Description>
          </div>
        ]}
      >
        <div>
          <b>신랑 주현우</b>
          <Divider type="vertical" />
          <CopyToClipboard text={'우리은행 1002-943-242612'}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              우리은행 1002-943-242612
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 0 }}>
          <b>신랑혼주 주일륜 (송정화)</b>
          <Divider type="vertical" />
          <CopyToClipboard text={'대구은행 508-12-802410-8'}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              대구은행 508-12-802410-8
            </Button>
          </CopyToClipboard>
        </div>
        <Divider style={{ marginTop: 20, marginBottom: 0 }} />


      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
            <Description>
              (계좌번호 클릭시 붙여넣기 가능한 텍스트로 복사됩니다.)
            </Description>
          </div>
        ]}
      >
        <div>
          <b>신부 류인아</b>
          <Divider type="vertical" />
          <CopyToClipboard text={'신한은행 110-487-077414'}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              신한은행 110-487-077414
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 12, marginBottom: 0 }}>
          <b>신부혼주 류광영 (장동숙)</b>
          <Divider type="vertical" />
          <CopyToClipboard text={'신한 338-04-413519'}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              신한은행 338-04-413519
            </Button>
          </CopyToClipboard>
        </div>
        <Divider style={{ marginTop: 20, marginBottom: 0 }} />
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
