import React from "react";
import Map from "./Map"
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background: lightgray;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background: #eBe6e6;
`;

const Button = styled.button`
  background: #da4ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border: none;
`;

const Right = styled.div`
  flex:1;
  
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
          <Title>Contact Us</Title>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Write your message" row={10}/>
          <Button>Submit</Button>
          </Form>
        </Left>
        <Right>
<Map></Map>

        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
