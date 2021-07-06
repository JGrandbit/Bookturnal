import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import SearchedBooks from "../components/SearchedBooks";
import API from "../utils/API";

function Search(){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    function handleInputChange(event){
        const {value} = event.target;
        setQuery(value);
    }
    function handleSearch(event){
        event.preventDefault();
        console.log(query);
        API.search(query).then(res => {
            setResults(res.data.items || []);
            setShowResults(true);
        })
        .catch(err => console.log(err))
    }
return (
    <Container>
        <Row style={{border: "3px solid black", borderRadius: "5px", marginTop: "20px"}}>
            <Col size="md-8">
                <Form style={{padding: "10px"}}>
                    <Form.Group controlId="searchForm.Input">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} placeholder="Title or Author"/>
                    </Form.Group>
                    <Button variant="primary" className="float-right mb-2" onclick={handleSearch}>Search</Button>
                </Form>
            </Col>
        </Row>
        {showResults && (
            <Row style={{border: "3px solid black", borderRadius:"5px", marginTop: "20px"}}>
                <Col size="md-8">
                    {results.length ?
                    results.map(book => {
                        const imageLinks = book.volumeInfo.imageLinks;
                        return <div key={book.id}>
                            {book.volumeInfo.title.length && book.volumeInfo.description ? <SearchedBooks
                            style={{padding: "10px"}}
                            title={book.volumeInfo.title || "Title not found"}
                            authors={book.volumeInfo.authors || ["No authors listed"]}
                            link={book.valumeInfo.canonicalVolumeLink}
                            thumbnail={(imageLinks && imageLinks.thumbnail)}
                            descrption={book.volumeInfo.description}/> : null}
                        </div>                    
                        }) :
                        <h3>Please try another search</h3>
                }
                </Col>
            </Row>
        )}
    </Container>
)
}
export default Search;