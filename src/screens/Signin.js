import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea
}
from 'mdb-react-ui-kit';

function SignIn() {
  return (
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Log In</h3>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4 w-100' label='Email' size='lg' id='form1' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4 w-100' label='Password' size='lg' id='form3' type='text'/>
              </MDBCol>
            </MDBRow>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">Remember Me</label>
            </div>

            <MDBBtn className='mb-4 w-100' size='lg'>Sign In</MDBBtn>

            <MDBRow>
              <MDBCol md='6'>
                <label className='mb-4 text-right'>Register Now</label>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;