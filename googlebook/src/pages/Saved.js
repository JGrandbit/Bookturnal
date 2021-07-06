import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        loadBooks();
    }, []);

function loadBooks(){
    API.getBooks()
    .then(res => {
        setBooks(res.data)
    })
    .catch(err => console.error(err))
};

function deleteBook(id){
    API.deleteBook(id)
    .then(res => loadBooks())
    .catch(err => console.error(err));
};

return (
    <Container>
        <Row style={{marginTop: "20px"}}>
            <Col size="md-8">
                {books.length ? (books.map(book => (
                    <SavedBooks
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    link={book.link}
                    thumbnail={book.image}
                    description={book.description}
                    handleDelete={() => deleteBook(book._id)}
                    ></SavedBooks>))
                    ):(
                    <>
                    <h3 align="center">There are no book currently saved</h3>
                    </>
                    )}
            </Col>
        </Row>
    </Container>
)
}
export default Saved;