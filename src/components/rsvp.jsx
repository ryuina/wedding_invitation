
import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";

import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { addDoc, collection } from 'firebase/firestore';

const InputWrap = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  `;

const Input = styled.input`
  width: 75%;
  margin-left: 8px;
  height: 24px;
  // border-radius: 4px;
  border-bottom: 1px solid #d9d9d9;
  `;


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
      alert('RSVP submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (<>
    <button onClick={() => setVisible(true)}>참석 여부 알리기</button>
    <Modal
        title={<b>참석 여부 알리기</b>}
        open={visible}
        onOk={() => {
          handleSubmit();
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        okText="보내기"
        cancelText="취소"
        // footer={[
        //   <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>

        //     <Description>
        //       (계좌번호 클릭시 붙여넣기 가능한 텍스트로 복사됩니다.)
        //     </Description>
        //   </div>
        // ]}
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