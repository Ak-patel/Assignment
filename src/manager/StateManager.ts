import { Post, User } from "../model";
import { UserPostState, UserState } from "../store";

export default class StateManager {
    static setUsers = (userList: User[]) => {
        UserState.users = userList;
    }
    static setPost = (posts: Post[]) => {
        UserPostState.post = posts;
    }
    static setSelectedUser = (selectedUser?: User) => {
        UserState.selectedUser = selectedUser;
    }
};

