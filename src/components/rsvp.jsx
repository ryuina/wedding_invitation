
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
  const [phone, setPhone] = useState('');
  const [count, setCount] = useState(1);

  const handleSubmit = async (event) => {
    event?.preventDefault();

    try {
      const rsvpCollectionRef = collection(db, 'rsvp');
      await addDoc(rsvpCollectionRef, {
        name: name,
        phone: phone,
        count: count,
      });
      // Optionally, reset the form or display a success message
      setName('');
      setPhone('');
      setCount(1);
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
      okButtonProps={{ disabled: name.length === 0 }}
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
        <InputWrap>
          <label htmlFor="phone">연락처</label>
          <Input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="count">참석 인원</label>
          <Input
            type="number"
            id="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </InputWrap>
        {/* <button type="submit">Submit RSVP</button> */}
      </form>
    </Modal>
  </>
  )
}

export default Rsvp;