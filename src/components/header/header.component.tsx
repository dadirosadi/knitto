import { Container, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, Nav, NavItem } from "reactstrap";
import { withRouter } from "react-router-dom";

const Header = (props: any) => {
    return <Container>
        <Navbar
            color="black"
            expand="md"
            light
        >
            <NavbarBrand onClick={() => { props.history.push("/") }}>
                <h3 className="text-white">Knitto</h3>
            </NavbarBrand>
            <NavbarToggler className="bg-white" onClick={function noRefCheck() { }} />
            <Collapse navbar>
                <Nav
                    className="text-white"
                    navbar
                >
                    <NavItem >
                        <NavLink href="/" className="text-white">
                            Catalog
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/todo" className="text-white">
                            Crud Todo
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/admin" className="text-white">
                            Admin
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </Container>
}

export default withRouter(Header);