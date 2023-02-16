import CreateForm from '../components/CreateForm'
import CookieStandTable from './CookieStandTable'
import useResource from '@/hooks/useResource'


export default function CookieStandAdmin(props) {

  const { resources, deleteResource } = useResource();

  return (
    <>
      <main>
        <CreateForm handleSubmit={props.handleSubmit}/>
        <CookieStandTable cookieStands={resources || []} deleteCookieStand={deleteResource}/>
      </main>
    </>
  )
}