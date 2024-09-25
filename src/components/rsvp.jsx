
import React, { useState } from "react";
import { Modal, message } from "antd";
import styled from "styled-components";

import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { addDoc, collection } from 'firebase/firestore';

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

const InputWrap = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
  > label {
    font-weight: bold;
  }
  `;

const Input = styled.input`
  width: 75%;
  margin-left: 8px;
  height: 28px;
 border-radius: 0px;
  border-bottom: 1px solid #d9d9d9;
  `;

const Button = styled.button`
  margin-top: 24px;
  padding: 12px 16px;
  color: white;
  background-color: var(--title-color);
  border-radius: 12px;
`

const Rsvp = () => {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [count, setCount] = useState(1);
  const [brideOrGroom, setBrideOrGroom] = useState('');

  const handleSubmit = async (event) => {
    event?.preventDefault();

    try {
      const rsvpCollectionRef = collection(db, 'rsvp');
      await addDoc(rsvpCollectionRef, {
        name: name,
        count: count,
        brideOrGroom: brideOrGroom,
      });
      // Optionally, reset the form or display a success message
      setName('');
      setCount(1);
      setBrideOrGroom('bride');
      message.success('참석해주셔서 감사합니다!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (<>
    <Button onClick={() => setVisible(true)}>참석 여부 알리기</Button>
    <Modal
      title={<Title>참석 여부 알리기</Title>}
      open={visible}
      onOk={() => {
        handleSubmit();
        setVisible(false);
      }}
      onCancel={() => setVisible(false)}
      okText="보내기"
      cancelText="취소"
      okButtonProps={{ disabled: (name.length === 0 || count === 0 || brideOrGroom.length === 0) }}
    >

      <form onSubmit={handleSubmit}>
        <InputWrap>
          <label htmlFor="name">성함</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrap>
        <InputWrap style={{ margin: 0}}>
          <label htmlFor="count">참석 인원</label>
          <Input
            type="number"
            id="count"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </InputWrap>
        <div style={{marginBottom: '12px'}}>* 미취학 아동을 제외한 인원을 적어주세요.</div>

        <InputWrap>
          <label htmlFor="brideOrGroom">신부/신랑</label>
          <div style={{width: '75%'}}>
          {/* fix below as radio button */}
            <input
            name="brideOrGroom"
              type="radio"
              id="groom"
              value='groom'
              onChange={(e) => setBrideOrGroom(e.target.value)}
              style={{marginRight: '8px'}}
            />
            <label htmlFor="groom" style={{marginRight: '8px'}}>신랑 하객</label>
            <input
              name="brideOrGroom"
              type="radio"
              id="bride"
              value='bride'
              onChange={(e) => setBrideOrGroom(e.target.value)}
              style={{marginRight: '8px'}}
            />
            <label htmlFor="bride" style={{marginRight: '8px'}}>신부 하객</label>
          

          </div>
        </InputWrap>
        {/* <button type="submit">Submit RSVP</button> */}
      </form>
    </Modal>
  </>
  )
}

export default Rsvp;