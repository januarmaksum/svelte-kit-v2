<script lang="ts">
	export let data;

	import PostList from '$lib/components/posts/PostList.svelte';
	import CommentList from '$lib/components/comments/CommentList.svelte';
</script>

<div class="grid grid-cols-2 gap-3.5">
	{#await Promise.resolve(data.posts)}
		<div class="p-10 text-gray-500">Loading posts...</div>
	{:then posts}
		<div class="p-6">
			<h2 class="text-2xl font-bold mb-4">Posts</h2>
			<PostList {posts} />
		</div>
	{:catch error}
		<div class="text-red-600 p-4">Gagal load posts: {error.message}</div>
	{/await}

	{#await Promise.resolve(data.comments)}
		<div class="p-4 text-gray-500">Loading comments...</div>
	{:then comments}
		<div class="p-6">
			<h2 class="text-2xl font-bold mb-4">Comments</h2>
			<CommentList {comments} />
		</div>
	{:catch error}
		<div class="text-red-600 p-4">Gagal load comments: {error.message}</div>
	{/await}
</div>
