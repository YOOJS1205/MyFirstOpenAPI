import React, { useState } from 'react';
import { clickLogin } from '../redux_modules/Login';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    // login redux
    var { isLogin, id } = useSelector(state => ({
        isLogin: state.loginReducer.isLogin,
        id: state.loginReducer.id
    }));

    const onClickLogin = () => dispatch(clickLogin())

    // modal redux
    const { isOpen } = useSelector(state => ({
        isOpen: state.modalReducer.isOpen
      }));
    
    // form states
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = () => {
        id = Email
    }

    return (
        <div className={isOpen && !isLogin ? 'modal fadeIn' : 'modal hidden'}>
            <h2>Welcome!</h2>
            <form className='modal_login-form' onSubmit={onSubmitHandler}>
                <input className='email' type='email' placeholder='이메일을 입력하세요...'
                       required value={Email} onChange={onEmailHandler} />
                <input type='password' placeholder='비밀번호를 입력하세요...' 
                       required value={Password} onChange={onPasswordHandler} />
                <button type='submit'
                        onClick={onClickLogin}>{isLogin ? '로그아웃' : '로그인'}</button>
            </form>
        </div>
    )
}

export default Modal;