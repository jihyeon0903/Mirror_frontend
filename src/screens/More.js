import { Container, Col, Image, Row } from 'react-bootstrap'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit'

function More() {
  return(
    <Container className='p-0'>
      <Row>
        <Col className='mt-5'>
          <Image src={require("../images/mirror.png")} roundedCircle width={150}/>
        </Col>

        <Col>
          <MDBCard className='p-3 mt-5'>
            <MDBCardBody>
              <p>
                Mirror is an interactive platform allowing all users to uncover and be more aware of the different types of unconscious bias they may use in everyday life.
              </p>
              <p>
                Anyone, regardless of their ethnicity, age or gender, can become the user of the platform and enjoy all the features.
              </p>
            </MDBCardBody>
          </MDBCard>
        </Col>
      </Row>
    </Container>
  )
}

export default More;
