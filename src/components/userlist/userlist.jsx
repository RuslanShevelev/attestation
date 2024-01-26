import { useState } from 'react'
import { useGetAllUsersQuery } from '../../services/appService'
import * as S from './userlist.styles'
import Filter from '../filter/Filter'
import { ListItem } from './user'
import { UserInfoModal } from '../modal/userInfoModal'

const UserList = () => {
  const [findData, setFindData] = useState({per_page: 10})
  const [urlParams, setUrlParams] = useState()
  const sendRequest = () => {
    const newParams = new URLSearchParams([...Object.entries(findData)])
    setUrlParams(newParams.toString())
  }
  const { data: users, error, isLoading } = useGetAllUsersQuery(urlParams)
  console.log(users)
  // const [page, setPage] = useState(1)
  // const [perPage, setPerPage] = useState(5)
  const [modal, setModal] = useState('')

  return (
    <S.mainCentalBlock>
      <S.centalBlockSearch className="search">
        <S.searchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.searchSvg>
        <S.searchText
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(e) => {
            e.stopPropagation()
            setFindData({ ...findData, q: e.target.value })
          }}
        />
      </S.centalBlockSearch>
      <S.filterBlock>
        {users && <Filter data={findData} setData={setFindData} />}
        {/* {users && <Filter data={findData} setData={setFindData}/>} */}
        <S.userFindBtn onClick={sendRequest}>Найти</S.userFindBtn>
      </S.filterBlock>
      <S.centalBlockH2>Пользователи:</S.centalBlockH2>
      <S.centalBlockContent>
        <S.contentTitle>
          <S.titleCol01>avatar & login</S.titleCol01>
          <S.titleCol02>page on GitHub</S.titleCol02>
          <S.titleCol04>details</S.titleCol04>
        </S.contentTitle>
        <S.contentUserList>
          {(error && error.status !== 422) && (
            <li key={1} style={{ color: 'red' }}>
              Не удалось загрузить пользователей, попробуйте позже:{' '}
              {error.status}
            </li>
          )}
          {isLoading &&
            Array(10)
              .fill()
              .map(() => <ListItem key={Math.random()} />)}
          {users?.items?.length ? (
            users.items.map((user) => (
              <ListItem key={user?.id} user={user} setModal={setModal} />
            ))
          ) : (
            <S.filterNotFound>
              Пользователей, соответствующих вашему запросу, не найдено
              <img
                src="/img/smile_crying.png"
                alt="crying"
                style={{ width: 52, height: 52 }}
              />
            </S.filterNotFound>
          )}
        </S.contentUserList>
      </S.centalBlockContent>
      {modal && <UserInfoModal url={modal} closeModal={setModal} />}
    </S.mainCentalBlock>
  )
}
export default UserList
