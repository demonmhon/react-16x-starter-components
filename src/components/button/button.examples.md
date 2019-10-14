### Examples

#### Basic

```jsx
<Button />
```

#### Types

```jsx
<Button/>
<Button type={Button.Type.Primary}>Primary</Button>
<Button type={Button.Type.Secondary}>Secondary</Button>
```

#### Sized

```jsx
<Button size={Button.Size.ExtraSmall}>Extra Small</Button>
<Button size={Button.Size.Small}>Small</Button>
<Button>Medium</Button>
<Button size={Button.Size.Large}>Large</Button>
```


#### CSS Classes

```jsx
<Button className="the-first-additional-class the-second-additional-class" />
```

#### Disabled

```jsx
<Button disabled />
<Button disabled type={Button.Type.Primary}>Primary</Button>
<Button disabled type={Button.Type.Secondary}>Secondary</Button>
```

#### Click Event

```jsx
<Button onClick={e => alert('Button clicked')} />
```

