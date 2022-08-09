import Button from 'react-bootstrap/Button'
import React, { useRef } from 'react'
import Nav from '../components/Nav'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { useRouter } from 'next/router'
const create = () => {
  const nameRef = useRef()
  const router = useRouter()
  const submitHandler = (e) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    e.preventDefault()
    axios.post(
      'https://merncrud1414.herokuapp.com/create',
      {
        name: nameRef.current.value,
      },
      config
    )
    router.reload(window.location.pathname)
    router.push('/read')
  }
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        flexDirection: 'column',
      }}
    >
      <Nav />
      <input type='text' placeholder='Enter your name' ref={nameRef} />
      <Button type='submit' variant='primary' onClick={submitHandler}>
        Submit
      </Button>
    </Container>
  )
}

export default create
