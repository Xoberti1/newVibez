import axios from "axios";

export default {

    // Saves a book to the database
    authenticateUser: function (userData) {
        return axios.post("/auth/login", userData);
    },

    registerUser: function (userData) {
        return axios.post("/registration/registration", userData);
    }
};