import { ViteIcon } from '@repo/icons';
import { Button } from '@repo/ui';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello <ViteIcon />
      <Button onClick={() => setCount((s) => s + 1)}>Click me, {count}</Button>
    </>
  );
}

export default App;
