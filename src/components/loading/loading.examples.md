### Examples

Basic inline

```jsx
<div>
  <p><Loading show />Quae aut quo quibusdam itaque repellat fuga dignissimos consequatur. Dicta quas dicta quam exercitationem dolores nisi. Minima dolorem excepturi sint consectetur quod architecto. At fugit ut et nobis omnis sed quae qui officia. Autem amet et exercitationem dolore.</p>
</div>
```



Basic by wrap the element

```jsx
class LoadingExample extends React.Component {
  constructor(props) {
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ isLoading: !this.state.isLoading })}>Toggle Loading</Button>
        <Loading show={this.state.isLoading}>
          <div style={{height: '200px', width: '100%'}}>
            <p>Quae aut quo quibusdam itaque repellat fuga dignissimos consequatur. Dicta quas dicta quam exercitationem dolores nisi. Minima dolorem excepturi sint consectetur quod architecto. At fugit ut et nobis omnis sed quae qui officia. Autem amet et exercitationem dolore.</p>
          </div>
        </Loading>
      </div>
    );
  }
}

<LoadingExample />
```
