import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './loading.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component.
   */
  children: PropTypes.node,
  /**
   * Show the loading if set to true
   */
  show: PropTypes.bool,
};

const defaultProps = {
  children: null,
  show: true,
};

function Loading(props) {
  const { children, show } = props;
  const loadingCssPrefix = `${ALIAS}-loading`;
  const spinSvgAnimate = (
    <svg className={`${loadingCssPrefix}__indicator`} viewBox="0 0 50 50">
      <circle
        className={`${loadingCssPrefix}__indicator-path`}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );

  const loadingCssClassList = [loadingCssPrefix];
  if (children) loadingCssClassList.push(`${loadingCssPrefix}--has-content`);
  if (show) loadingCssClassList.push(`${loadingCssPrefix}--show`);
  return (
    <span className={loadingCssClassList.join(' ')}>
      {props.children}
      <span className={`${loadingCssPrefix}__mask`} />
      {spinSvgAnimate}
    </span>
  );
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
