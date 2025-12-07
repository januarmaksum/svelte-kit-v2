<script lang="ts">
  import type { Post } from '$lib/types/posts.type';
  import PostList from './post.list.svelte';

  export let posts: Post[];
</script>

<div class="p-6">
	<h2 class="text-2xl font-bold mb-4">Posts</h2>
	<PostList {posts} />
</div>
