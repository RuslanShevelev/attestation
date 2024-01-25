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
  // const userId = useSelector((state) => state.auth.id)
  // const dispatch = useDispatch()
  // const currentTrack = useSelector((state) => state.tracks.currentTrack)
  // const isPlaying = useSelector((state) => state.tracks.isPlaying)
  // const filteredTracks = useSelector((state) => state.tracks.filteredTracks)
  // const filterIsActive = useSelector((state) => state.tracks.filter)
  // const tracks = filterIsActive ? filteredTracks : users
  const [findData, setFindData] = useState({})
  const { data: users, error, isLoading } = useGetAllUsersQuery(findData.q)
  console.log(findData)
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
      <S.centalBlockH2>Пользователи:</S.centalBlockH2>
      {users && <Filter />}
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
