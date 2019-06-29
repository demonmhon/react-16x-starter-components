### Examples

#### Basic

Toggle `<Dialog />` with button

```jsx
class DialogExample extends React.Component {
  constructor(props) {
    this.state = {
      isDialogOpen: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isDialogOpen: true })} />
        <Dialog show={this.state.isDialogOpen} onClose={() => this.setState({ isDialogOpen: false })}>
          <div style={{padding: '0.5rem 1rem'}}>
            <p>Dialog content</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

<DialogExample />
```


#### Centered

```jsx
class DialogExample extends React.Component {
  constructor(props) {
    this.state = {
      isDialogOpen: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isDialogOpen: true })} />
        <Dialog centered show={this.state.isDialogOpen} onClose={() => this.setState({ isDialogOpen: false })}>
          <div style={{padding: '0.5rem 1rem'}}>
            <p>Dialog content</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

<DialogExample />
```


#### Full Screen

```jsx
class DialogExample extends React.Component {
  constructor(props) {
    this.state = {
      isDialogOpen: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isDialogOpen: true })} />
        <Dialog fullScreen show={this.state.isDialogOpen} onClose={() => this.setState({ isDialogOpen: false })}>
          <div style={{padding: '0.5rem 1rem'}}>
            <p>Dialog content</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

<DialogExample />
```


#### Modal

```jsx
class DialogExample extends React.Component {
  constructor(props) {
    this.state = {
      isDialogOpen: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isDialogOpen: true })} />
        <Dialog modal show={this.state.isDialogOpen} onClose={() => this.setState({ isDialogOpen: false })}>
          <div style={{padding: '0.5rem 1rem'}}>
            <p>Dialog content</p>
            <Button onClick={() => this.setState({ isDialogOpen: false })} >Close Modal</Button>
          </div>
        </Dialog>
      </div>
    );
  }
}

<DialogExample />
```
