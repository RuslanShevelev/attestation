import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './user.styles'

export const ListItem = ({ user, setModal }) => (
  <S.userListItem>
    <SkeletonTheme baseColor="#313131" highlightColor="#444" height={19}>
      <S.userListUser>
        <S.userTitle>
          <S.userTitleImage>
            {user && <S.userAvatar src={user.avatar_url} alt="login" />}

            {!user && <Skeleton width={51} height={51} />}
          </S.userTitleImage>
          <div>
            <S.userTitleLink>
              {user ? user?.login : <Skeleton width={356} />}
            </S.userTitleLink>
          </div>
        </S.userTitle>
        <S.userAuthor>
          <S.userAuthorLink href={`${user?.html_url}`}>
            {user ? user?.html_url : <Skeleton width={356} />}
          </S.userAuthorLink>
        </S.userAuthor>
        <S.userDetails>
          {user ? (
            <S.userInfoBtn onClick={() => setModal(user?.login)}>
              get more info
            </S.userInfoBtn>
          ) : (
            <Skeleton width={50} />
          )}
        </S.userDetails>
      </S.userListUser>
    </SkeletonTheme>
  </S.userListItem>
)
