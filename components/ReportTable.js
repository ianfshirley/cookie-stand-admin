import {hours, hourlySales, locations}   from './data'

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
                      <td>516</td>
                  </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Totals</td>
            <td>376</td>
            <td>333</td>
            <td>303</td>
            <td>357</td>
            <td>421</td>
            <td>313</td>
            <td>375</td>
            <td>336</td>
            <td>378</td>
            <td>386</td>
            <td>317</td>
            <td>378</td>
            <td>291</td>
            <td>365</td>
            <td>4929</td>
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