import React from 'react';
import './login.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function LoginForm() {
  return (
    <>
      <div className="background-video-container">
        <video autoPlay muted loop id="background-video">
          <source src="https://videos.pexels.com/video-files/7914785/7914785-sd_640_360_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <form>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form3Example2' label='Last name' />
          </MDBCol>
        </MDBRow>
        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form3Example5'
          label='Subscribe to our newsletter'
          defaultChecked
        />

        <MDBBtn type='submit' className='mb-4' block>
          Sign in
        </MDBBtn>

        <div className='text-center'>
          <p>
            Not a member? <a href='#!'>Register</a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </form>
    </>
  );
}
