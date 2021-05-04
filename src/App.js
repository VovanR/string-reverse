import {useState, useCallback} from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState('')

  const handleChange = useCallback(({target: {value}}) => {
    setValue(value)
  }, [])

  return (
    <div className="App">
      <textarea
        value={value}
        onChange={handleChange}
      />

      <textarea
        value={value.split('').reverse('').join('')}
        readOnly={true}
      />
    </div>
  );
}

export default App;
