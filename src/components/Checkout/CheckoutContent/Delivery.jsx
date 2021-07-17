import React, { useState } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const Delivery = () => {
  const postalRegExp = /([0-9]{5})/;

  const [values, setValues] = useState({
    country: '',
    city: '',
    address: '',
    postal: '',
  });

  const [touched, setTouched] = useState({
    country: false,
    city: false,
    address: false,
    postal: false,
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
        <FormItem name='country' label='Country/Region' onChange={handleChange}>
          <Input value={values.country} />
        </FormItem>
        <FormItem name='city' label='Town/City' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}>
          <Input value={values.city} />
        </FormItem>
      </div>
      <div className='checkout__column'>
        <FormItem name='address' label='Address' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}>
          <Input value={values.address} />
        </FormItem>
        <FormItem name='postal' label='Postal Code' onChange={handleChange} onBlur={handleBlur} rules={[
          {
            pattern: new RegExp(postalRegExp),
            message: 'Postal Code is not a valid number',
          },
          {
            max: 5,
            message: 'Postal Code must be maximum 5 characters.',
            disabled: true,
          },
        ]}>
          <Input value={values.postal} />
        </FormItem>
      </div>
    </div>
  );
};