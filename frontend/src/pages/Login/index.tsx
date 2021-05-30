import { InputText } from 'primereact/inputtext'
import { CardLogin } from './styles'
import { Button } from 'primereact/button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { FormEvent, useRef, useState } from 'react'
import { Toast } from 'primereact/toast'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toastRef = useRef<any>()

  const history = useHistory()

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    try {
      const { data } = await axios.post('http://localhost:3333/login', {
        email,
        password
      })
      history.push('/dashboard')
    } catch (error) {
      toastRef.current.show({
        severity: 'error',
        summary: 'Erro!',
        detail: error.response.data.message
      })
    }
  }

  return (
    <CardLogin>
      <h1>Login</h1>
      <Toast ref={toastRef} />
      <form>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="password">Senha</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button label="Login" onClick={handleLogin} />
      </form>
    </CardLogin>
  )
}
