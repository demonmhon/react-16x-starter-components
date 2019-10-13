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
    <div>
      <Button onClick={() => setValue('1234-56-7890')}>Set number to input</Button>
      <div style={{height: '15px'}} />
      <Input label="Number" value={value} />
    </div>
  );
}

<InputExample />
```

#### onChange

```jsx
function InputExample() {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <Input label="Name" value={value} onChange={v => setValue(v)} />
      <p>Input length: {value.length} </p>
    </div>
  );
}

<InputExample />
```



#### Disabled and Read-Only

```jsx
<Input label="Email (disabled)" value="user1.email@domain.com" disabled />
<Input label="Email (read-only)" value="user2.email@domain.com" readOnly />
```
