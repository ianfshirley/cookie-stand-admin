import { hours, hourlySales, locations } from './data'
import React from 'react'
import CookieStandTableRow from './CookieStandTableRow';

export default function CookieStandTable({cookieStands, deleteStand}) {

  // calculate totals for totals row
  const totalRow = cookieStands.reduce((acc, stand) => {
    return cookieStand.hourly_sales.map((sale, i) => acc[i] + sale);
  }, Array(hours.length).fill(0));

  const dailyTotal = totalRow.reduce((sum, sale) => sum + sale, 0);

  return (
    cookieStands.length > 0 ? (
      <>
      <table className="w-1/2 mx-auto my-4 border">
        <thead>
          <tr>
            <th className="border border-grey bg-emerald-500">Location</th>
            {hours.map((hour) => {
              return <th className='bg-emerald-500' key={hour.id}>{hour}</th>
            })}
            <th className="border border-black bg-emerald-500">Totals</th>
          </tr>
        </thead>
        <tbody>

          {cookieStands.map(cookieStand => (
            <CookieStandTableRow key={cookieStand.id} cookieStand={cookieStand} deleteStand={deleteStand}/>
          ))}

          {/* {locations.map((location, idx) => {
            return <tr key={idx}>
              <td className="p-2 border border-black bg-emerald-500">{location}</td>
              {hourlySales.map((hour, idx) => {
                return <td className='bg-emerald-300' key={idx}>{hour}</td>
              })}
              <td className="p-2 border border-black bg-emerald-500">{hourlySales.reduce((sum, value) => sum + value, 0)}</td>
            </tr>
          })} */}

        </tbody>
        <tfoot>
          <tr className="p-2 border border-black bg-emerald-500">
            <tf>Totals</tf>
            {totalRow.map((total) => {
              return <tf key={total.id} className='bg-emerald-300'>{total}</tf>
            })}
            <tf>{dailyTotal}</tf>
          </tr>
        </tfoot>
      </table>
    </>
    ) 
    :
    (
      <h1>No Cookie Stands Created Yet</h1>
    )
  )
}

