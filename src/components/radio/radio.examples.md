### Examples

#### Basic

```jsx
function RadioExample() {
  const [value, setValue] = React.useState('b');

  return (
    <Radio.Group value={value} onChange={value => setValue(value)}>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
      <Radio value="d">Option D</Radio>
    </Radio.Group>
  )
}

<RadioExample />
```

#### Disabled all option
```jsx
function RadioExample() {
  const [value, setValue] = React.useState('');

  return (
    <Radio.Group value={value} onChange={value => setValue(value)} disabled>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
      <Radio value="d">Option D</Radio>
    </Radio.Group>
  )
}

<RadioExample />
```


#### Disabled some option
```jsx
function RadioExample() {
  const [value, setValue] = React.useState('');

  return (
    <Radio.Group value={value} onChange={value => setValue(value)}>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c" disabled>Option C</Radio>
      <Radio value="d" disabled>Option D</Radio>
    </Radio.Group>
  )
}

<RadioExample />
```
