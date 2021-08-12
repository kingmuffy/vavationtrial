import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h1>copyright &copy; 2021</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
