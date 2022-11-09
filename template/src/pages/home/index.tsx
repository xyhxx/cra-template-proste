import css from './index.module.scss';

import {useClassNames} from 'react-hook-classnames';
import {FC} from 'react';
import {useCount} from '@stores';

const Home: FC = function() {
  const {count, inc, dec} = useCount();
  const [style, classNames] = useClassNames({styleSheet: css, camelTransition: '-'});

  return (
    <>
      <h1
        className={classNames(style.title, {[style.redTitle]: count > 4})}
        data-testid='title'
      >
        count is {count}
      </h1>
      <div className={style.btnGroup}>
        <button onClick={inc} data-testid='increment'>
          increment
        </button>
        <button onClick={dec} data-testid='reduce'>
          reduce
        </button>
      </div>
    </>
  );
};

export default Home;
