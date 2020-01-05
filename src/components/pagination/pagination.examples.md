### Examples

#### Basic
```jsx
<Pagination page={1} totalPages={20} onChange={p => console.log(p)}/>
```


#### Data size and current page setting
```jsx

const STYLE = {marginBottom: '15px'};

<div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={1} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={2} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={3} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={4} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={5} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={7} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={9} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={11} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={13} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={2} totalPages={23} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={3} totalPages={33} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={4} totalPages={50} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={5} totalPages={103} onChange={p => console.log(p)}/>
  </div>
</div>
```

#### Set page
```jsx
function PaginationExample() {
  const [page, setPage] = React.useState(1);

  return (
    <Pagination page={page} totalPages={33} onChange={p => setPage(p)}/>
  );
}

<PaginationExample />
```
