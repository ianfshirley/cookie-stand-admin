import Link from 'next/link'


export default function Main() {
  return (
    <>
      <main>
        <form className='flex w-1/2 p-2 mx-auto my-4 bg-gray-500'>
          <input name='location' className='flex-auto pl-1' />
          <button className='px-2 py-1 bg-gray-500 text-gray-50'>Create Cookie Stand</button>
        </form>
      </main>
    </>
  )
}