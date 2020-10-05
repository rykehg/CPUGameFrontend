  
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    margin-top: 30px;
    margin-bottom: 30px;
    width: auto;
    padding: 30px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    align-items: center;
  }
`;

export const Layout = (props) => (
  <Styles>
    <Container>
      {props.children}
    </Container>
  </Styles>
)