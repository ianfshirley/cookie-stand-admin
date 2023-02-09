

export default function CreateForm() {
  return (
    <>
      <form className='w-3/4 p-2 mx-auto my-8 bg-emerald-300 rounded'>
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
            <button className='bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
'>Create</button>
          </div>
        </form>
    </>
  )
}