import React from 'react'
import {Form, Input} from 'antd';
import './FeedbackForm.scss'
const FeedbackForm = (props) => {
  const {title, text} = props
  return (
        <div className={'feed-back feed-back__block'}>
            <h3 className={'feed-back__block__title'}>{title}</h3>
            <Form className={'feed-back-form feed-back-form__list'}>
            <Form.Item label='Name' className={'feed-back-form__item'}>
          <Input className={'feed-back-form__item_input'} />
        </Form.Item>
        <Form.Item label='Email' className={'feed-back-form__item'}>
        <Input className={'feed-back-form__item_input'} />
      </Form.Item>
      <Form.Item label='Message' className={'feed-back-form__item feed-back-form__item--message'}>
        <Input.TextArea className={'feed-back-form__item_input feed-back-form__item_input--text-area'} />
      </Form.Item>
      </Form>
      <p className={'feed-back__block--text'}>
          {text}
      </p>
      <button>кнопка компонент</button>
        </div>
  )
}

export default FeedbackForm
