import React from 'react'
import {Form, Input} from 'antd';
import './FeedbackForm.scss'
const FeedbackForm = (props) => {
  const {title, text} = props
  return (
    <div className={'wrapper'}>
        <div className={'feed-back feed-back__block'}>
            <h3 className={'feed-back__title'}>{title}</h3>
            <Form className={'feed-back-form feed-back-form__list'}>
            <Form.Item label='Name' className={'feed-back-form__item'}>
          <Input className={'feed-back-form__input'} />
        </Form.Item>
        <Form.Item label='Email' className={'feed-back-form__item'}>
        <Input className={'feed-back-form__input'} />
      </Form.Item>
      <Form.Item label='Message' className={'feed-back-form__item feed-back-form__item--message'}>
        <Input.TextArea className={'feed-back-form__input feed-back-form__input--text-area'} />
      </Form.Item>
      </Form>
      <p className={'feed-back__text'}>
          {text}
      </p>
      <button>кнопка компонент</button>
        </div>
        </div>
  )
}

export default FeedbackForm
