import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/modal.css';

const Modal = () => {
    const navigate = useNavigate();

    const info = useSelector((currentState) => currentState);
    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = () => {
        info.id = Email;
        navigate('/');
    }

    return (
        <div className='modal'>
            <h2>Welcome!</h2>
            <form className='modal_login-form' onSubmit={onSubmitHandler}>
                <input type='email' placeholder='이메일을 입력하세요...'
                       required value={Email} onChange={onEmailHandler} />
                <input type='password' placeholder='비밀번호를 입력하세요...' 
                       required value={Password} onChange={onPasswordHandler} />
                <button type='modal_submit'
                        onClick={() => {dispatch({type: 'CLICK_LOGIN'})}}>로그인</button>
            </form>
        </div>
    )
}

export default Modal;