import React, { useEffect } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './Style'
import imageLogo from '../../assets/images/loogbee.jpg'
import { Image } from 'antd'
import { useState } from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService.js'
import { useMutationHooks } from '../../hooks/useMutationHooks.js'
import * as message from '../../components/Message/Message.js'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  
  const {data, isSuccess, isError} = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
     
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword })
  }

  return (
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(249 213 133)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '16px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
                    <h1 style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif" }}>Xin Chào, Đăng nhập hoặc tạo tài khoản</h1>
                    <p style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif", marginTop: "-5px" }}>Nhập email và mật khẩu</p>
          <InputForm style={{ marginTop: '20px', fontsize: '20px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="password" style={{ marginTop: '10px', fontsize: '20px' }} type={isShowPassword ? "text" : "password"}
              value={password} onChange={handleOnchangePassword} />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm style={{ marginTop: '10px', fontsize: '20px' }} placeholder="comfirm password" type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '10px',
                margin: '26px 0 10px'
              }}
              textbutton={'Tiếp tục'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700',}}
            ></ButtonComponent>
       
          <p style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif"}} >Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="iamge-logo" style={{ height: "320px", width: "320px", margin: "60px -10px" }} />
        </WrapperContainerRight>
      </div>
    </div >
  )
}

export default SignUpPage
