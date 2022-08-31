import { Cover } from 'components/Cover/Cover';
import { Page } from 'components/Page/Page';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

export default function Book() {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  // const [flipBook, setFlipBook] = useState(null);

  let flipBook = useRef();

  useEffect(() => {
    if (!flipBook) {
      return;
    }
    console.log(flipBook.current.pageFlip());
    setTotalPage(flipBook.current.pageFlip().getPageCount());
  }, [setTotalPage, flipBook]);

  const nextButtonClick = () => {
    console.log('nextButtonClick');
    flipBook.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    console.log('prevButtonClick');
    flipBook.current.pageFlip().flipPrev();
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
        maxWidth={800}
        minHeight={400}
        maxHeight={733}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
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
