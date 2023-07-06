import React from "react";
import { Container } from 'react-bootstrap'

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
  MDBInputGroup,
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit";

export default function Discussion() {
  return (
    <section className="vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "2000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="11" lg="10" xl="7">
            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src={require('../images/user.png')}
                alt="avatar"
                width="65"
                height="65"
              />

              <MDBCard className="w-100">
                <MDBCardBody className="p-4">
                  <div>
                    <MDBTypography tag="h5">Johny Cash</MDBTypography>
                    <p className="small">2 hours ago</p>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus ras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted me-2">
                          <MDBIcon fas icon="thumbs-up me-1" />
                          132
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="thumbs-down me-1" />
                          15
                        </a>
                      </div>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="reply me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src={require('../images/user.png')}
                alt="avatar"
                width="65"
                height="65"
              />

              <MDBCard className="w-100">
                <MDBCardBody className="p-4">
                  <div>
                    <MDBTypography tag="h5">Mindy Campbell</MDBTypography>
                    <p className="small">3 minutes ago</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus cumque doloribus dolorum dolor repellat nemo
                      animi at iure autem fuga cupiditate architecto ut quam
                      provident neque, inventore nisi eos quas?
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted me-2">
                          <MDBIcon fas icon="thumbs-up me-1" />
                          27
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="thumbs-down me-1" />
                          3
                        </a>
                      </div>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="reply me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>

        <Container className="p-3 w-100">
          <MDBCard className='w-100'>
            <MDBCardBody className="p-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type Here" />
                <MDBBtn rippleColor='dark'>
                  <i class="fas fa-paper-plane"></i>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </Container>

      </MDBContainer>
    </section>
  );
}