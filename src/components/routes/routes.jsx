import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './protected-route'
import UserList from '../userlist/userlist'
import { NotFound } from '../../pages/notfound/notfound'

const AppRoutes = () => {
 
  const element = useRoutes([
    {
      element: <ProtectedRoute isAllowed />,
      children: [
        { path: '/attestation/', element: <UserList /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])
  return element
}
export default AppRoutes
