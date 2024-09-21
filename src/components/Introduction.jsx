import styled from "styled-components";
import StyledDivider from "./StyledDivider";
import { Title } from "./common.js"
import image2 from "../assets/images/IMG_0060.jpg";

const Wrapper = styled.div`
	width: 100%;
`

const Image = styled.img`
	margin: 0 auto 24px;
	width: 160px;
	height: 160px;
	border-radius: 50%;
	background-color: grey;
`

const Content = styled.div`
	font-size: 0.95rem;
  text-align: center;
  line-height: 1.75rem;
  margin-bottom: 24px;
`

const Introduction = () => {
	return (
		<>
			<Wrapper>
				<StyledDivider>
					<Title>신랑 주현우</Title>
				</StyledDivider>
				<Image />
				<Content>
					<li>1993년 11월 22일 출생</li>
					<li>대구에서 유년시절을 보냄</li>
					<li>대학 진학 후 무서운 동아리 후배를 만남</li>
					<li>2014년 2월 18일, 그 후배와 사랑을 시작</li>
					<li>2016~2022년, 대학원에서 고생</li>
					<li>2023년 2월 16일, 신부에게 깜짝 프로포즈</li>
					<li>2023년 7월, 박사후 연구원으로 미국 이주</li>
					<li>현재, 신부와 두 고양이와 행복하게 사는 중</li>
				</Content>
			</Wrapper>
			<Wrapper>
				<StyledDivider>
					<Title>신부 류인아</Title>
				</StyledDivider>
				<Image src={image2} />
				<Content>
					<li>1994년 6월 8일 출생</li>
					<li>서울에서 유년시절을 보냄</li>
					<li>대학 진학 후 무서운 동아리 선배를 만남</li>
					<li>2014년 2월 18일, 그 선배와 사랑을 시작</li>
					<li>2018년~, 사회의 쓴맛을 느끼는 중</li>
					<li>2023년 2월 16일, 깜짝 놀람</li>
					<li>신랑을 따라 미국으로 이주하여 취업에 성공</li>
					<li>현재, 신랑과 두 고양이와 행복하게 사는 중</li>
				</Content>
			</Wrapper>
		</>
	);
}

export default Introduction;