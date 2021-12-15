import { withRouter } from "react-router-dom"
import { Container, Spinner, CardGroup, Row, Col } from "reactstrap";
import CardImage from "../../components/card/cardImage.component";

const Todos = () => {
    return <Container>

        <CardGroup>
            <Row >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                        return <Col lg={3} gap={2}>
                            <CardImage />
                        </Col>
                    })
                }
            </Row>
        </CardGroup>
    </Container >
}

export default withRouter(Todos);
