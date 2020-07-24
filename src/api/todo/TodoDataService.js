import axios from 'axios'

class TodoDataService {

    retrieveAllToDos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`);
    }

    deleteToDo(username,id){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }

    

}

export default new TodoDataService();