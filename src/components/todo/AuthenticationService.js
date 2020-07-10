class AuthenticationService {
    
    registerSuccesfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log("Authentication Service completed - welcome " + username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        console.log("Authentication cleared")
    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem('authenticatedUser')

        //console to view if user is being populated
        //console.log(user)
        
        if(user===null) return false
        return true
    
    }
}

export default new AuthenticationService();