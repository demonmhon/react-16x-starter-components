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
    <Pagination page={1} totalPages={3} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={1} totalPages={13} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={3} totalPages={23} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={2} totalPages={33} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={2} totalPages={50} onChange={p => console.log(p)}/>
  </div>
  <div style={STYLE}>
    <Pagination page={2} totalPages={103} onChange={p => console.log(p)}/>
  </div>
</div>
```

#### Set page
```jsx
class PaginationExample extends React.Component {
  constructor(props) {
    this.state = {
      page: 1
    };
  }

  render() {
    return (
      <Pagination page={this.state.page} totalPages={20} onChange={p => this.setState({page: p})}/>
    );
  }
}

<PaginationExample />
```
