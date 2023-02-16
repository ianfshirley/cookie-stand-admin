import { hours, hourlySales, locations } from './data'
import React from 'react'

export default function ReportTable() {
  return (
  //   props.cookieStands.length > 0 ? (
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
          {locations.map((location, idx) => {
            return <tr key={idx}>
              <td className="p-2 border border-black bg-emerald-500">{location}</td>
              {hourlySales.map((hour, idx) => {
                return <td className='bg-emerald-300' key={idx}>{hour}</td>
              })}
              <td className="p-2 border border-black bg-emerald-500">{hourlySales.reduce((sum, value) => sum + value, 0)}</td>
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-2 border border-black bg-emerald-500">Totals</td>
            {hours.map((hour, idx) => {
              return <td className='bg-emerald-300' key={idx}>{  }</td>
            })}
          </tr>
        </tfoot>
      </table>
    </>
    // ) 
    // :
    // (
    //   <h1>No Cookie Stands Created Yet</h1>
    // )
  )
}

