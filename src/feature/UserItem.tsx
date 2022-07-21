import { useSnapshot } from "valtio";
import { PostManager } from "../manager/PostManager";
import { User } from "../model";
import { UserState } from "../store";

interface UserItemProps {
    user: User;
}


export const UserItem = ({ user }: UserItemProps) => {
    const { selectedUser } = useSnapshot(UserState);
    const isSelectedUser = selectedUser?.id === user.id;
    const load = async (user?: User) => {
        await PostManager.getAll(user);
    };
    return (
        <li
            className={`list-group-item ${isSelectedUser ? 'active' : ""}`}
            onClick={() => load(user)}
        >
            {user.name}
        </li>
    );
};
