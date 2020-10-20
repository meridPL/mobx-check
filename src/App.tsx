import { Button } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import './App.css';
import ContextApp from './component/ContextApp';

const App = observer(() => {
  const context = useContext(ContextApp)
  // context.testowy = "aaa"
  context.numer = 6
  return (
    <div>

      <h1>{context.testowy}</h1>
      <h1>{context.numer}</h1>
      <Button
        onClick={() => {
          context.setTestowy("bbb")
          context.testowy = "ccc"
          console.log("App ->  context.testowy ", context.numer)
          context.numer++

        }}
      >
        ddd
      </Button>
    </div>
  );

})

export default App;
