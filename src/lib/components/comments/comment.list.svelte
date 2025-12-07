<script lang="ts">
    import type { Comment } from "$lib/types/comment.type";

    export let comments: Comment[];
</script>

<div class="grid gap-4">
	{#each comments as comment}
		<div class="bg-white shadow p-4 rounded border hover:bg-gray-50 transition cursor-pointer">
			<h2 class="font-semibold">{comment.name}</h2>
			<p class="text-gray-600 text-sm">{comment.email}</p>
			<p class="mt-1 text-sm">{comment.body}</p>
		</div>
	{/each}
</div>