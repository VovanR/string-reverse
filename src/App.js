import {useState, useCallback} from 'react'
import './App.css';

/**
 * @param {string} string
 * @returns {string}
 */
function reverseString(string) {
  return string.split('').reverse('').join('')
}

const PLACEHOLDER_MESSAGE = 'Hello world!'
const RESULT_PLACEHOLDER_MESSAGE = reverseString(PLACEHOLDER_MESSAGE)

function App() {
  const [value, setValue] = useState('')

  const handleChange = useCallback(({target: {value}}) => {
    setValue(value)
  }, [])

  return (
    <div className="App">
      <textarea
        value={value}
        placeholder={PLACEHOLDER_MESSAGE}
        autoFocus={true}
        onChange={handleChange}
      />

      <textarea
        value={reverseString(value)}
        placeholder={RESULT_PLACEHOLDER_MESSAGE}
        readOnly={true}
      />
    </div>
  );
}

export default App;
