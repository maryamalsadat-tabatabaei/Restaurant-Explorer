import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function Footer(props) {
    return(
    <React.Fragment>
        <section>
            <div className="row mt-5">             
                <div className="col-2 p-0">
                    <a href={baseUrl + 'images/g1.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g1.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
                <div className="col-2  p-0">
                    <a href={baseUrl + 'images/g2.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g2.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
                <div className="col-2 p-0">
                    <a href={baseUrl + 'images/g3.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g3.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
                <div className="col-2 p-0">
                    <a href={baseUrl + 'images/g4.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g4.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
               <div className="col-2 p-0">
                    <a href={baseUrl + 'images/g5.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g5.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
                <div className="col-2 p-0 m-0">
                    <a href={baseUrl + 'images/g6.jpg'} target="_blank">
                       <img className="img-fluid" src={baseUrl + 'images/g6.jpg'} alt="Pizza picture"/>
                     </a>
                </div>
            </div>
        </section>
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 mt-5 ">
                        <h5 className="mb-5">Follow us on social networks</h5>
                    <ul className="list-unstyled list-inline">
                    <li className="list-inline-item social-icons  mr-3" >
                        <a  href="http://google.com/+"><i className=" fa fa-google-plus"></i></a>
                    </li>
                     <li className="list-inline-item social-icons  mr-3" >
                        <a  href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                    </li>
                     <li className="list-inline-item social-icons  mr-3" >
                        <a  href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                    </li>
                     <li className="list-inline-item social-icons  mr-3" >
                        <a  href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    </li>
                     <li className="list-inline-item social-icons  mr-3" >
                        <a href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </li>
                     <li className="list-inline-item social-icons mr-3" >
                        <a href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </li>
                       
                    </ul>
                </div> 
                </div>
                <div className="row justify-content-center">            
                    <div className="col-12 col-sm-6">
                        <img className="img-fluid" src={baseUrl + 'images/f.jpg'} alt="logo" width="300"/>
                    </div> 
                </div>
                <div className="row justify-content-center mt-3">            
                    <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 MT</p>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}

export default Footer;