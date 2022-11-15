import { useNavigate } from "react-router-dom"
import { Alocados } from "../../components/alocados/alocados"
import { Button } from "../../components/button/style"
import { Header } from "../../components/header/Header"
import { Heading } from "../../components/heading/Heading"
import { AlocadosMock } from "../../mocks/alocados"
import { Container } from "./style"

export const Control = () => { 
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Container>
                <Button size="small" onClick={() => navigate('/admin/nova-locacao')}>
                    Registrar nova locação
                </Button>
                <Heading text="Livros Alocados" h2 color="white"/>
                <Alocados Lista={AlocadosMock} />
            </Container>
        </>
    )
}