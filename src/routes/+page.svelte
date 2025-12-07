<svelte:head>
	<title>Homepage</title>
</svelte:head>

<script lang="ts">
	export let data;

	import PostSection from '$lib/components/posts/post.section.svelte';
	import CommentSection from '$lib/components/comments/comment.section.svelte';
</script>

<div class="grid grid-cols-2 gap-3.5">
	{#await Promise.resolve(data.posts)}
		<div class="p-10 text-gray-500">Loading posts...</div>
	{:then posts}
		<PostSection {posts} />
	{:catch err}
		<div class="text-red-600 p-4">Error posts: {err.message}</div>
	{/await}

	{#await Promise.resolve(data.comments)}
		<div class="p-10 text-gray-500">Loading comments...</div>
	{:then comments}
		<CommentSection {comments} />
	{:catch err}
		<div class="text-red-600 p-4">Error comments: {err.message}</div>
	{/await}
</div>
