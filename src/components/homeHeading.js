import React from 'react'
import {Button,Container,Header,Icon} from 'semantic-ui-react'


const HomepageHeading = () => (
    <Container text>
      <Header
        as='h1'
        content='React + OpenDota'
        inverted
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '2em',
        }}
      />
      <Header
        as='h2'
        content='Aplicação React usando OpenDota Api.'
        inverted
        style={{
          fontSize: '1.2em',
          fontWeight: 'normal',
          marginTop: '1.5em',
          marginBottom: '2em'
        }}
      />

      <Button primary size='huge' as='a' href="/search">
        Vamos ver
        <Icon name='right arrow' />
      </Button>
    </Container>
  )

  export default HomepageHeading