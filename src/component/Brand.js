import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './brand.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Brand() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/924/924915.png'
              height='30'
              alt=''
              loading='lazy'
            />
            DR COMPUTER HOUSE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}