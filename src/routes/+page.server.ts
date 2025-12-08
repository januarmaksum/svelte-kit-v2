import type { PageServerLoad } from "./$types";
import { createApiClient } from "$lib/api/client";
import type { Post } from "$lib/types/posts.type";
import type { Comment } from "$lib/types/comment.type";

export const load: PageServerLoad = async ({ fetch }) => {
    const postsApi = createApiClient({
        baseUrl: "https://jsonplaceholder.typicode.com",
        fetchFn: fetch,
    });

    const commentsApi = createApiClient({
        baseUrl: "https://tools-httpstatus.pickup-services.com",
        fetchFn: fetch,
    });

    const posts = postsApi.get<Post[]>("/posts");
    const comments = commentsApi.get<Comment[]>("/500");

    return {
        posts,
        comments
    };
};
