import { Navbar , NavItem, NavLink, Container, Nav } from 'react-bootstrap';
import './App.css';



function PageNavbar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <NavItem>
            <NavLink href={`/`}>
              Home
            </NavLink>
              <br/>
            <NavLink className='redNav' href={`/UsersPage`}>
              Users
            </NavLink>
              <br/>
            <NavLink className='blueNav' href={`/PostsPage`}>
              Posts
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default PageNavbar