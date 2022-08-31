import React from 'react';
import style from './Page.module.css';
//-------------------------------------------------//
export const Page = React.forwardRef((props, ref) => {
  return (
    <div>
      <div className={style.wrapper} ref={ref}>
        <h2 className={style.title}>Page Header</h2>
        <p>{props.children}</p>
        <p className={style.subtext}>Page number: {props.number}</p>
      </div>
    </div>
  );
});
