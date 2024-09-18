import React, { useEffect } from "react";
import styled from "styled-components";
import img_map from "../assets/map.png";
import StyledDivider from "./StyledDivider.jsx";
import { Title } from "./common.js"

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  margin: 0 auto;
`;



const SubTitle = styled.span`
  font-size: 1.2rem;
  // color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-top: 0;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  width: 100%;
  text-align: center;
  margin: 32px 0;

  span {
    font-size: 0.85rem;
  }
`;

const Map = styled.div`
  width: 80%;
  height: 100%;
  padding: 0;
`;

const LocationImage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={img_map} style={{ width: '100%', maxWidth: '800px', height: 'auto' }} />
    </div>
  );
};


const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
		"timestamp" : "1726447614646",
		"key" : "2kozk",
		"mapWidth" : "640",
		"mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <StyledDivider>
        <Title>오시는 길</Title>
      </StyledDivider>


      <Map
        id="daumRoughmapContainer1726447614646"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        어린이회관 내 공간한옥 [근화원]
        <br />
        서울 광진구 광나루로 441 ( 능동 18-11 )
        <br />
        <span>* 어린이회관 정문 주차장 이용 / 2시간 무료 주차</span>
        <br />

      </Content>


      <Content>
        <SubTitle>대중교통 안내</SubTitle>
        <br />
        <br />
        2호선 낙성대역 ④번출구
        > GS주유소끼고 좌회전
        > 건너편에서 마을버스 관악02번 버스 탑승
        > 제2공학관(종점) 하차
        <br />
        <br />
        2호선 서울대입구역 ③번출구
        > 5511, 5513 버스 탑승
        > 제2공학관(종점) 하차
        <br />
        <br />
        신림선 관악산역 ①번출구
        > 정문쪽 버스정거장 도보이동
        > 5511, 5516 버스 탑승 〉 제2공학관(종점) 하차
        <br />
        <br />
        <SubTitle>자가용 안내</SubTitle>
        <br />
        <br />
        네비게이션에서 [이라운지 서울대점]을 입력하세요.
        <br />
        2시간 무료 주차권을 꼭 받아가세요!
        <br />


      </Content>
    </Wrapper>
  );
};

export default Location;
