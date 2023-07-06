import { Container, Row, Col } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'

function TestPage() {
  return(
    <div>
      <Container>
      <Col>
        <div>
          <p className='fs-2'>
            Easy and Intuitive<br/>
            Online Testing<br/>
            to Break Your Biases
          </p>
        </div>
      </Col>
      <Col>
        <MDBBtn size='lg'>Test Now</MDBBtn>
      </Col>
      </Container>
    </div>
  );
}

export default TestPage;



