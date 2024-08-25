import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const result = await axios.post('http://localhost:3000/bfhl', parsedData);
      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Bajaj Finserv Project</h1>
        <p className="name">Parth Dedhia</p>
        <textarea
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
          placeholder='Enter JSON here'
          className="textarea"
        />
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        {response && (
          <div className="response">
            <h3>Response:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
