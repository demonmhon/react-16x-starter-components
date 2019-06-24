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
       * ```
       * ({value, rowData}) => {}
       * ```
       */
      render: PropTypes.func,
    })
  ),
  /**
   * Array of data to display
   * Each data item must contain the unique attribute `id`
   *
   * Example:
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
   * A callback function that is triggered when row clicked
   *
   * ```jsx
   * (rowData) => {}
   * ```
   *
   * @param {object} rowData - The object of clicked row.
   */
  onRowClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  columnSettings: [],
  data: [],
  onRowClick: null,
};

/* eslint-disable max-len */
/**
 * A table displays rows of data.
 *
 * `<Table>` won't manage or control the data itself. Grid functionality or its part is controlled externally like: sorting, filtering, pagination. By passing the props.
 */
/* eslint-enable max-len */
class Table extends React.Component {
  constructor(props) {
    super(props);

    this.renderColgroup = this.renderColgroup.bind(this);
    this.renderThead = this.renderThead.bind(this);
    this.renderTbody = this.renderTbody.bind(this);
  }

  renderColgroup(props) {
    const { columnSettings } = props;
    const col = [];
    for (const c of columnSettings) {
      const colStyle = {};
      if (c.width) colStyle.width = c.width;
      col.push(<col key={`col-${c.id}`} style={colStyle} />);
    }
    return <colgroup>{col}</colgroup>;
  }

  renderThead(props) {
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

  renderTbody(props) {
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
        td.push(<td key={`tr-${trId}-td-${c.id}`}>{renderValue}</td>);
      }
      tbodyTr.push(<tr key={`tr-${trId}`}>{td}</tr>);
    }
    return <tbody>{tbodyTr}</tbody>;
  }

  render() {
    const props = this.props;
    const { className } = props;

    const tableCssClassList = [blockCssName];
    if (className) tableCssClassList.push(className);

    return (
      <table className={tableCssClassList.join(' ')}>
        {this.renderColgroup({ ...props })}
        {this.renderThead({ ...props })}
        {this.renderTbody({ ...props })}
      </table>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
