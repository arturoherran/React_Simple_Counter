import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get("http://localhost:8080/hello-world");
    }

    executeHelloWorldBeanService() {
        let urnm = 'Arturo'
        let password = 'micontra'

        let basicAuthHeader = 'Basic ' + window.btoa(urnm + ':' + password)

        return axios.get(
            'http://localhost:8080/hello-world-bean',
            {
                headers: { authorization: basicAuthHeader }
            }
        );    
    }

    executeHelloWorldPathVariableService(name) {
        let urnm = 'Arturo'
        let password = 'micontra'

        let basicAuthHeader = 'Basic ' + window.btoa(urnm + ':' + password)

        return axios.get(
            `http://localhost:8080/hello-world/path-variable/${name}`,
            {
                headers: {
                    authorization: basicAuthHeader
                }
            }
        );
        
    }


}

export default new HelloWorldService()