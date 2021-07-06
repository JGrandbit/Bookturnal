import axios from "axios";

const BOOKURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function (query) {
        return axios.get(`${BOOKURL} ${query}`);
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
}
};