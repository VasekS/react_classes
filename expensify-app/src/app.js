import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import addExpense from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

//Challenge
// const newExpense = addExpense({description: 'Water'});
const expenseOne = store.dispatch(addExpense({ description: 'HOA', amount: 100, createdAt: -21000 }));

console.log(expenseOne());

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));