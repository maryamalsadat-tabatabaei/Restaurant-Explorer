import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Review extends Component{

    constructor(props) {
        super(props);
 
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
     handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Thank you for your feedback: ' + JSON.stringify(values ));
       // this.props.resetFeedbackForm();
        //this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
        // event.preventDefault();
    }

    render(){
         return(
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Col md={4}>
                        <Label htmlFor="firstname" >Your Name</Label>
                        <Control.text model=".firstname" id="firstname" name="firstname"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".firstname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                         />
                    </Col>
                    <Col md={4}>
                        <Label htmlFor="email">Your Email</Label>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="Your Email"
                            className="form-control"
                            validators={{
                                required, validEmail
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                         />
                    </Col>
                    <Col md={4}>
                         <Label htmlFor="quality">Quality</Label>
                        <Control.select model=".quality" name="quality"
                            className="form-control">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                        <div className="form-check">
                            <Label check>
                                <Control.checkbox model=".agree" name="agree"
                                    className="form-check-input"
                                     /> {' '}
                                    <strong>May we contact you?</strong>
                            </Label>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="form-group">
                    
                    <Col md={12}>
                    <Label htmlFor="message" >Your Feedback</Label>
                        <Control.textarea model=".message" id="message" name="message"
                            rows="12"
                            className="form-control" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                        <Button type="submit" color="primary">
                        Send Feedback
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
    );
    }
}

export default Review;