import React from 'react';
import PropTypes from 'prop-types';

import { ALIAS } from '../variables';
import './table.scss';

const blockCssName = `${ALIAS}-table`;

const propTypes = {
  /**
   * One or more class names to be added to the root element of this component, i.e. `"class-foo class-bar"`.
   */
  className: PropTypes.string,
  /**
   * Array of column configuration
   * Each column must has the id (the attribute's name of data)
   */
  columnSettings: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.node,
      width: PropTypes.number,
      /**
       * `({value, row}) => {}`
       */
      render: PropTypes.func,
    })
  ),
  /**
   * Array of data to display
   * Each data item must contain the unique attribute `id`
   *
   * Example:
   *
   * ```json
   * {
   *     "id": "1111-xxxx-xxxx-xxxx",
   *     "name": "Item Name 1",
   *     "attribute_1": "value 1"
   *     ...
   * }
   * ```
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ).isRequired,
  /**
   * The string of unique key of row data
   */
  rowId: PropTypes.string,
  /**
   * A callback function that is triggered when row clicked
   *
   * ```(rowData) => {}```
   */
  onRowClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  columnSettings: [],
  data: [],
  rowId: 'id',
  onRowClick: null,
};

/* eslint-disable max-len */
/**
 * A table displays rows of data.
 *
 * `<Table>` won't manage or control the data itself. Grid functionality or its part is controlled externally like: sorting, filtering, pagination. By passing the props.
 */
/* eslint-enable max-len */
function Table(props) {
  const renderColgroup = props => {
    const { columnSettings } = props;
    const col = [];
    for (const c of columnSettings) {
      const colStyle = {};
      if (c.width) colStyle.width = c.width;
      col.push(<col key={`col-${c.id}`} style={colStyle} />);
    }
    return <colgroup>{col}</colgroup>;
  };

  const renderThead = props => {
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
  };

  const renderTbody = props => {
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

  const { className } = props;

  const tableCssClassList = [blockCssName];
  if (className) tableCssClassList.push(className);

  return (
    <table className={tableCssClassList.join(' ')}>
      {renderColgroup({ ...props })}
      {renderThead({ ...props })}
      {renderTbody({ ...props })}
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
