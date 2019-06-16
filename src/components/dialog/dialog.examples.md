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
          <p>Dialog content</p>
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
          <p>Dialog content</p>
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
          <p>Dialog content</p>
        </Dialog>
      </div>
    );
  }
}

<DialogExample />
```
