import React, { useState } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const PersonalInformation = () => {
  const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    telephone: false,
  });

  const handleChange = event => {
    const name = event.target.id;
    setValues(values => ({ ...values, [name]: event.target.value }));
  };

  const handleBlur = event => {
    const name = event.target.id;
    setTouched(touched => ({ ...touched, [name]: true }));
  };

  return (
    <div className='checkout__content'>
      <div className='checkout__column'>
        <FormItem name='firstName' label='First Name' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
          { min: 2, message: 'Your name must be minimum 2 characters.' },
        ]}>
          <Input value={values.firstName} />
        </FormItem>
        <FormItem name='lastName' label='Last Name' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
          { min: 2, message: 'Your last name must be minimum 2 characters.' },
        ]}>
          <Input value={values.lastName} />
        </FormItem>
      </div>
      <div className='checkout__column'>
        <FormItem name='email' label='Email Address' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
            disabled: true,
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
          <Input value={values.email} />
        </FormItem>
        <FormItem name='telephone' label='Telephone' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            message: 'Phone number is not valid',
            pattern: new RegExp(phoneRegExp),
            disabled: true,
          },
          {
            min: 10,
            message: 'Phone number must be minimum 10 characters.',
            disabled: true,
          },
          {
            max: 12,
            message: 'Phone number must be maximum 12 characters.',
            disabled: true,
          },
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}>
          <Input placeholder='+38' value={values.telephone} />
        </FormItem>
      </div>
    </div>
  );
};