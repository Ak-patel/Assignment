import { proxy } from "valtio";
import { Post, User } from "../model";

interface UserStateType {
    users: User[];
    selectedUser?: User
}
interface UserPostType {
    post: Post[];
}

export const UserPostState = proxy<UserPostType>({
    post: [],
});

export const UserState = proxy<UserStateType>({
    users: [],
    selectedUser: undefined,
});


