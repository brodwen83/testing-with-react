import React from 'react';
import { Header } from './components/header';
import { Headline } from './components/headline';

import './styles/app.scss';

const tempArr = [
  {
    fName: 'Test fName',
    lName: 'Test lName',
    age: 23,
    onlineStatus: false,
  },
];

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Test Header'
          desc='click the button to render posts!'
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
