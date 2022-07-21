import UserService from "../service/UserServices";
import StateManager from "./StateManager";
export class UserManager {
    static getAll = async () => {
        const users = await UserService.getAll();
        if (!users) return;
        StateManager.setUsers(users);
        console.log('User Name: ', users);
    }
}