<script lang="ts">
    import type { Post } from "$lib/types/posts.type";

    export let posts: Post[];
</script>

<div class="grid gap-4">
    {#each posts as post}
        <div class="bg-white shadow p-4 rounded border hover:bg-gray-50 transition cursor-pointer">
			<h2 class="font-semibold text-lg">{post.title}</h2>
			<p class="text-sm text-gray-600 mt-1">{post.body}</p>
		</div>
    {/each}
</div>