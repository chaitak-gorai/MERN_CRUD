import Link from 'next/link'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const Nav = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link href='/create'>
        <Button variant='primary' style={{ margin: '20px' }}>
          Create
        </Button>
      </Link>
      <Link href='/read'>
        <Button variant='success' style={{ margin: '20px' }}>
          Read
        </Button>
      </Link>
      <Link href='/update'>
        <Button variant='warning' style={{ margin: '20px' }}>
          Update
        </Button>
      </Link>
      <Link href='/delete'>
        <Button variant='danger' style={{ margin: '20px' }}>
          Delete
        </Button>
      </Link>
    </Container>
  )
}

export default Nav
