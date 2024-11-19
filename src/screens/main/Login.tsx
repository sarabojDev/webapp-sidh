
import MediaQuery from 'react-responsive'
import LoginForm from './components/LoginForm'
import { ModeToggle } from '@/components/mode-toggle'
import ForgotPasswordModal from './components/ForgotpasswordModal';
import { useState } from 'react';

const Login = () => {
  const [showForgotPassModal, setForgotPassModal] = useState<boolean>(false);

  return (
    <div>
      <MediaQuery minWidth={1000}>

        <div className='w-full h-screen relative bg-gray-500'
          style={{
            background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >


          <div className='w-full h-full flex items-center justify-between mx-auto'>
            <div className='p-6 w-[65%] gap-4  mx-auto    rounded-md flex items-center justify-center flex-col'>
              <div>
                <div className='w-[100px] h-[100px] mx-auto'>
                  <img src={"https://update-app.web.app/assets/logo1-Y6LbC1lz.png"} alt="Sidharth Logo" />
                </div>
              </div>
              <h1 className='text-center text-xl font-bold tracking-tight  md:text-3xl text-white dark:text-white/70 '>
                Revolutionize Your Team’s Success with Our CRM Solutions
              </h1>
              <p className=' md:text-lg leading-8 text-white dark:text-white/40 text-center'>
                Elevate your business by empowering your team with tools that streamline communication and improve customer engagement effortlessly.
              </p>
            </div>
            <div className='h-full' >
              <LoginForm openForgotModal={setForgotPassModal} />
            </div>
          </div>


        </div>

        <div className='fixed top-5 right-5'>
          <ModeToggle />
        </div>

      </MediaQuery>

      <MediaQuery maxWidth={1000}>
        <div className='w-full h-screen bg-blue-500'>
          <div className='w-full h-full flex items-center justify-center mx-auto'>
            <div className='w-full h-full'>
              <LoginForm openForgotModal={setForgotPassModal} />
            </div>
          </div>
        </div>

        <div className='fixed top-5 right-5'>
          <ModeToggle />
        </div>
      </MediaQuery>

      <ForgotPasswordModal open={showForgotPassModal} setOpen={setForgotPassModal} />
    </div>
  )
}

export default Login