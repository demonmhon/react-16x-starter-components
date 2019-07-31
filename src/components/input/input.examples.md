### Examples `<Input>`

#### Basic

```jsx
<Input />
```


#### Placeholder

```jsx
<Input placeholder="Name" />
```


#### Label

```jsx
<Input label="Name" />
```


#### Value

```jsx
<Input label="Email" value="user.email@domain.com" />
```


#### Set value

```jsx
class SetValue extends React.Component {
  constructor(props) {
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ value: '1234-56-7890' })}>Set number to input</Button>
        <div style={{height: '15px'}} />
        <Input label="Number" value={this.state.value} />
      </div>
    );
  }
}

<SetValue />
```


#### Disabled and Read-Only

```jsx
<Input label="Email" value="user1.email@domain.com" disabled />
<Input label="Email" value="user2.email@domain.com" readOnly />
```
