import React from 'react';
import { Select as SelectComponent } from 'antd';
import './SelectComponentStyles.scss';
import api from './test.json';

const { Option } = SelectComponent;

const SelectElement = (props) => {
  const { typeBoolean, width, placeholder } = props;

  const options = api.map((item) => <Option value={item.type}>{item.size}</Option>);

  return (
      <div className='select_container'>
    <SelectComponent
      showSearch
      size="large"
      style={{ width: width, fontSize: '18px', color: '#5E6A67'}}
      optionFilterProp="children"
      bordered={typeBoolean}
      value={placeholder}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }>
      {options}
    </SelectComponent>
    </div>
  );
};

export default SelectElement;
