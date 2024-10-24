import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './floot.css';  // Import the CSS file

export default function FlooteBar() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mdb-footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span> 

          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                DR COMPUTER HOUSE
              </h6>
              <p>
              DR COMPUTER HOUSE is your trusted partner for all things related to computers and technology. </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href="#laptops" className='text-reset'>
                Laptops
                </a>
              </p>
              <p>
                <a href="#desktop workstations" className='text-reset'>
                Desktop Workstations
                </a>
              </p>
              <p>
                <a href="#monitors$accessories" className='text-reset'>
                MONITORS & ACCESSORIES
                </a>
              </p>
              <p>
                <a href="#storage$nas" className='text-reset'>
                STORAGE & NAS
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://example.com/pricing' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='https://example.com/settings' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='https://example.com/orders' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='https://example.com/help' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Galle,Hikkaduwa, Sri Lanka
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                DRcomputer124@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 0912345687
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 0764536543
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        © 2024 ComputerWorld:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          DRcomputerHouse.com
        </a>
      </div>
    </MDBFooter>
  );
}