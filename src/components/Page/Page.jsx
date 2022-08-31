import React from 'react';
import style from './Page.module.css';
//-------------------------------------------------//
export const Page = React.forwardRef((props, ref) => {
  return (
    <div className={style.wrapper} ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});
