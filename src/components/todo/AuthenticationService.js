import axios from 'axios'
import {API_URL} from '../../Constants.js'
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from '../../Constants.js'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            {
                headers: { authorization: this.createBasicAuthToken(username, password) }
            })
    }

    createBasicAuthToken(username, password) {
        //create a basic auth header and pass it as argument for the Interceptor
        return "Basic " + window.btoa(username + ":" + password)
    }

    executeJWTAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`,
            {
                username,
                password
            })
    }    

    registerSuccesfulLoginForJWT(username,token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        //create a basic auth header and pass it as argument for the Interceptor
        return "Bearer " + token
    }
    
    registerSuccesfulLogin(username, password) {

        //let basicAuthHeader = createBasicAuthToken(username, password)

        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        console.log("Authentication Service completed - welcome " + username)

        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log("Authentication cleared")
    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)

        //console to view if user is being populated
        //console.log(user)

        if (user === null)
            return false
        return true
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)

        if (!user)
            return ''

        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}

export default new AuthenticationService();