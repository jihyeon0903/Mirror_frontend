import React from 'react'

import { Container, Col, Row } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'

import { useNavigate } from 'react-router-dom'

function TestPage() {
  const navigate = useNavigate();
  return(
    <div className='py-5'>
      <Container className='p-5'>
        <Col md={6}>
          <div className='mt-5'>
            <p className='fs-1'>
              Easy and Intuitive<br/>
              Online Testing<br/>
              to Break Your Biases
            </p>
          </div>
        </Col>
        <div className='py-5' />
        <Col md={{span:6, offset:10}}>
          <MDBBtn size='lg' onClick={() => {navigate('/test');}}>
            Test Now
            </MDBBtn>
          <MDBBtn size='lg' onClick={() => {navigate('/home');}}>
          Return
          </MDBBtn>
        </Col>
      </Container>
    </div>
  );
}

export default TestPage;



