import React, { useState } from 'react';
import Button from '../Button/Button';
import { Steps } from 'antd';

const StepPanel = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  const prev = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  };

  return (
    <>
      <Steps current={activeStep} style={{ width: '100% ' }}>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {steps.map((item) => (
        <div
          className={`steps-content ${
            item.step !== activeStep + 1 && 'hidden'
          }`}
        >
          {item.content}
        </div>
      ))}
      <div className='checkout__steps-action'>
        {activeStep < steps.length - 1 && (
          <Button modifier='contained' text='Next' onClick={() => next()} width='120px' />
        )}
        {activeStep === steps.length - 1 && (
          <Button modifier='contained' text='Checkout' htmlType='submit' width='120px' />
        )}
        {activeStep > 0 && (
          <Button modifier='outlined' text='Previous' htmlType='submit' onClick={() => prev()} width='120px' />
        )}
      </div>
    </>
  );
};

export default StepPanel;
