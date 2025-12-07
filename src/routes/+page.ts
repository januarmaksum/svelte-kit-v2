import type { PageLoad } from "./$types";
import type { Post } from "$lib/types/posts.type";
import type { Comment } from "$lib/types/comment.type";

export const load: PageLoad = async ({ fetch }) => {
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json());
    const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments').then((r) => r.json());

    const [posts, comments]: [Post[], Comment[]] = await Promise.all([
        postsPromise,
        commentsPromise
    ]);

    return {
        posts,
        comments
    };
};