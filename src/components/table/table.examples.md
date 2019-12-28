### Examples

#### Basic

Minimal setup for `<Table />`

```jsx
const gridData = [
  {
    id: '1000-00xx',
    name: 'AAA',
    date: '2019-12-31'
  },
  {
    id: '2000-00xx',
    name: 'BBB',
    date: '2019-04-14'
  },
  {
    id: '3000-00xx',
    name: 'CCC',
    date: '2019-08-03'
  }
];

const gridColumnSettings = [
  { id: 'id' },
  { id: 'name' },
  { id: 'date' }
];

<Table data={gridData} columnSettings={gridColumnSettings}/>
```

#### Custom Header Title

Custom the table header instead of using `id`

```jsx
const gridData = [
  {
    id: '1000-00xx',
    name: 'AAA',
    date: '2019-12-31'
  },
  {
    id: '2000-00xx',
    name: 'BBB',
    date: '2019-04-14'
  },
  {
    id: '3000-00xx',
    name: 'CCC',
    date: '2019-08-03'
  }
];

const gridColumnSettings = [
  { id: 'id', title: 'Item ID' },
  { id: 'name', title: 'Name' },
  { id: 'date', title: 'Created Date' }
];

<Table data={gridData} columnSettings={gridColumnSettings}/>
```

#### Custom Column Render

Custom column render in `columnSettings`

```jsx
const gridData = [
  {
    id: '1000-00xx',
    name: 'AAA',
    date: '2019-12-31'
  },
  {
    id: '2000-00xx',
    name: 'BBB',
    date: '2019-04-14'
  },
  {
    id: '3000-00xx',
    name: 'CCC',
    date: '2019-08-03'
  }
];

const renderTitleColumn = ({value, row}) => <span>{`${row.id} - ${value}`}</span>
const renderActionColumn = ({value, row}) => <Button onClick={() => alert(`${row.id} clicked`)} size={Button.Size.Small}>View</Button>
const gridColumnSettings = [
  { id: 'name', title: 'Item', render: renderTitleColumn },
  { id: 'date', title: 'Created Date' },
  { id: 'action', title: <span />, render: renderActionColumn }
];

<Table data={gridData} columnSettings={gridColumnSettings}/>
```
