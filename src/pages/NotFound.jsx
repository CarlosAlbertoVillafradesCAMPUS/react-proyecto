import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () =>{
    return (
        <div>
          <h1 className="title-error">Error 404</h1>
          <p className="zoom-area"> Page NotFound.. </p>
          <section className="error-container">
             <span><span>4</span></span>
             <span>0</span>
             <span><span>4</span></span>
          </section>
          <div className="link-container">
             <a href="/" className="more-link">Visit the original pages</a>
          </div>
        </div>

    );
}

export default NotFound;