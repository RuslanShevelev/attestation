import { Outlet } from 'react-router-dom'
import * as S from '../main/main.styles'

const Layout = () => (
  <S.wrapper>
    <S.container>
      <S.main>
        <Outlet />
      </S.main>
    </S.container>
  </S.wrapper>
)

export default Layout
