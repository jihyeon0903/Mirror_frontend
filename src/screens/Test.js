import { Container, Row, Col } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'

function Test() {
  return(
    <div>
      <Container className='py-3'>
        <Row className='mt-3'>
          <Col>face 1</Col>
          <Col>face 2</Col>
          <Col>face 3</Col>
          <Col>face 4</Col>
          <Col>face 5</Col>
        </Row>
      </Container>

      <Container>
        <Row className='mb-3'>
          <Col>profession 1</Col>
          <Col>profession 2</Col>
          <Col>profession 3</Col>
          <Col>profession 4</Col>
          <Col>profession 5</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Test;