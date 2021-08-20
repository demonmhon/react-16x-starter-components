import React from 'react';

import Table from '../components/table';
import Button from '../components/button';

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {},
};

export const basic = () => {
  const gridData = [
    {
      id: '1000-00xx',
      name: 'AAA',
      date: '2019-12-31',
    },
    {
      id: '2000-00xx',
      name: 'BBB',
      date: '2019-04-14',
    },
    {
      id: '3000-00xx',
      name: 'CCC',
      date: '2019-08-03',
    },
  ];

  const gridColumnSettings = [{ id: 'id' }, { id: 'name' }, { id: 'date' }];

  return <Table data={gridData} columnSettings={gridColumnSettings} />;
};

export const customColumn = () => {
  const tableData = [
    {
      id: '1000-00xx',
      name: 'AAA',
      date: '2019-12-31',
    },
    {
      id: '2000-00xx',
      name: 'BBB',
      date: '2019-04-14',
    },
    {
      id: '3000-00xx',
      name: 'CCC',
      date: '2019-08-03',
    },
  ];

  const renderTitleColumn = ({ value, row }) => (
    <span>{`${row.id} - ${value}`}</span>
  );
  const renderActionColumn = ({ row }) => (
    <Button
      onClick={() => alert(`${row.id} clicked`)}
      size={Button.Size.ExtraSmall}
    >
      View
    </Button>
  );
  const gridColumnSettings = [
    { id: 'name', title: 'Item', render: renderTitleColumn },
    { id: 'date', title: 'Created Date' },
    { id: 'action', title: <span />, render: renderActionColumn },
  ];

  return <Table data={tableData} columnSettings={gridColumnSettings} />;
};
