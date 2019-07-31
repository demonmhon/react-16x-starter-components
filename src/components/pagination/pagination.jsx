/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import StringHelper from '../../utils/string-helper';
import './pagination.scss';

const blockCssName = `${ALIAS}-pagination`;

const propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * The current page number.
   */
  page: PropTypes.number,
  /**
   * The total pages.
   */
  totalPages: PropTypes.number,
  /**
   * Hide the previous and next button if set to true.
   */
  showControlButton: PropTypes.bool,
  /**
   * Element used for previous button. Use empty string to hide the text.
   */
  previousText: PropTypes.node,
  /**
   * Element used for next button. Use empty string to hide the text.
   */
  nextText: PropTypes.node,
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
  previousText: 'Previous',
  nextText: 'Next',
  onChange() {},
};

const PAGE_BUFFER_SIZE = 2;

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      pageCount: this.getPageCount(props.total, props.pageSize),
    };

    this.getPageCount = this.getPageCount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getFirstPage = this.getFirstPage.bind(this);
    this.getLastPage = this.getLastPage.bind(this);
    this.getPage = this.getPage.bind(this);
    this.getPageItemRange = this.getPageItemRange.bind(this);
    this.getJump = this.getJump.bind(this);
    this.getControls = this.getControls.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentPage, pageSize, total } = nextProps;
    this.setState({
      currentPage: currentPage,
      pageCount: this.getPageCount(total, pageSize),
    });
  }

  getPageCount(total, pageSize) {
    if (total > 0 && pageSize > 0) {
      return Math.ceil(total / pageSize);
    }
    return 0;
  }

  onChange(page) {
    const { currentPage, pageCount } = this.state;
    // Will trigger if page in valid and not a current page
    if (page > 0 && page <= pageCount && page !== currentPage) {
      this.setState({
        currentPage: page,
      });
      this.props.onChange(page);
    }
    return false;
  }

  getFirstPage() {
    const { currentPage } = this.state;
    const currentCssClass = currentPage === 1 ? 'current' : '';
    return (
      <li key="first" className={[`${blockCssName}__list-item`, currentCssClass].join(' ')}>
        <a onClick={() => this.onChange(1)}>1</a>
      </li>
    );
  }

  getLastPage() {
    const { currentPage, pageCount } = this.state;
    const currentCssClass = currentPage === pageCount ? 'current' : '';
    return (
      <li key="last" className={[`${blockCssName}__list-item`, currentCssClass].join(' ')}>
        <a onClick={() => this.onChange(pageCount)}>
          {StringHelper.formatNumber(pageCount)}
        </a>
      </li>
    );
  }

  getPage(p) {
    const { currentPage } = this.state;
    const currentCssClass = currentPage === p ? 'current' : '';
    return (
      <li key={p} className={[`${blockCssName}__list-item`, currentCssClass].join(' ')}>
        <a onClick={() => this.onChange(p)}>{StringHelper.formatNumber(p)}</a>
      </li>
    );
  }

  getPageItemRange() {
    const { currentPage, pageCount } = this.state;
    const pageItems = [];

    // Append the page after current page
    let pageTo = Math.min(pageCount, currentPage + PAGE_BUFFER_SIZE);
    // Calculate if the range of the appended page is equal to buffer
    const bufferAfterLeft = PAGE_BUFFER_SIZE - (pageTo - currentPage);
    // Prepend the page before from the left buffer
    const pageFrom = Math.max(
      1,
      currentPage - (PAGE_BUFFER_SIZE + bufferAfterLeft)
    );
    // If still buffer left, re-calculate the page after current page again
    const bufferBeforeLeft = PAGE_BUFFER_SIZE - (currentPage - pageFrom);
    if (bufferBeforeLeft && pageTo < pageCount) {
      pageTo = Math.min(pageCount, pageTo + bufferBeforeLeft);
    }

    // Make a list of pages
    for (let p = pageFrom; p <= pageTo; p = p + 1) {
      pageItems.push(this.getPage(p));
    }

    if (pageFrom > 1) {
      if (pageFrom > 2) {
        pageItems.unshift(this.getJump('before'));
      }
      pageItems.unshift(this.getFirstPage());
    }

    if (pageTo < pageCount) {
      if (pageTo + 1 < pageCount) {
        pageItems.push(this.getJump('after'));
      }
      pageItems.push(this.getLastPage());
    }

    return pageItems;
  }

  getJump(type) {
    return (
      <li key={`jump-${type}`} className={[`${blockCssName}__list-item`, 'jump'].join(' ')}>
        <a>...</a>
      </li>
    );
  }

  getControls(type) {
    const { showControlButton, previousText, nextText } = this.props;
    const { currentPage, pageCount } = this.state;
    const text = type === 'prev' ? previousText : nextText;
    const toPage = type === 'prev' ? currentPage - 1 : currentPage + 1;
    const disabledCssClass = toPage <= 0 || toPage > pageCount ? `${blockCssName}__list-item--disabled` : '';
    const controlPageCssClass = [`${blockCssName}__list-item`, disabledCssClass];
    if (type === 'prev') {
      controlPageCssClass.push('prev');
    } else {
      controlPageCssClass.push('next');
    }
    return showControlButton ? (
      <li key={type} className={controlPageCssClass.join(' ')}>
        <a onClick={() => this.onChange(toPage)} disabled={(disabledCssClass !== '')}>
          <span>{text}</span>
        </a>
      </li>
    ) : null;
  }

  render() {
    const { className } = this.props;

    const paginationCssClassList = [blockCssName];
    if (className) {
      paginationCssClassList.push(className);
    }

    const pageItems = [
      this.getControls('prev'),
      this.getPageItemRange(),
      this.getControls('next'),
    ];

    return (
      <div className={paginationCssClassList.join(' ')}>
        <div className={`${blockCssName}__container`}>
          <ul className={`${blockCssName}__list`}>{pageItems}</ul>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
