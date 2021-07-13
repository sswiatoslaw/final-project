import React, { useEffect, useState } from 'react';
import { Form, PageHeader } from 'antd';
import StepPanel from './StepPanel';
import { PersonalInformation } from './CheckoutContent/PersonalInformation';
import { Delivery } from './CheckoutContent/Delivery';
import { Payment } from './CheckoutContent/Payment';
import './Checkout.scss';

const Checkout = () => {
  const [stepForm] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  <PersonalInformation />;
  <Delivery />;
  <Payment />;

  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue();

    // POST the data to backend and show Notification
    console.log(formData);
  };

  const steps = [
    {
      step: 1,
      title: 'Personal Information',
      content: <PersonalInformation />
    },
    {
      step: 2,
      title: 'Delivery',
      content: <Delivery />
    },
    {
      step: 3,
      title: 'Payment',
      content: <Payment />
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();

    const form = this.props.form;
    form.validateField((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <PageHeader title='Checkout'>
      <Form form={stepForm} onFinish={onFinish} onSubmit={handleSubmit} className='checkout__form'>
        <StepPanel steps={steps} />
      </Form>
    </PageHeader>
  );
};

export default Checkout;
