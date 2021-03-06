### Examples

#### Basic

Toggle `<Dialog />` with button

```jsx
function DialogExample() {
   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

   return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)} />
      <Dialog show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{padding: '0.5rem 1rem'}}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </div>
  );
}

<DialogExample />
```


#### Centered

```jsx
function DialogExample() {
   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

   return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)} />
      <Dialog centered show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{padding: '0.5rem 1rem'}}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </div>
  );
}

<DialogExample />
```


#### Full Screen

```jsx
function DialogExample() {
   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

   return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)} />
      <Dialog fullScreen show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{padding: '0.5rem 1rem'}}>
          <p>Dialog content</p>
        </div>
      </Dialog>
    </div>
  );
}

<DialogExample />
```


#### Modal

```jsx
function DialogExample() {
   const [isDialogOpen, setIsDialogOpen] = React.useState(false);

   return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)} />
      <Dialog modal show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div style={{padding: '0.5rem 1rem'}}>
          <p>Dialog content</p>
          <Button onClick={() => setIsDialogOpen(false)}>Close Modal</Button>
        </div>
      </Dialog>
    </div>
  );
}

<DialogExample />
```
