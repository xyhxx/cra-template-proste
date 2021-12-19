import css from './app.module.scss';

import { FC, useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={css['title']} data-testid='title'>
        count is {count}
      </h1>
      <div className={css['btn-group']}>
        <button onClick={() => setCount(val => val + 1)} data-testid='increment'>
          increment
        </button>
        <button onClick={() => setCount(val => val - 1)} data-testid='reduce'>
          reduce
        </button>
      </div>
    </>
  );
};

export default App;
