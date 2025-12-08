<script lang="ts">
	export let error;
	export let status;
</script>

<div class="p-10 text-red-600">
	<h1 class="font-bold text-2xl">{status}</h1>
	<p>{error?.message}</p>
</div>
