import type { PageServerLoad } from "./$types";
import { createApiClient } from "$lib/api/client";
import type { Post } from "$lib/types/posts.type";
import type { Comment } from "$lib/types/comment.type";

export const load: PageServerLoad = async ({ fetch }) => {
    const api = createApiClient({
        baseUrl: "https://jsonplaceholder.typicode.com",
        fetchFn: fetch,
    });

    const posts = api.get<Post[]>("/posts");
    const comments = api.get<Comment[]>("/commentss");

    return {
        posts,
        comments
    };
};
