import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import CookieStandTable from './CookieStandTable'
import Footer from '../components/Footer'


export default function CookieStandAdmin() {
  return (
    <>
      <Header />
      <main>
        <CreateForm />
        <CookieStandTable />
      </main>
      <Footer />
    </>
  )
}