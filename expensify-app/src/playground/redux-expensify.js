import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducers

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Filters reducer

const filtersRedurerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersRedurerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Store creation

const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

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

