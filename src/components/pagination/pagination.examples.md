### Examples

#### Basic
```jsx
<Pagination page={1} totalPages={20} onChange={p => console.log(p)}/>
```


#### Data size and current page setting
```jsx

const STYLE = {marginBottom: 10};

<div>
  <div style={STYLE}>
    <Pagination currentPage={1} pageSize={10} total={3}/>
  </div>
  <div style={STYLE}>
    <Pagination currentPage={1} pageSize={10} total={13}/>
  </div>
  <div style={STYLE}>
    <Pagination currentPage={3} pageSize={10} total={23}/>
  </div>
  <div style={STYLE}>
    <Pagination currentPage={2} pageSize={10} total={33}/>
  </div>
  <div style={STYLE}>
    <Pagination currentPage={2} pageSize={10} total={50}/>
  </div>
  <div style={STYLE}>
    <Pagination currentPage={2} pageSize={10} total={103}/>
  </div>
</div>
```
