import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '@/components/LoginForm';
import Head from 'next/head'
import { useAuth } from '../contexts/auth'
import useResource from '@/hooks/useResource';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {

  const { user, login, logout } = useAuth();
  const { resources } = useResource();

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} logout={logout}/>
      {user ?
        <CookieStandAdmin />
        :
        <LoginForm onLogin={ login }/>  
      }
      <Footer locations={resources || []}/>
    </>
  )
}
