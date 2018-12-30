import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Customer 1',
                address: {
                    street: 'Street 1',
                    zipcode: '1',
                    country: 'Country 1'
                },
                email: '1@email.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading: false}));
    };

    render() {
        let form = (<form>
            <input type="text" className={classes.Input} name="name" placeholder="Your Name"/>
            <input type="email" className={classes.Input} name="email" placeholder="Your E-mail"/>
            <input type="text" className={classes.Input} name="street" placeholder="Street"/>
            <input type="text" className={classes.Input} name="postalcode" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>);

        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;