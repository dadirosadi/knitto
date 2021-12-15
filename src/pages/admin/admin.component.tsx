import { withRouter } from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import TableCustom from "../../components/table/table.component";
import Pagination from "../../components/pagination/pagination.component";

const Todos = () => {
    return <Container>
        <Row >
            <Col>
                <TableCustom />
            </Col>
        </Row>
        <Row>
            <Col>
                <Pagination />
            </Col>
        </Row>
    </Container >
}

export default withRouter(Todos);
