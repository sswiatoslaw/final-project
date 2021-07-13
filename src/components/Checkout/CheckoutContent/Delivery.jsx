import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const Delivery = () => {
  const postalRegExp = /([0-9]{5})/;

  return (
    <div className='checkout__content'>
      <div className='checkout__column'>
        <FormItem name='country' label='Country/Region'>
          <Input />
        </FormItem>
        <FormItem name='city' label='Town/City' validateTrigger='onBlur' rules={[
          {
            required: true,
            message: 'Required'
          }
        ]}>
          <Input />
        </FormItem>
      </div>
      <div className='checkout__column'>
        <FormItem name='address' label='Address' validateTrigger='onBlur' rules={[
          {
            required: true,
            message: 'Required'
          }
        ]}>
          <Input />
        </FormItem>
        <FormItem name='postal' label='Postal Code' validateTrigger='onBlur' rules={[
          {
            pattern: new RegExp(postalRegExp),
            message: 'Postal Code is not a valid number'
          },
          {
            max: 5,
            message: 'Postal Code must be maximum 5 characters.',
            disabled: true
          }
        ]}>
          <Input />
        </FormItem>
      </div>
    </div>
  );
};