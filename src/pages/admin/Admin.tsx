import { useState } from 'react'
import { Button } from "../../components/button/Button"
import { Input } from "../../components/input/Input"
import { Container, Form } from "./style"
import { Logo } from '../../components/logo/Logo'

export const Admin = () => {
    const [values, setValues] = useState()

    const onChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value})
    }   
    const handleSubmit = (e) => {
        e.preventDefault()
        location.href = "/admin/control"
    }
    return (
        <Container>
            <Logo />
            <Form onSubmit={handleSubmit}>
                <Input type='text' placeholder="User" onChange={onChange} name="user"/>
                <Input type='password' placeholder="password" onChange={onChange} name="pass"/>
                <Button label="Entrar"/>
            </Form>
        </Container>
    )
}