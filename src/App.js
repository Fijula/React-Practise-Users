import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES= [
  {
    id: 'e1',
    title: 'Dairy Milk',
    amount: 200,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2',
  
title: 'Rafello', 
  amount: 750, 
  date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Galaxy',
    amount: 800,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Ferrero',
    amount: 900,
    date: new Date(2020, 5, 12),
  },
];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]

    })
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;