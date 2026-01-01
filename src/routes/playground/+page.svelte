<script lang="ts">
	let people = $state([
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	]);

	let prefix = $state('');
	let first = $state('');
	let last = $state('');
	let i = $state(0);

	let filteredPeople = $derived(prefix
		? people.filter((person) => {
				const name = `${person.last}, ${person.first}`;
				return name.toLowerCase().startsWith(prefix.toLowerCase());
			})
		: people);
	let selected = $derived(filteredPeople[i]);

	$effect(() => {
		reset_inputs(selected);
        console.log("📢[+page.svelte:24]: prefix: ", prefix);
	});

	function create() {
		people = people.concat({ first, last });
		i = people.length - 1;
		first = last = '';
	}

	function update() {
		selected.first = first;
		selected.last = last;
		people = people;
	}

	function remove() {
		// Remove selected person from the source array (people), not the filtered array
		const index = people.indexOf(selected);
		people = [...people.slice(0, index), ...people.slice(index + 1)];

		first = last = '';
		i = Math.min(i, filteredPeople.length - 2);
	}

	function reset_inputs(person: { first: string; last: string } | null) {
		first = person ? person.first : '';
		last = person ? person.last : '';
	}
</script>

<div class="space-y-4 max-w-md mx-auto p-4 bg-white rounded-xl shadow-sm">

	<!-- Filter input -->
	<input
		placeholder="Filter prefix"
		bind:value={prefix}
		class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
	/>

	<!-- List -->
	<select
		bind:value={i}
		size={5}
		class="w-full border rounded-lg px-2 py-2 focus:outline-none focus:ring focus:ring-blue-200"
	>
		{#each filteredPeople as person, i}
			<option value={i}>
				{person.last}, {person.first}
			</option>
		{/each}
	</select>

	<!-- Input fields -->
	<div class="space-y-2">
		<label class="block">
			<input
				bind:value={first}
				placeholder="first"
				class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
			/>
		</label>

		<label class="block">
			<input
				bind:value={last}
				placeholder="last"
				class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
			/>
		</label>
	</div>

	<!-- Buttons -->
	<div class="flex gap-2 pt-2">
		<button
			onclick={create}
			disabled={!first || !last}
			class="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed"
		>
			Create
		</button>

		<button
			onclick={update}
			disabled={!first || !last || !selected}
			class="px-4 py-2 rounded-lg bg-yellow-500 text-white disabled:opacity-40 disabled:cursor-not-allowed"
		>
			Update
		</button>

		<button
			onclick={remove}
			disabled={!selected}
			class="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-40 disabled:cursor-not-allowed"
		>
			Delete
		</button>
	</div>
</div>

