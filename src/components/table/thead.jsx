import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  columnSettings: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.node,
      width: PropTypes.number,
      render: PropTypes.func,
    })
  ),
};

const defaultProps = {};

function THead(props) {
  const { columnSettings } = props;
  const th = [];
  for (const c of columnSettings) {
    const headerText = c.title ? c.title : c.id;
    th.push(<th key={`th-${c.id}`}>{headerText}</th>);
  }
  return (
    <thead>
      <tr>{th}</tr>
    </thead>
  );
}

THead.propTypes = propTypes;
THead.defaultProps = defaultProps;

export default THead;
