import { Container, Row, Col, Image } from 'react-bootstrap'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput }
from 'mdb-react-ui-kit'

function Test() {
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
          <Col>
            <Image src={require("../Samples/sample1.jpeg")} rounded width={200} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className={"row-bottom"}>
          <Col className='mt-5'>KeyWord 1</Col>
          <Col className='mt-5'>KeyWord 2</Col>
          <Col className='mt-5'>KeyWord 3</Col>
          <Col className='mt-5'>KeyWord 4</Col>
          <Col className='mt-5'>KeyWord 5</Col>
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
        <MDBBtn className='mt-5 w-50' size='lg'>Submit</MDBBtn>
      </div>

    </div>
  );
}

export default Test;