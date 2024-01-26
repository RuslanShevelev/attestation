import { useState } from 'react'
import { useGetAllUsersQuery } from '../../services/appService'
// import {
//   // useDispatch,
//    useSelector } from 'react-redux'
// import {
//   setCurrentTruck,
//   selectFilterItem,
// } from '../../store/slices/tracksSlice'
import * as S from './Tracklist.styles'
import Filter from '../filter/Filter'
import { ListItem } from './Track'
import { UserInfoModal } from '../modal/userInfoModal'

const TrackList = () => {
  const [findData, setFindData] = useState({})
  const [urlParams, setUrlParams] = useState('q=Skypro')
  const sendRequest = () => {
    const newParams = new URLSearchParams([...Object.entries(findData)])
    setUrlParams(newParams.toString())
  }
  const { data: users, error, isLoading } = useGetAllUsersQuery(urlParams)
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
        <S.contentTitle className="playlist-title">
          <S.playlistTitleCol01>avatar & login</S.playlistTitleCol01>
          <S.playlistTitleCol02>page on GitHub</S.playlistTitleCol02>
          <S.playlistTitleCol03>details</S.playlistTitleCol03>
          <S.playlistTitleCol04>details</S.playlistTitleCol04>
        </S.contentTitle>
        <S.contentPlaylist>
          {error && (
            <li key={1} style={{ color: 'red' }}>
              Не удалось загрузить пользователей, попробуйте позже:{' '}
              {error.status}
            </li>
          )}
          {isLoading &&
            Array(10)
              .fill()
              .map(() => <ListItem key={Math.random()} />)}
          {users?.items?.length > 0 ? (
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
        </S.contentPlaylist>
      </S.centalBlockContent>
      {modal && <UserInfoModal url={modal} closeModal={setModal} />}
    </S.mainCentalBlock>
  )
}
export default TrackList
