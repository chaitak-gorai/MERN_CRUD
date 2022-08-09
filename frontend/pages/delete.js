import React, { useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/router'

const Del = () => {
  const [names, setNames] = React.useState([])
  const nameRef = useRef()
  const router = useRouter()
  useEffect(() => {
    axios
      .get('http://localhost:5000/read')
      .then((res) => {
        console.log(res.data)
        setNames(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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

      {names.map((name) => {
        return (
          <p key={name._id}>
            <li ref={nameRef}>{name.name}</li>
            <Button
              type='submit'
              variant='primary'
              onClick={async () => {
                await axios.post(
                  'http://localhost:5000/delete',
                  {
                    id: name._id,
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                )
                router.reload(window.location.pathname)
              }}
            >
              Delete
            </Button>
          </p>
        )
      })}
    </Container>
  )
}

export default Del
