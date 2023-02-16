import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import CookieStandTable from './CookieStandTable'
import Footer from '../components/Footer'
import useResource from '@/hooks/useResource'


export default function CookieStandAdmin(props) {

  const { resources, deleteResource } = useResource();

  return (
    <>
      <Header />
      <main>
        <CreateForm handleSubmit={props.handleSubmit}/>
        <CookieStandTable cookieStands={resources || []} deleteCookieStand={deleteResource}/>
      </main>
      <Footer />
    </>
  )
}