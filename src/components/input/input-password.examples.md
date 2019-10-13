### Example `<Input.Password>`

#### Basic

```jsx
function InputExample() {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <Input.Password label="Password" value={value} onChange={v => setValue(v)} />
    </div>
  );
}

<InputExample />
```
