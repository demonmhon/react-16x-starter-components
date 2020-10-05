### Examples `<Input>`

#### Basic

```jsx
<Input />
```


#### Placeholder & Label

```jsx
<Input placeholder="Name" label="Name" />
```


#### Value / Default Value

```jsx
<Input label="Email" value="user.email@domain.com" />
```


#### Set value

```jsx
function InputExample() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Button onClick={() => setValue('1234-56-7890')}>Set number to input</Button>
      <div style={{height: '15px'}} />
      <Input label="Number" value={value} />
    </>
  );
}

<InputExample />
```

#### onChange

```jsx
function InputExample() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Input label="Name" value={value} onChange={v => setValue(v)} />
      <p style={{fontSize: '0.75rem', opacity: 0.6}}>Input length: {value.length} </p>
    </>
  );
}

<InputExample />
```


#### Disabled and Read-Only

```jsx
<Input label="Email (disabled)" value="user1.email@domain.com" disabled />
<Input label="Email (read-only)" value="user2.email@domain.com" readOnly />
```


### With Message Block

```jsx
function InputExample() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Input label="Textfield" value={value} onChange={v => setValue(v)} />
      {value.length > 0 ? (<MessageBlock>Input: {value.length} length</MessageBlock>) : <MessageBlock type={MessageBlock.Type.Error}>Please input this field</MessageBlock>}
    </>
  );
}

<InputExample />
```
