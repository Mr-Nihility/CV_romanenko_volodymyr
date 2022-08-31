import React from 'react';
import style from './Cover.module.css';

export const Cover = React.forwardRef((props, ref) => {
  return (
    <div className={style.wrapper} ref={ref}>
      <h1 className={style.title}>Volodymyr Romanenko</h1>
    </div>
  );
});
