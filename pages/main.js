import Link from 'next/link'


export default function Main() {
  return (
    <>
      <main>
        <form className='w-3/4 p-2 mx-auto my-8 bg-green-300 rounded'>
          <h2 className='content-center text-center text-xl'>Create a Cookie Stand</h2>
          <div id='location_div' className='flex justify-evenly p-3 my-4' >
            <label for='location'>Location</label>
            <input name='location' id='location' placeholder='Enter a City' className='flex-auto ml-2 pl-1 border border-gray-700 rounded' />
          </div>
          <div className='flex flex-row justify-evenly'>
            <label>
              Min. Customers Per Hour
              <input name='minimum_customers_per_hour' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <label>
              Max. Customers Per Hour
              <input name='maximum_customers_per_hour' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <label>
              Avg. Cookies Per Sale
              <input name='average_cookies_per_sale' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Create</button>
          </div>
        </form>
        <p className='text-center text-gray-500 font-medium'>Report Table Coming Soon...</p>
      </main>
    </>
  )
}


// button: px-4 bg-green-600 text-gray-50 border border-gray-700 rounded

