import Link from 'next/link'

export default function Footer({ cookieStands }) {
  return (
    <div className='fixed bottom-0 w-full'>
      <footer className='flex items-center justify-center p-4 bg-emerald-500 text-gray-900'>
        {/* <p>{cookieStands.length} Cookie Stands Created</p> */}
        <p>©2023 Ian F. Shirley</p>
      </footer>
    </div>
  )
}