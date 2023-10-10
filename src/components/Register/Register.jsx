import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../Login/Login.module.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import googleicon from '../../svg/googleicon.svg';
import facebookicon from '../../svg/facebookicon.svg';
import appleicon from '../../svg/appleicon.svg';

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('email не может быть пустым');
    const [passwordError, setPasswordError] = useState('password не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    const [confirmError, setConfirmError] = useState('');
    const [confirmShow, setConfirmShow] = useState(false);
    const [confirmDirty, setConfirmDirty] = useState(false);

    const [registerUser, setRegisterUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
     })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const blurHandler = e => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true); break;
            case 'password':
                setPasswordDirty(true); break;
            case 'confirmPassword':
                setConfirmDirty(true); break;
        }
    }

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false);
        }else {
            setFormValid(true);
        };

        if(registerUser.password === registerUser.confirmPassword) {
            setConfirmError('');
            setConfirmShow(false)
        }else {
            setConfirmError('*Пароли не совпадают!');
            setConfirmShow(false);
        }

    }, [emailError,passwordError, registerUser]);


    const registerChange = e => {
        setRegisterUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        });

        if(e.target.name === 'email') {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if(!re.test(String(e.target.value).toLocaleLowerCase())) {
                setEmailError('Некоректный email!');

                if(!e.target.value) {
                    setEmailError('Поле поля email обязателен!!')
                  }
            }else {
                setEmailError('')
            }
        }else if(e.target.name === 'password') {
            if(e.target.value.length < 6 || e.target.value.length > 8) {
                setPasswordError('пароль должен быть больше 6 символов');

                if(!e.target.value) {
                    setPasswordError('Поле поля password обязателен!');
                }
            }else {
                setPasswordError('');
            }
        } else if(e.target.name === 'confirmPassword') {
            if(e.target.value.length < 6 || e.target.value.length > 8) {
                setConfirmError('пароль должен быть больше 6 символов');

                if(!e.target.value) {
                    setConfirmError('Поле поля confirm password обязателен!');
                }
            }else {
                setConfirmError('');
            }
        }
    }



  return (
    
    <div className={styles.LoginComponent}>

        
        <div className={styles.registerComponent}>
        
        <h2 className={styles.registerComponentTitle}>Регистрация</h2>

        <div className={styles.registerJwt}>

            <button className={styles.registerGoogle}>
                <img src={googleicon} alt={googleicon} className={styles.registerBtnIcon} />
                <span className={styles.registerBtnText}>Зарегистрироваться с Google</span>
            </button>

            <button className={styles.registerApple}>
                <img src={appleicon} alt={appleicon} className={styles.registerBtnIcon} />
                <span className={styles.registerBtnText}>Зарегистрироваться с Apple</span>
            </button>

        </div>

        <div className={styles.orBlock}>
            <hr className={styles.or}/>
            <span className={styles.orBlockTitle}>или</span>
            <hr className={styles.or}/>
         </div>

        <form  className={styles.formRegister}>

            <div className={styles.formContainer}>
            
            

               
                <div className={styles.blockInput}>
                    <span className={styles.blockInputText}>Эл. почта *</span>
                    
                    <input value={registerUser.email} onChange={e => registerChange(e)} onBlur={e => blurHandler(e)} type="email" name='email' className={styles.inputRegister} />
                    {(emailDirty && emailError) && <div className={styles.emailError}>{emailError}</div>}
                </div>

                <div className={styles.blockInput}>
                    <span className={styles.blockInputText}>Пароль *</span>
                    
                    <input value={registerUser.password} onChange={e => registerChange(e)} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='password' className={styles.inputRegister} />
                    <button className={styles.eyePasswordRegister} type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {(passwordDirty && passwordError) && <div className={styles.passwordError}>{passwordError}</div>}
                </div>

                <div className={styles.blockInput}>
                    <span className={styles.blockInputText}>Пароль *</span>
                    
                    <input value={registerUser.confirmPassword} onChange={e => registerChange(e)} onBlur={e => blurHandler(e)} type={showPassword ? "text" : "password"} name='confirmPassword' className={styles.inputRegister} />
                    <button className={styles.eyePasswordConfirm} type="button" onClick={togglePasswordVisibility}>
                        {!showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {(confirmDirty && confirmError) && <div className={styles.passwordError}>{confirmError}</div>}
                    {(confirmShow == false) && <span className={styles.confirmErrorText}>{confirmError}</span>}
                </div>

                <button disabled={!formValid} className={styles.LoginBtn}>отправить</button>
                <div className={styles.linkInLoginBlock}>
                    <p className={styles.linkInLoginText}>
                        Если есть акаунт можете 
                        <NavLink to='/login' className={styles.linkInLogin}>Войти</NavLink>
                    </p>
                </div>

            </div>

            
        </form>
        </div>
    
    </div>
  
  )
}

export default Register;