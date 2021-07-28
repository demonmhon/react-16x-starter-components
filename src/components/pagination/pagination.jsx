/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../utils/string-helper';
import css from './pagination.scss';

const propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * The current page number.
   */
  page: PropTypes.number.isRequired,
  /**
   * The total pages.
   */
  totalPages: PropTypes.number.isRequired,
  /**
   * Hide the previous and next button if set to true.
   */
  showControlButton: PropTypes.bool,
  /**
   * Element used for previous button. Use empty string to hide the text.
   */
  previousEl: PropTypes.node,
  /**
   * Element used for next button. Use empty string to hide the text.
   */
  nextEl: PropTypes.node,
  /**
   * A callback function, executed when the page number is changed with any elements (page number button, previous page button and next page button)
   *
   * Click on the current page won't trigger this function.
   *
   * ```(pageNumber) => {}```
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  page: 1,
  totalPages: 1,
  showControlButton: true,
  previousEl: 'Previous',
  nextEl: 'Next',
  onChange() {},
};

const PAGE_BUFFER_SIZE = 2;

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(props.page);
  const [totalPages, setTotalPages] = useState(props.totalPages);

  useEffect(() => {
    if (props.page) {
      setCurrentPage(props.page);
    }
  });

  const onPageChange = (pageNumber) => (e) => {
    // Will trigger if page in valid and not a current page
    if (
      pageNumber > 0 &&
      pageNumber <= totalPages &&
      pageNumber !== currentPage
    ) {
      props.onChange(pageNumber);
    }
    return false;
  };

  const getFirstPage = () => {
    const currentCssClass =
      currentPage === 1 ? css['pagination__list-item--current'] : '';
    return (
      <li
        key="first"
        className={[css['pagination__list-item'], currentCssClass].join(' ')}
      >
        <button onClick={onPageChange(1)}>1</button>
      </li>
    );
  };

  const getLastPage = () => {
    const currentCssClass =
      currentPage === totalPages ? css['pagination__list-item--current'] : '';
    return (
      <li
        key="last"
        className={[css['pagination__list-item'], currentCssClass].join(' ')}
      >
        <button onClick={onPageChange(totalPages)}>
          {StringHelper.formatNumber(totalPages)}
        </button>
      </li>
    );
  };

  const getPage = (p) => {
    const currentCssClass =
      currentPage === p ? css['pagination__list-item--current'] : '';
    return (
      <li
        key={p}
        className={[
          css['pagination__list-item'],
          css['pagination__list-item--number'],
          currentCssClass,
        ].join(' ')}
      >
        <button onClick={onPageChange(p)}>
          {StringHelper.formatNumber(p)}
        </button>
      </li>
    );
  };

  const getPageItemRange = () => {
    const pageItems = [];

    // Append the page after current page
    let pageTo = Math.min(totalPages, currentPage + PAGE_BUFFER_SIZE);
    // Calculate if the range of the appended page is equal to buffer
    const bufferAfterLeft = PAGE_BUFFER_SIZE - (pageTo - currentPage);
    // Prepend the page before from the left buffer
    const pageFrom = Math.max(
      1,
      currentPage - (PAGE_BUFFER_SIZE + bufferAfterLeft)
    );
    // If still buffer left, re-calculate the page after current page again
    const bufferBeforeLeft = PAGE_BUFFER_SIZE - (currentPage - pageFrom);
    if (bufferBeforeLeft && pageTo < totalPages) {
      pageTo = Math.min(totalPages, pageTo + bufferBeforeLeft);
    }

    // Make a list of pages
    for (let p = pageFrom; p <= pageTo; p = p + 1) {
      pageItems.push(getPage(p));
    }

    if (pageFrom > 1) {
      if (pageFrom > 2) {
        pageItems.unshift(getJump('before'));
      }
      pageItems.unshift(getFirstPage());
    }

    if (pageTo < totalPages) {
      if (pageTo + 1 < totalPages) {
        pageItems.push(getJump('after'));
      }
      pageItems.push(getLastPage());
    }

    return pageItems;
  };

  const getJump = (type) => {
    return (
      <li
        key={`jump-${type}`}
        className={[
          css['pagination__list-item'],
          css['pagination__list-item--jump'],
        ].join(' ')}
      >
        <button>...</button>
      </li>
    );
  };

  const getControls = (type) => {
    const { showControlButton, previousEl, nextEl } = props;
    const text = type === 'prev' ? previousEl : nextEl;
    const toPage = type === 'prev' ? currentPage - 1 : currentPage + 1;
    const disabledCssClass =
      toPage <= 0 || toPage > totalPages
        ? css['pagination__list-item--disabled']
        : '';
    const controlPageCssClass = [
      css['pagination__list-item'],
      disabledCssClass,
    ];
    if (type === 'prev') {
      controlPageCssClass.push(css['pagination__list-item--prev']);
    } else {
      controlPageCssClass.push(css['pagination__list-item--next']);
    }
    return showControlButton ? (
      <li key={type} className={controlPageCssClass.join(' ')}>
        <button
          onClick={onPageChange(toPage)}
          disabled={disabledCssClass !== ''}
        >
          <span>{text}</span>
        </button>
      </li>
    ) : null;
  };

  const { className } = props;

  const paginationCssClassList = [css.pagination];
  if (className) paginationCssClassList.push(className);

  const pageItems = [
    getControls('prev'),
    getPageItemRange(),
    getControls('next'),
  ];

  return (
    <div className={paginationCssClassList.join(' ')}>
      <div className={css.pagination__container}>
        <ul className={css.pagination__list}>{pageItems}</ul>
      </div>
    </div>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
