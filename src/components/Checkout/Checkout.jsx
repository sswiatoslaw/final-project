import React, { useEffect, useState } from 'react';
import { Form, PageHeader } from 'antd';
import { connect } from 'react-redux';
import { addDataFromFormCheckout } from '../../store/formsData/checkoutFormData/actions';
import StepPanel from './StepPanel';
import { PersonalInformation } from './CheckoutContent/PersonalInformation';
import { Delivery } from './CheckoutContent/Delivery';
import { Payment } from './CheckoutContent/Payment';
import './Checkout.scss';

const Checkout = ({ addDataFromCheckout }) => {
  const [stepForm] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  <PersonalInformation />;
  <Delivery />;
  <Payment />;

  const onFinish = () => {
    const formData = stepForm.getFieldsValue();

    const form = {
      personalInformation: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        telephone: formData.telephone,
      },
      deliveryAddress: {
        country: formData.country,
        city: formData.city,
        address: formData.address,
        postal: formData.postal,
      },
      paymentInfo: formData.paymentInfo,
    };

    addDataFromCheckout(form);
    console.log('addDataFromCheckout', addDataFromCheckout(form));
    // POST the data to backend and show Notification
    console.log('formData', formData);
    console.log('form', form);
  };

  const steps = [
    {
      step: 1,
      title: 'Personal Information',
      content: <PersonalInformation />,
    },
    {
      step: 2,
      title: 'Delivery',
      content: <Delivery />,
    },
    {
      step: 3,
      title: 'Payment',
      content: <Payment />,
    },
  ];

  return (
    <PageHeader title='Checkout'>
      <Form form={stepForm} onFinish={onFinish} className='checkout__form'>
        <StepPanel steps={steps} />
      </Form>
    </PageHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDataFromCheckout: (data) => dispatch(addDataFromFormCheckout(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
