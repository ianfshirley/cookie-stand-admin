import { useAuth } from "@/contexts/auth"
import useResource from "@/hooks/useResource"

export default function CreateForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
        location: event.target.location.value,
        minimum_customers_per_hour: parseInt(event.target.min_cust.value),
        maximum_customers_per_hour: parseInt(event.target.max_cust.value),
        average_cookies_per_sale: parseFloat(event.target.avg_cookies.value),
        owner: user.id,
    };
    createResource(info);

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='w-3/4 p-2 mx-auto my-8 bg-emerald-300 rounded'>
          <h2 className='content-center text-center text-xl'>Create a Cookie Stand</h2>
          <div id='location_div' className='flex justify-evenly p-3 my-4' >
            <label for='location'>Location</label>
            <input name='location' id='location' placeholder='Enter a City' className='flex-auto ml-2 pl-1 border border-gray-700 rounded' />
          </div>
          <div className='flex flex-row justify-evenly'>
            <label>
              Min. Customers Per Hour
              <input name='min_cust' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <label>
              Max. Customers Per Hour
              <input name='max_cust' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <label>
              Avg. Cookies Per Sale
              <input name='avg_cookies' placeholder='0' className='block px-2 m-2 border border-gray-700 rounded' />
            </label>
            <button className='bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
'>Create</button>
          </div>
        </form>
    </>
  )
}