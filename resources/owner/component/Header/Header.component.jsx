import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../assets/shot-1.png'

const Header = () => (

    <header id="home" className="header" style={{backgroundImage: "linear-gradient(150deg, #fdfbfb 0%, #eee 100%"}}>
      <div className="container">
        <div className="row align-items-center h-100">

          <div className="col-lg-5">
            <h1 className="display-4"><strong>TheSaaS</strong>;<br/>Where Work happens</h1>
            <p className="lead mt-5">Whatever work means for you, TheSaaS brings all the pieces and people you need together so you can actually get things done.</p>

            <hr className="w-10 ml-0 my-7"/>

            <p className="gap-xy">
              <Link className="btn btn-lg btn-round btn-success mw-200" to="#section-pricing">Get Started</Link>
              <Link className="btn btn-lg btn-round btn-outline-success mw-200" to="#section-features">Features</Link>
            </p>
          </div>

          <div className="col-lg-6 ml-auto">
            <div className="video-wrapper ratio-16x9 rounded shadow-6 mt-8 mt-lg-0">
              <div className="poster" style={{backgroundImage: "url("+Background+")"}}></div>
              <button className="btn btn-circle btn-lg btn-info"><i className="fa fa-play"></i></button>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/M5S_JBRjd1s?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen=""></iframe>
            </div>
          </div>

        </div>
      </div>
    </header>
);

export default Header;