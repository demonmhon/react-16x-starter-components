import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rowId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ).isRequired,
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

const TBody = (props) => {
  const { rowId, data, columnSettings } = props;
  const tbodyTr = [];
  for (const row of data) {
    const trId = row[rowId];
    const td = [];
    for (const c of columnSettings) {
      const value = row[c.id] ? row[c.id] : '';
      const renderValue = !c.render
        ? value
        : c.render({ value: row[c.id], row });
      td.push(<td key={`td-${trId}-${c.id}`}>{renderValue}</td>);
    }
    tbodyTr.push(<tr key={`tr-${trId}`}>{td}</tr>);
  }
  return <tbody>{tbodyTr}</tbody>;
};

TBody.propTypes = propTypes;
TBody.defaultProps = defaultProps;

export default TBody;
