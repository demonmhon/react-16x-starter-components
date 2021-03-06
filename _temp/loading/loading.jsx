import React from 'react';
import PropTypes from 'prop-types';

import css from './loading.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.node,
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Show the loading if set to true
   */
  show: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  show: true,
};

function Loading(props) {
  const { children, className, show } = props;
  const spinSvgAnimate = (
    <svg className={css['loading__indicator']} viewBox="0 0 50 50">
      <circle
        className={css['loading__indicator-path']}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );

  const loadingCssClassList = [css.loading];
  if (children) loadingCssClassList.push(css['loading--has-content']);
  if (className) loadingCssClassList.push(className);
  if (show) loadingCssClassList.push(css['loading--show']);
  return (
    <span className={loadingCssClassList.join(' ')}>
      {props.children}
      <span className={css['loading__mask']} />
      {spinSvgAnimate}
    </span>
  );
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
