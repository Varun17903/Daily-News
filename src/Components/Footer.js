import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Daily News</h5>
            <p>Your daily dose of news from around the world, providing you with the latest and most accurate updates in the industry.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p>
              <a href="/" className="text-light" style={{ textDecoration: 'none' }}>Home</a>
            </p>
            {/* <p>
              <a href="/about" className="text-light" style={{ textDecoration: 'none' }}>About Us</a>
            </p>
            <p>
              <a href="/contact" className="text-light" style={{ textDecoration: 'none' }}>Contact</a>
            </p> */}
            <p>
              <a href="/privacy" className="text-light" style={{ textDecoration: 'none' }}>Privacy Policy</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <p>
              <a href="https://www.facebook.com" className="text-light" style={{ textDecoration: 'none' }}>Facebook</a>
            </p>
            <p>
              <a href="https://www.twitter.com" className="text-light" style={{ textDecoration: 'none' }}>Twitter</a>
            </p>
            <p>
              <a href="https://www.instagram.com" className="text-light" style={{ textDecoration: 'none' }}>Instagram</a>
            </p>
            <p>
              <a href="https://www.linkedin.com" className="text-light" style={{ textDecoration: 'none' }}>LinkedIn</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p>
              <i className="fas fa-home mr-3"></i> 88.Krishna Nagar C,Jaipur
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@dailynews.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-3">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">© 2024 Daily News. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
