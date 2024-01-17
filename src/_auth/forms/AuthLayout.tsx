import { Outlet, Navigate } from 'react-router-dom';


const AuthLayout = () => {
  const isAuthenticated = false;


  return (
    <>
{isAuthenticated ? (<Navigate to="/" />): (
  <>
  <section className='flex flex-1 justify-center items-center flex-col flex-10'>
    <Outlet/>
  </section>
  <img 
  src='/assets/images/side-pic.png'
  alt='logo'
  className='hidden xl:block h-screen  bg-no-repeat bg-cover'
  />
  </>
) }
    </>
  )
}

export default AuthLayout