import api from "../service/ApiServices"
import { User } from "../model";


export default class UserService {
    static getAll = async () => {
        const response = await api.get<User[]>('/users').catch(() => null);
        if (!response) return null;
        return response.data;
    }

};
