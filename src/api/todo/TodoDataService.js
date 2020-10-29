import axios from 'axios'
import {API_URL} from '../../Constants.js'

class TodoDataService {

    retrieveAllToDos(username) {
        return axios.get(`${API_URL}/users/${username}/todos`);
    }

    retrieveTodo(username, id) {
        return axios.get(`${API_URL}/users/${username}/todos/${id}`)
    }

    deleteToDo(username, id) {
        return axios.delete(`${API_URL}/users/${username}/todos/${id}`)
    }

    updateTodo(username, id, todo) {
        return axios.put(`${API_URL}/users/${username}/todos/${id}`, todo)
    }

    addTodo(username, id, todo) {
        return axios.put(`${API_URL}/users/${username}/todos/${id}`, todo)
    }




}

export default new TodoDataService();