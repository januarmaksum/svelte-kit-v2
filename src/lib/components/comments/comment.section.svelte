<script lang="ts">
  import type { Comment } from '$lib/types/comment.type';
  import CommentList from './comment.list.svelte';

  export let comments: Comment[];
</script>

<div class="p-6">
	<h2 class="text-2xl font-bold mb-4">Comments</h2>
	<CommentList {comments} />
</div>
