import Link from 'next/link';


export default function Header({ user, logout }) {


  return (

    <header className=' flex content-evenly bg-emerald-500'>
      <div className='w-3/4 my-3' >
        <h1 className='text-3xl text-center font-semibold'>Cookie Stand Admin</h1>
      </div>
      <div className=' w-1/4 my-3'>
        <button className=' px-2 mx-2 rounded-md bg-white hover:bg-blue-300'>{user?.username}</button>
        <button className=' px-2 mx-2 rounded-md bg-emerald-800 text-white hover:bg-blue-300' onClick={logout}>Logout</button>
        <Link href='/overview' className=' px-2 mx-2 rounded-md bg-white hover:bg-blue-300'>Overview</Link>
      </div>
    </header>
  )

}