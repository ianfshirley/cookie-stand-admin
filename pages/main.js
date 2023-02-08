import Link from 'next/link'


export default function Main() {
  return (
    <>
      <main>
        <form className='w-3/4 p-2 mx-auto my-4 bg-green-300 rounded'>
          <div id='location_div' className='flex justify-evenly p-3 my-4' >
            <label for='location'>Location</label>
            <input name='location' id='location' placeholder='Location' className='flex-auto ml-2 pl-1 border border-gray-700' />
          </div>
          <div className='flex justify-evenly'>
            <label for='minimum_customers_per_hour'>Min. Customers Per Hour</label>
            <input name='minimum_customers_per_hour' id='minimum_customers_per_hour' placeholder='Min. Customers Per Hour' className='block p-2 m-2 border border-gray-700' />
            <label for='maximum_customers_per_hour'>Max. Customers Per Hour</label>
            <input name='maximum_customers_per_hour' id='maximum_customers_per_hour' placeholder='Max. Customers Per Hour' className='block p-2 m-2 border border-gray-700' />
            <label for='average_cookies_per_sale'>Avg. Cookies Per Sale</label>
            <input name='average_cookies_per_sale' id='average_cookies_per_sale' placeholder='Avg. Cookies Per Sale' className='block p-2 m-2 border border-gray-700' />
            <button className='px-2 bg-green-600 text-gray-50 border border-gray-700 rounded'>Create</button>
          </div>
        </form>

      </main>
    </>
  )
}

// flex-auto p-2 m-2 border border-gray-700