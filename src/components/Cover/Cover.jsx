import React from 'react';
import style from './Cover.module.css';

export const Cover = React.forwardRef((props, ref) => {
  return (
    <div className={style.wrapper} ref={ref}>
      Cover title
    </div>
  );
});
