import React from 'react';
import './Home.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.css';
import Search from '../search/Search';
// import Image from '../images/Image';
import { NavLink } from 'react-router-dom';
// import Loginsignup from '../loginsignup/Loginsignup';
import BlogApp from './blogs/BlogApp';
import LoginPage from '../log/LoginPage';

export const Home = () => {
  return (

  <div className="container-fluid home row">
    
    <div className='aa container-fluid row first h-20 d-flex' style={{ justifyContent: 'center', alignItems: 'center' }}>

  {/* Left Side */}
  <div className='' ></div>

  {/* Right Side */}
  <div className=' d-flex flex-column justify-content-center align-items-center'>
    <div style={{ marginBottom: '10px',justifyContent:'center',alignItems:'center' }}>
      <div style={{ fontSize: "40px", color: 'white', paddingTop: '5px' }}>
        "Unknown name, endless possibilities."
      </div>
      <NavLink exact to="/login" style={{ textDecoration: 'none' }}>
        <button className='button-view' onClick={<LoginPage />} style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '10px', fontSize: '25px' }}>
          Login
        </button>
      </NavLink>
    </div>
  </div>

</div>

   
        <div className="container-fluid row">
          <div className="col-md-3 left-pane">
            <Search />
            <div className="video-container-wrapper">
              <div className="video-container scrollable">
                {/* YouTube Video Embed */}
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="315"
                  height="150"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Add more video containers */}
            </div>
          </div>
          <div className="col-md-6 middle-pane" style={{paddingTop:"20%"}}>
            <h2>placeholder holder of Vents with comments that come on backend</h2>
            {/* Content for the middle pane goes here */}
            
          </div>
          <div className="col-md-3 right-pane" style={{paddingTop:"20%"}}>
     <BlogApp />
          </div>
        </div>
      </div>
    
    );
};