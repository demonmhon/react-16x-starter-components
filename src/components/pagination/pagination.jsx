import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
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
   * A callback function, executed when the page number is changed with any elements (page number button, previous page button and next page button)
   *
   * Click on the current page won't trigger this function.
   *
   * ```jsx
   * (pageNumber) => {}
   * ```
   *
   * @param {number} pageNumber - New page number
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  page: 1,
  totalPages: 1,
  onChange() {},
};

const PAGE_BUFFER_SIZE = 2;

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.onPageChange = this.onPageChange.bind(this);
    this.getFirstPage = this.getFirstPage.bind(this);
    this.getLastPage = this.getLastPage.bind(this);
  }

  onPageChange(pageNumber) {
    this.props.onPageChange(pageNumber);
  }

  getFirstPage() {
    return (
      <li key="first">
        <a onClick={() => this.onPageChange(1)}>1</a>
      </li>
    );
  }

  getLastPage(totalPages) {
    return (
      <li key="last">
        <a onClick={() => this.onPageChange(totalPages)}>{totalPages}</a>
      </li>
    );
  }

  render() {
    const props = this.props;
    const {
      className,
      page,
      totalPages,
      onPageChange,
      onNext,
      onPrevious,
    } = props;

    const paginationCssClassList = [blockCssName];
    if (className) paginationCssClassList.push(className);

    return (
      <div>
        {this.getFirstPage()}
        {this.getLastPage()}
      </div>
    );
  }
}

Pagination.propTypes = propTypes;

Pagination.defaultProps = defaultProps;

export default Pagination;
