import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { add_SelectedMenu } from '../../store/modal/actions';
import 'antd/dist/antd.css';
import './FooterMenu.scss';

const MenuComponent = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.modal.mode);
  const theme = useSelector((state) => state.modal.theme);
  const selectedMenu = useSelector((state) => state.modal.selectedMenu);
  const handleClick = (e) => {
    dispatch(add_SelectedMenu(e.key));
  };
      
  return (
    <>
      <div className='menu' >
          <div>
            <span className='menu__tittle'>Help</span>
            <Menu className='menu__nav'
                onClick={handleClick}
                selectedKeys={[selectedMenu]}
                mode={mode}
                theme={theme}
            >
                <Menu.Item style={{ margin: 0}} key="1">
                    <Link to="/faq">FAQ</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/track-orders">Track Orders</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/size-guide">Size Guide</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/shipping+returns">Shipping + Returns</Link>
                </Menu.Item>
                <Menu.Item className="men__item" style={{heigth: 165}} key="5" >
                    <Link to="/our-sourcing-and-prodaction-values">Our Sourcing & <br/> Prodaction Values</Link>
                </Menu.Item>
            </Menu>
         </div>
      
        <div >
            <span className='menu__tittle'>Navigate</span>
            <Menu className='menu__nav'
                onClick={handleClick}
                selectedKeys={[selectedMenu]}
                mode={mode}
                theme={theme}
            >
                
                <Menu.Item key="1">
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/shop">Shop</Link>
                </Menu.Item>
                    <Menu.Item key="4">
                <Link to="/contact-us">Contact Us</Link>
                    </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/blog">Blog</Link>
                </Menu.Item>
            </Menu>
        </div>
     </div>
    </>
  );
};

export default MenuComponent;