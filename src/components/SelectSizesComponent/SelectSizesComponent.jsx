import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { getSizes } from '../../api/getSizes';
import './SelectSizesComponent.scss';

const { Option } = Select;

function handleChange (value) {
  console.log(`selected ${value}`);
}

const SelectSizesComponent = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes(() => {
      const getSizesNameList = [];
      getSizes()
        .then(res => res.data
          .map(item => getSizesNameList.push(item.name)));
      return getSizesNameList
    })
  }, []);

  return (
    <div className='select'>
      <h3 className='select__title'>Size</h3>
      <Select className='select__content' defaultValue='3-6M' onChange={ handleChange }>
        { sizes.map((size, id) => <Option key={ id } className='select__text' value={ size }>{ size }</Option>) }
      </Select>
    </div>
  );
}

export default SelectSizesComponent;