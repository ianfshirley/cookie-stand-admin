import {hours, hourlySales, locations}   from './data'
import React from 'react'

export default function ReportTable() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((hour) => {
              return <th key={hour.id}>{hour}</th>
            })}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
        {locations.map((location, idx) => {
            return <tr key={idx}>
                      <td>{location}</td>
                      {hourlySales.map((hour, idx) => {
                        return <td key={idx}>{hour}</td>
                      })}
                      <td>{hourlySales.reduce((sum, value) => sum + value, 0)}</td>
                  </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Totals</td>
            {hours.map((hour, idx) => {
              return <td key={idx}>{}</td>
            })}
          </tr>
        </tfoot>
      </table>
    </>
  )
}

// props.cookieStands.length > 0 ? 
// : (
//   <h1>No Cookie Stands Created Yet</h1>
// );