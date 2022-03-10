import axios from 'axios';
import { LOGIN_USER } from './Type';

const UserAction = (dataToSubmit) => {
    const request = axios.post('/api/users/login', dataToSubmit).then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export default UserAction;