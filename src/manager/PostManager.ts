import { User } from "../model";
import PostService from "../service/PostServices";
import StateManager from "./StateManager";


export class PostManager {
    static getAll = async (user?: User) => {
        const posts = await PostService.getAll(user?.id);
        if (!posts) return;
        StateManager.setPost(posts);
        StateManager.setSelectedUser(user)
        console.log('Selected User:', user);
    }
}
