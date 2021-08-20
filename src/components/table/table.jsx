import React from 'react';
import PropTypes from 'prop-types';

import { namespace as ns } from '../../utils/theme';
import ColGroup from './colgroup';
import THead from './thead';
import TBody from './tbody';
import './table.scss';

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
  rowId: PropTypes.string.isRequired,
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
const Table = (props) => {
  const { className, columnSettings } = props;
  const renderColgroup = () => <ColGroup columnSettings={columnSettings} />;
  const renderThead = () => <THead columnSettings={columnSettings} />;
  const renderTbody = () => <TBody {...props} />;

  const tableCssClassList = [`${ns}-table`];
  if (className) tableCssClassList.push(className);

  return (
    <table className={tableCssClassList.join(' ')}>
      {renderColgroup()}
      {renderThead()}
      {renderTbody()}
    </table>
  );
}

Table.displayName = 'Table';
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
