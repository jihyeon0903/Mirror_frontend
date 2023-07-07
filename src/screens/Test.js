import { Container, Row, Col, Image } from 'react-bootstrap'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody } from 'mdb-react-ui-kit'

import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate();
  return(
    <div>
      <MDBCard>
        <MDBCardBody>
          <em className='p-2 mb-0 fs-5'>
            Test 1: Make Your Own Story
          </em>
        </MDBCardBody>
      </MDBCard>

      <Container className='p-3'>
        <Row className='mt-2 text-left'>
          <Col className='col-4'>
            <Image src={require("../Samples/sample1.jpeg")} rounded width={250} />
          </Col>
          <Col className='mt-5'>
            <em><p className='fs-5'>
              Day</p></em></Col>
          <Col className='mt-5'>
            <em><p className='fs-5'>
              Hobby</p></em></Col>
          <Col className='mt-5'>
            <em><p className='fs-5'>
              Job</p></em></Col>
          <Col className='mt-5'>
            <em><p className='fs-5'>
              Family</p></em></Col>
          <Col className='mt-5'>
            <em><p className='fs-5'>
              Date</p></em></Col>
          </Row>
      </Container>

      <Container className="mt-5 w-100">
          <MDBCard className='w-100'>
            <MDBCardBody>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type Here" />
                <MDBBtn rippleColor='dark'>
                  <i class="fas fa-arrow-circle-up fa-2xl"></i>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Container>

      <div class='text-center'>
        <MDBBtn className='mt-4 w-25' size='lg' onClick={() => {navigate('/processing');}}>
          Submit
        </MDBBtn>
      </div>

    </div>
  );
}

export default Test;