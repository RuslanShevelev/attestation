import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './protected-route'
import Main from '../../pages/main/main'
import { NotFound } from '../../pages/notfound/notfound'

const AppRoutes = () => {
 
  const element = useRoutes([
    {
      element: <ProtectedRoute isAllowed />,
      children: [
        { path: '/', element: <Main /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])
  return element
}
export default AppRoutes
