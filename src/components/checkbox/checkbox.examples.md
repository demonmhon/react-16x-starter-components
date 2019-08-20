### Examples

#### Basic

```jsx
<Checkbox>I agree to the Privacy Policy</Checkbox>
<Checkbox>Sign up for newsletters</Checkbox>
```


#### Checked

```jsx
<Checkbox checked>Sign up for newsletters</Checkbox>
```


#### Disabled

```jsx
<Checkbox disabled>Sign up for newsletters</Checkbox>
```


#### Long label

```jsx
<Checkbox checked>
Ut ut ut suscipit dignissimos quia dolorem quibusdam. Repudiandae ut nihil ut dolor. Aut blanditiis consectetur nobis neque qui. Pariatur odio doloremque aut numquam fugiat dolores enim magnam quia. Pariatur necessitatibus maxime quia id distinctio quia blanditiis eveniet aut.
</Checkbox>
```


#### Checked state

```jsx
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
  <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
    Sign up for newsletters
  </Checkbox>
  )
}

<CheckboxExample />
```
