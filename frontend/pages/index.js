import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from '../components/Nav'
export default function Home() {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <Nav />
    </Container>
  )
}
