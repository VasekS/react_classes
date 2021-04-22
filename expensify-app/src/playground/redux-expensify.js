import { createStore, combineReducers } from 'redux';

const demoState = {
	expenses: [{
		id: 'jsanclkasc',
		description: 'April HOA',
		note: 'Monthly HOA payment',
		amount: 34500,
		createdAt: 0
	}],
	filters: {
		text: 'HOA',
		sortBy: 'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};

