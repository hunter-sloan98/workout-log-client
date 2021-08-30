import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4500/user/signup', {
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      props.updateToken(data.sessionToken)
    })
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input type='password' onChange={(e) => setPassword(e.target.value)} name='password' value={password} required />
        </FormGroup>
        <Button type='submit'>Sign Up</Button>
      </Form>
    </div>
  )
}

export default Signup;