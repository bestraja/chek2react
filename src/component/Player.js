import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Player({obje}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={obje.imageUrl} style={{width:'80%',height:'150px',paddingLeft:'10px',paddingTop:'8px'}} />
    <Card.Body>
      <Card.Title>Player Name</Card.Title>
      <Card.Text>
      {obje.name}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item>Age:{obje.age}</ListGroup.Item>
      <ListGroup.Item>Team:{obje.team}</ListGroup.Item>
      <ListGroup.Item>Nationality:{obje.nationality}</ListGroup.Item>
      <ListGroup.Item>JerseyNumber:{obje.jerseyNumber}</ListGroup.Item>
    </ListGroup>
   
  </Card>
  )
}

export default Player