import React, { Component } from 'react'
import AuthenticationService from "./AuthenticationService";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {

        const isUserLogged = AuthenticationService.isUserLoggedIn();
        
        // View if user has logged in, true if user variable at AuthenticationService.js is populated
        // console.log(isUserLogged);

        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: "black"}}> 
                <div className="navbar-brand"><Link to="/">What's next</Link></div> 
                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <ul className="nav justify-content-center">
                            {isUserLogged && <li><Link  className="nav-link"  to="/welcome/Arturo">Home</Link></li>}
                            {isUserLogged && <li><Link className="nav-link" to="/List">To Do List</Link></li>}
                        </ul>
                    
                        <ul className="nav navbar-collapse justify-content-end">
                           {!isUserLogged && <li><Link className="nav-link" to="/login">Login</Link></li>}
                           {isUserLogged && <li><Link className="nav-link" to="/" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>

                    </div>
                </nav>
        )
    }
}

export default withRouter(HeaderComponent);