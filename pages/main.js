import Link from 'next/link'


export default function Main() {
  return (
    <>
      <main>
        <form className='w-3/4 p-2 mx-auto my-4 bg-green-300 rounded'>
          <div id='location_div' className='flex justify-evenly p-3 my-4' >
            <label for='location'>Location</label>
            <input name='location' id='location' placeholder='Barcelona' className='flex-auto ml-2 pl-1 border border-gray-700' />
          </div>
          <div className='flex justify-evenly'>
            <label>
              Min. Customers Per Hour
              <input name='minimum_customers_per_hour' placeholder='2' className='block p-2 m-2 border border-gray-700' />
            </label>
            <label>
              Max. Customers Per Hour
              <input name='maximum_customers_per_hour' placeholder='4' className='block p-2 m-2 border border-gray-700' />
            </label>
            <label>
              Avg. Cookies Per Sale
              <input name='average_cookies_per_sale' placeholder='2.5' className='block p-2 m-2 border border-gray-700' />
            </label>
            <button className='px-4 py-1 bg-green-600 text-gray-50 border border-gray-700 rounded'>Create</button>
          </div>
        </form>

      </main>
    </>
  )
}


//  content-center
// flex-auto p-2 m-2 border border-gray-700