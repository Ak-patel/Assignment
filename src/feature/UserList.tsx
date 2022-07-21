import { useSnapshot } from "valtio";
import { UserState } from "../store";
import { UserItem } from "./UserItem";

const UserList = () => {
    const { users } = useSnapshot(UserState);

    return (
        <div>
            <h1>User</h1>
            {users.map((e, index) => (
                <ul className="list-group">
                    <UserItem user={e} key={index} />
                </ul>
            ))}

        </div>
    );
};
export default UserList;
