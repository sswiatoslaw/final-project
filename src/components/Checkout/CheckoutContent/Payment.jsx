import React from 'react';
import { Form, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

export const Payment = () => {
  return (
    <div className='checkout__content'>
      <FormItem name='paymentInfo' label='Payment'>
        <Select
          onChange={(value) => {
            alert(value);
          }}
          name='paymentInfo'
          placeholder='Pay With'>
          <Option value='cash'>Cash</Option>
          <Option value='credit Card'>Credit Card</Option>
          <Option value='payPal'>PayPal</Option>
        </Select>
      </FormItem>
    </div>
  );
};