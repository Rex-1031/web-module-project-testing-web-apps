import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';


test('renders without errors', ()=>{
    render(<ContactForm />)
});

test('renders the contact form header', ()=> {
    const matcher = render(<ContactForm />);
    const header = matcher.getByText(/contact form/i);

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
   
});

test('renders ONE error message if user enters less than 5 characters into firstname.', async () => {
    const matcher = render(<ContactForm />);
    const firstNameInput = matcher.getByDisplayValue()

    expect(firstNameInput).l
});

// test('renders THREE error messages if user enters no values into any fields.', async () => {
    
// });

// test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
// });

// test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
// });

// test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
// });

// test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
// });

// test('renders all fields text when all fields are submitted.', async () => {
    
// });