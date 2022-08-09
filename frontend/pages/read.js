import React, { useEffect } from 'react'
import Nav from '../components/Nav'

import axios from 'axios'
import Container from 'react-bootstrap/Container'
const read = () => {
  const [names, setNames] = React.useState([])
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
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.name}</li>
        })}
      </ul>
    </Container>
  )
}

export default read
