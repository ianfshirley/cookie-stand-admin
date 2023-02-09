import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'


export default function CookieStandAdmin() {
  return (
    <>
      <Header />
      <main>
        <CreateForm />
        <ReportTable />
      </main>
      <Footer />
    </>
  )
}