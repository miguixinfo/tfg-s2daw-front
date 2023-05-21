import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 footer mt-3">
      <div className="container text-center">
        <p className="mb-0">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Miguel Gómez IES Azarquiel
        </p>
      </div>
    </footer>
  );
}

export default Footer;
