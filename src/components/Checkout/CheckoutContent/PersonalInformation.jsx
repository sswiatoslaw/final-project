import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const PersonalInformation = () => {
  const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return (
    <div className='checkout__content'>
      <div className='checkout__column'>
        <FormItem name='firstName' label='First Name' rules={[
          {
            required: true,
            message: 'Please input your name!'
          },
          { min: 2, message: 'Your name must be minimum 2 characters.' }
        ]}>
          <Input />
        </FormItem>
        <FormItem name='lastName' label='Last Name' rules={[
          {
            required: true,
            message: 'Please input your last name!'
          },
          { min: 2, message: 'Your last name must be minimum 2 characters.' }
        ]}>
          <Input />
        </FormItem>
      </div>
      <div className='checkout__column'>
        <FormItem name='email' label='Email Address' validateTrigger='onBlur' rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
            disabled: true
          },
          {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}>
          <Input />
        </FormItem>
        <FormItem name='telephone' label='Telephone' validateTrigger='onBlur' rules={[
          {
            message: 'Phone number is not valid',
            pattern: new RegExp(phoneRegExp),
            disabled: true
          },
          {
            min: 10,
            message: 'Phone number must be minimum 10 characters.',
            disabled: true
          },
          {
            max: 12,
            message: 'Phone number must be maximum 12 characters.',
            disabled: true
          },
          {
            required: true,
            message: 'Please input your phone number!'
          }
        ]}>
          <Input placeholder='+3 8'/>
        </FormItem>
      </div>
    </div>
  );
};