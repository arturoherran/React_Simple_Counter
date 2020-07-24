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

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        
        if(!user)
            return ''

        return user
    }
}

export default new AuthenticationService();