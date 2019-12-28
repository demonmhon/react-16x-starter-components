### Examples

#### Basic

```jsx
function RadioExample() {
  const [value, setValue] = React.useState('b');
  const [label, setLabel] = React.useState('Option B');

  return (
    <>
      <Radio.Group 
        value={value}
        onChange={option => {
          setValue(option.value);
          setLabel(option.label);
        }}>
        <Radio value="a" label={'Option A'} />
        <Radio value="b" label={'Option B'} />
        <Radio value="c" label={'Option C'} />
        <Radio value="d" label={'Option D'} />
      </Radio.Group>
      <p style={{fontSize: '0.75rem', opacity: 0.6}}>{label}, {value} has been selected</p>
    </>
  )
}

<RadioExample />
```

#### Disabled all option
```jsx
function RadioExample() {
  const [value, setValue] = React.useState('c');

  return (
    <Radio.Group value={value} onChange={option => setValue(option.value)} disabled>
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
    <Radio.Group value={value} onChange={option => setValue(option.value)}>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c" disabled>Option C</Radio>
      <Radio value="d" disabled>Option D</Radio>
    </Radio.Group>
  )
}

<RadioExample />
```
