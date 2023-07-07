import { Container, Col, Image, Row } from 'react-bootstrap'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit'

function More() {
  return(
    <Container>
      <Row>
        <Col className='mt-5'>
          <Image src={require("../images/mirror.png")} roundedCircle width={230} height={250}/>
        </Col>

        <Col className='col-8'>
          <MDBCard className='mt-5'>
            <MDBCardBody>
              <p className='fs-5'>
                Mirror is an interactive platform allowing all users to uncover and be more aware of the different types of unconscious bias they may use in everyday life.
              </p>
              <p className='fs-5'>
                Anyone, regardless of their ethnicity, age or gender, can become the user of the platform and enjoy all the features.
              </p>
            </MDBCardBody>
          </MDBCard>
        </Col>

      </Row>
    </Container>
  );
}

export default More;
