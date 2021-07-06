import React from "react";
import {Card, Button} from "react-bootstrap";

function SavedBooks(props) {
    return (
    <Card>
        <Card.Header>
            <h3 className="d-inline-flex mr-3">{props.title}</h3>
            <p className="d-inline-flex mt-2">by {props.authors.join(' , ')}</p>
            <Button className="float-right" size="md" variant="primary" onClick={props.handleDelete}>Delete</Button>
            <Button className="float-right mr-1" size="md" variant="primary" href={props.link} target={"_blank"}>View</Button>
        </Card.Header>
        <Card.Body className="d-flex">
            <img style={{height: "100%", float: "left", marginRight: "10px"}} src={props.thumbnail} alt={props.title}/>
            <p>{props.description}</p>
        </Card.Body>
    </Card>
    )
}

export default SavedBooks;