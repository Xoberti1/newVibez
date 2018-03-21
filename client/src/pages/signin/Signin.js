import React, {Component} from "react";
import Passport from "./../../utilities/passport";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Signin extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            Passport.authenticateUser({
                username: this.state.username,
                password: this.state.password,
            })
                // .then(console.log("this worked"))
                .then((userData)=> console.log(userData))
                .catch(err => console.log(err));
        }
    };



    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password(required)"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >Submit
                            </FormBtn>
                            <FormBtn
                                onClick={this.redirect}
                            >
                                Register
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Signin;