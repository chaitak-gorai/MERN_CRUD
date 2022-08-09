import React, { useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/router'
const update = () => {
  const [names, setNames] = React.useState([])
  const nameRef = useRef()
  const router = useRouter()
  useEffect(() => {
    axios
      .get('https://merncrud1414.herokuapp.com/read')
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
            <input defaultValue={name.name} ref={nameRef} />
            <Button
              type='submit'
              variant='primary'
              onClick={async () => {
                await axios.post(
                  'https://merncrud1414.herokuapp.com/update',
                  {
                    id: name._id,
                    name: nameRef.current.value,
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
              Update
            </Button>
          </p>
        )
      })}
    </Container>
  )
}
export default update
