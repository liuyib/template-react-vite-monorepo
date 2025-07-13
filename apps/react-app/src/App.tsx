import { ViteIcon } from '@repo/icons';
import { Button, ConfigProvider } from '@repo/ui';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello <ViteIcon />
      <ConfigProvider
        theme={{
          hashed: true,
          cssVar: true,
          token: {
            colorPrimary: 'red',
          },
        }}
      >
        <Button onClick={() => setCount((s) => s + 1)}>Click me, {count}</Button>
      </ConfigProvider>
    </>
  );
}

export default App;
