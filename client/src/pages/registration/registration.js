import React, {Component} from "react";
import Passport from "./../../utilities/passport";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Link } from 'react-router-dom';
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            zipCode: "",
            email: "",
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        // // event.preventDefault();
        // // state = {
        // //     redirect: false
        // //   }
        // //   handleFormSubmit (); {
        // //     axios.post(/**/)
        // //       .then(() => this.setState({ redirect: true }));
        //   }
        if (this.state.username && this.state.password && this.state.name && this.state.email && this.state.zipCode) {
            Passport.registerUser({
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                zipCode: this.state.zipCode,
                email: this.state.email
            })
                .then((userData)=> console.log(userData))
                .catch(err => console.log(err));
                // const {isAuthenticated} = this.props;
                // if (isAuthenticated) {
                //   <Redirect to='/signin' />;
                // }
            //   }
                
                //if not err re-direct to signIn page(.then if(window.relocate))
                
                
                
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
                                placeholder="Username(required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Create a Password(required)"
                            />
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Name(required)"
                            />
                            <Input
                                value={this.state.zipCode}
                                onChange={this.handleInputChange}
                                name="zipCode"
                                placeholder="Zip Code(required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email(required)"
                            />
                           <Link to="./"> <FormBtn
                                disabled={!(this.state.username && this.state.password && this.state.name && this.state.email && this.state.zipCode)}
                                // onClick={this.handleFormSubmit}
                                
                            >Submit
                            </FormBtn></Link>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Register;