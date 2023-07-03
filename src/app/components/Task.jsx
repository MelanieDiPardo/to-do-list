import { Container } from "react-bootstrap"

export default function Task({title, number, completed, onClick}){
    return(
        <Container onClick={onClick} className={`rounded-1 border border-dark border-1' ${completed ? 'bg-warning-subtle' : 'bg-warning'}`}>
            <h5>#{number}</h5>
            <h2 className={`${completed ? 'text-decoration-line-through' : ''}`}>{title}</h2>
        </Container>
    )
}