import "./FooterComponent.css"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class FooterComponent extends Component {
    render() {
        return(
            <div>
                <footer className="footer fixed-bottom">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item">
                                <Link to="" className="footerOption">About</Link>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                                <Link to="" className="footerOption">Contact</Link>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                            <Link to="" className="footerOption">Terms of use</Link>
                            </li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; What's next 2020. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-3">
                            <Link to="https://www.facebook.com/arturoherrang/">
                                <i className="fa fa-facebook fa-2x fa-fw"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item mr-3">
                            <a href="https://mobile.twitter.com/El_Herran">
                                <i className="fa fa-twitter-square fa-2x fa-fw"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://instagram.com/vulppesvulppes">
                                <i className="fa fa-instagram fa-2x fa-fw"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>



               {/* <div classNameName="footer">
                    <div classNameName="fixed-bottom bg-dark" style={{color:"white",height:"extends"}}>

                        <div classNameName="container" style={{margin:"10px auto"}}>
                            <div classNameName="row">
                                <div classNameName="col-sm">
                                    About us
                                </div>
                                <div classNameName="col-sm">
                                    Contact us
                                </div>
                                <div classNameName="col-sm">
                                    More stuff
                                </div>
                            </div>

                            <div classNameName="row">
                                <div classNameName="col-sm">
                                    Ayudar y aprender
                                </div>
                                <div classNameName="col-sm">
                                    IG y Github
                                </div>
                                <div classNameName="col-sm">
                                    Aqui van a ir datos extras
                                </div>
                            </div>

                            <div classNameName="row">

                            </div>
                        </div>

                    </div>
               </div> */}
            </div>
        )
    }
}

export default FooterComponent;