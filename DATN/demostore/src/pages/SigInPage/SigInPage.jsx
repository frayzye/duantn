import React, { useEffect } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './Style.js'
import imageLogo from '../../assets/images/loogbee.jpg'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import * as UserService from '../../services/UserService.js'
import { useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hooks/useMutationHooks'
import * as message from '../../components/Message/Message.js'
import jwt_decode from "jwt-decode"

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate()

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const {data,  isSuccess} = mutation

  useEffect(()=>{
    if(isSuccess){
        message.success()
        console.log('data', data)
    }
  }, [isSuccess])

  console.log('mutation', mutation)

  const handleNavigateSignUp = () => {
    mutation.mutate({
        email,
        password
    })
    navigate('/sign-up')
   
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleSignIn = () => {
    console.log('logingloin')
    mutation.mutate({
      email,
      password
    })
  }

  return (
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(249 213 133)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '16px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
                    <h1 style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif" }}>Xin Chào, đăng nhập bằng email</h1>
                    <p style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif", marginTop: "-10px" }}>Nhập email và mật khẩu</p>
                    <InputForm style={{ marginBottom: '10px', fontsize: '20px' }} placeholder="abc@gmail.com" />
                              <InputForm placeholder="password" />
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
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
              }}
              textbutton={'Đăng nhập'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
   
                    <p>,<WrapperTextRight style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif" }} >Quên Mật Khẩu </WrapperTextRight></p>
          <p style={{ fontFamily: "Inter,Helvetica,Arial,sans-serif" }}>Chưa Có Tài Khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" style={{ height: "320px", width: "320px", margin: "60px -10px"}} />
        </WrapperContainerRight>
      </div>
    </div >
  )
}

export default SignInPage
