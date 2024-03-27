// Practice
// useState and useEffect 

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // useState example
  const [count, setCount] = useState(0);

  // useEffect example
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;

