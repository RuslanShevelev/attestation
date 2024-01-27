import { useState, useEffect } from 'react'
import { useGetAllUsersQuery } from '../../services/appService'
import * as S from './userlist.styles'
import Filter from '../filter/Filter'
import { ListItem } from './user'
import { UserInfoModal } from '../modal/userInfoModal'
import { createPages } from '../../utils/pagescreator'
import ButtonSVG from '../buttonSVG/ButtonSVG'

const UserList = () => {
  const [findData, setFindData] = useState({})
  const [query, setQuery] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(10)
  const [urlParams, setUrlParams] = useState('')
  const [modal, setModal] = useState('')

  useEffect(() => {
    if (query) {
      const newParams = new URLSearchParams([...Object.entries(query)])
      newParams.append('page', currentPage)
      newParams.append('per_page', perPage)
      setUrlParams(newParams.toString())
    }
  }, [query, currentPage, perPage])

  const {
    data: users,
    error,
    isLoading,
    isSuccess,
  } = useGetAllUsersQuery(urlParams)

  const pagesCount = users ? Math.ceil(users.total_count / perPage) : null
  const pages = []
  createPages(pages, pagesCount, currentPage)
  console.log(users)

  return (
    <S.mainCentalBlock>
      <div>
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
          {users && <Filter data={query} setData={setQuery} />}
          {/* {users && <Filter data={findData} setData={setFindData}/>} */}
          <S.userFindBtn
            onClick={() => {
              setCurrentPage(1)
              setQuery((prev) => ({ ...prev, ...findData }))
            }}
          >
            Найти
          </S.userFindBtn>
        </S.filterBlock>
        <S.centalBlockH2>{isSuccess && 'Пользователи'}</S.centalBlockH2>
        {isSuccess && (
          <S.centalBlockContent>
            <S.contentTitle>
              <S.titleCol01>avatar & login</S.titleCol01>
              <S.titleCol02>page on GitHub</S.titleCol02>
              <S.titleCol04>details</S.titleCol04>
            </S.contentTitle>
            <S.contentUserList>
              {error && error.status !== 422 && (
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
        )}
      </div>
      {users?.items?.length && (
          <S.pageList>
          {currentPage > 1 && <ButtonSVG name="prev" click={() => setCurrentPage(currentPage - 1)}/>}
            {pages.map((item) => (
              <S.pageItem
                key={item}
                $active={currentPage === item}
                onClick={() => {
                  setCurrentPage(item)
                }}
              >
                {item}
              </S.pageItem>
            ))}
          <ButtonSVG name="next" />
          </S.pageList>
      )}

      {modal && <UserInfoModal url={modal} closeModal={setModal} />}
    </S.mainCentalBlock>
  )
}

export default UserList
