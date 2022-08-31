import { Cover } from 'components/Cover/Cover';
import { Page } from 'components/Page/Page';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import style from './Book.module.css';

export default function Book() {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  let flipBook = useRef();

  useEffect(() => {
    if (!flipBook.current) {
      return;
    }
    console.log(flipBook.current.pageFlip());
    // setTotalPage(flipBook.current.pageFlip().getPageCount());
  }, [setTotalPage, flipBook]);

  const nextButtonClick = () => {
    console.log('nextButtonClick');
    flipBook.current.pageFlip().turnToNextPage();
  };

  const prevButtonClick = () => {
    console.log('prevButtonClick');
    flipBook.current.pageFlip().turnToPrevPage();
  };

  const onPage = e => {
    console.log(e);
    setPage(e.data);
  };

  return (
    <div>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className={style.cover_wrap}
        ref={flipBook}
      >
        <Cover />
        <Page number="1">Page text</Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
      </HTMLFlipBook>
      <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          [<span>{page}</span> of
          <span>{totalPage}</span>]
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
