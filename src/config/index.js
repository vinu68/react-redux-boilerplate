let constants = {
	FILTERS: {
		Species: [
			{ label: 'Human', value: 'human' },
			{ label: 'Mytholog', value: 'mytholog' },
			{ label: 'All', value: '' },
		],
		Gender: [
			{ label: 'Male', value: 'male' },
			{ label: 'Female', value: 'female' },
			{ label: 'All', value: '' },
		],
		Status: [
			{ label: 'Alive', value: 'alive' },
			{ label: 'Dead', value: 'dead' },
			{ label: 'Unknown', value: 'unknown' },
			{ label: 'All', value: '' },
		],
	},
	API_URL: 'https://rickandmortyapi.com/api/character/',
};

export default constants;
