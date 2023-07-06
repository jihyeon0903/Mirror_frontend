import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';


function SignIn() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h1 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Log In</h1>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form1' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-3' label='Password' size='lg' id='form2' type='text'/>
              </MDBCol>
            </MDBRow>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">Remember Me</label>
            </div>

            <div class='text-center'>
              <MDBBtn className='mb-4 mt-4 w-100' size='lg'>Sign In</MDBBtn>
            </div>

            <MDBRow>
              <MDBCol md='6'>
                <div class="me-auto">
                  <label className='mb-4'>Register Now</label>
                </div>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;