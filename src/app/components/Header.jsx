import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export default function Header({pendingTasks}){
    return(
        <header>
            <Container>
                <Row>
                    <Col><h1>Lista de tareas</h1></Col>
                    <Col><h3>Tareas pendientes: {pendingTasks}</h3></Col>
                </Row>
            </Container>
        </header>
    )
}