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

const ColGroup = (props) => {
  const { columnSettings } = props;
  const col = [];
  for (const c of columnSettings) {
    const colStyle = {};
    if (c.width) colStyle.width = c.width;
    col.push(<col key={`col-${c.id}`} style={colStyle} />);
  }
  return <colgroup>{col}</colgroup>;
};

ColGroup.propTypes = propTypes;
ColGroup.defaultProps = defaultProps;

export default ColGroup;
