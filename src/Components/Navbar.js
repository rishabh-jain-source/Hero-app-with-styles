import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const myNavBar = () => (
  <Navbar bg="dark" variant="dark" >
            <Navbar.Brand >
            <img
                alt=""
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Link to="/"><Navbar.Brand className='my-navbar-brand'>TourofHeroes</Navbar.Brand></Link>
        </Navbar>
)
  export default myNavBar