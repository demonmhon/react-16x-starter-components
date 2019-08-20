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


#### Disabled and Read-Only

```jsx
<Input label="Email" value="user1.email@domain.com" disabled />
<Input label="Email" value="user2.email@domain.com" readOnly />
```
