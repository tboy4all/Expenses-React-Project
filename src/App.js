// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]

// function App() {
//   return (
//     <div>
//       ...
//       <hr />
//       {list.map(function (item) {
//         return (
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <br />
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]

// function App() {
//   return (
//     <div>
//       <h1>My Hacker Stories</h1>

//       <label htmlFor='search'>Search: </label>
//       <input id='search' type='text' />

//       <hr />

//       {list.map(function (item) {
//         return null
//       })}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]

// const App = () => {
//   const handleChange = (event) => {
//     console.log(event.target.value)
//   }

//   return (
//     <div>
//       <h1>My Hacker Stories</h1>

//       <label htmlFor='search'>Search: </label>
//       <input id='search' type='text' onChange={handleChange} />

//       <hr />

//       <List />
//     </div>
//   )
// }

// const List = () =>
//   list.map((item) => (
//     <div key={item.objectID}>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//     </div>
//   ))

// export default App

// passing a style object to a style attribute to a native HTML element in React for the first time:
// import * as React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Welcome text={{ greeting: 'Welcome to React' }} />
//     </div>
//   )
// }

// const Welcome = ({ text }) => {
//   return <h1 style={{ color: 'orangered' }}>{text.greeting}</h1>
// }
// export default App

// REACT PROPS VS. STATE
// import * as React from 'react'

// const App = () => {
//   const greeting = 'Welcome to React State'

//   const [isShow, setShow] = React.useState(true)

//   const handleToggle = () => {
//     setShow(!isShow)
//   }

//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle</button>
//       {isShow ? <Welcome text={greeting} /> : null}
//     </div>
//   )
// }

// const Welcome = ({ text }) => {
//   return <h1 style={{ color: 'orangered' }}>{text}</h1>
// }

// export default App

// How state can be become props

// import * as React from 'react'

// const App = () => {
//   const [greeting, setGreeting] = React.useState('Welcome to React')
//   const [isShow, setShow] = React.useState(true)

//   const handleToggle = () => {
//     setShow(!isShow)
//   }

//   const handleChange = (event) => {
//     setGreeting(event.target.value)
//   }

//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle</button>

//       <input type='text' value={greeting} onChange={handleChange} />

//       {isShow ? <Welcome text={greeting} /> : null}
//     </div>
//   )
// }

// const Welcome = ({ text }) => {
//   return <h1 style={{ color: 'orangered' }}>{text}</h1>
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState('Hello React')

//   const handleChange = (event) => setValue(event.target.value)

//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type='text' onChange={handleChange} /> <br />
//       </label>

//       <p>
//         <strong>Output:</strong> {value}
//       </p>

//       <label>
//         My controlled Input:
//         <input type='text' value={value} onChange={handleChange} />
//       </label>

//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   )
// }

// export default App

// import * as React from 'react'

// const App = () => {
//   const [greeting, setGreeting] = React.useState('Welcome to React')
//   const [isShow, setShow] = React.useState(true)

//   const handleChange = (event) => {
//     setGreeting(event.target.value)
//   }

//   const handleToggle = () => {
//     setShow(!isShow)
//   }

//   return (
//     <div>
//       <Button label='Toggle' onClick={handleToggle} />

//       <input type='text' value={greeting} onChange={handleChange} />

//       {isShow ? <Welcome text={greeting} /> : null}
//     </div>
//   )
// }

// const Button = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick} type='button'>
//       {label}
//     </button>
//   )
// }

// const Welcome = ({ text }) => {
//   return <h1>{text}</h1>
// }

// export default App

// import * as React from 'react'
// import ExpenseItem from './components/ExpenseItem'

// const App = () => {
//   // const title = 'React'
//   // const description = 'Your component library for ...'

//   return (
//     <div>
//       {/* <Welcome title={title} description={description} /> */}
//       <ExpenseItem />
//     </div>
//   )
// }

// const Welcome = (props) => {
//   return (
//     <div
//       style={{
//         border: '1px solid black',
//         height: '200px',
//         width: '400px',
//       }}
//     >
//       <Message {...props} />
//     </div>
//   )
// }

// const Message = ({ title, description }) => {
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    // console.log('In App.js')
    // console.log(expense)

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
