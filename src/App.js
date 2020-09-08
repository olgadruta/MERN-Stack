import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import RegisterMoreForms from './components/MoreForms';
import {Boxy} from './components/BoxGenerator';
import {Tabs} from './components/Tabs';


// import {MyContext} from './context/myContext'
// import {Header} from './components/newtest'

// const name ="George"

// const App =() =>

function App() {
  const tabContent=[{
    name: 'Tab1',
    content: 'This is content for tab1',
  },
  {
    name: 'Tab2',
    content: 'this is content for tab2',
  },
  {
    name: 'Tab3',
    content: 'this is content for tab3',
  }
  ]
  // const [nameState, setStateName] = useState(name)
  return (
    <div className="App">
      {/* <RegisterForm />
      <RegisterMoreForms/> */}
      {/* <Boxy/> */}
      <Tabs newTabContent={tabContent} />

      {/* bellow from calss lecture */}
      {/* <Header /> */}
      {/* <MyContext.Provider value={name} /> */}
      {/* <MyContext.Provider value={{nameState, setStateName}} />
      <PersonCard firstName="Lady" lastName="Mern" age={25} /> */}

    </div>
  );
}

export default App;
