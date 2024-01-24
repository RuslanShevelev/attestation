// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { setCurrentIsLiked } from '../../store/slices/tracksSlice'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'
import ButtonSVG from '../buttonSVG/ButtonSVG'
// import { timePresent } from '../../utils/utils'
// import {
//   useAddToFavoritesMutation,
//   useRemoveFromFavoritesMutation,
// } from '../../services/appService'

export const ListItem = ({ user }) => {
  // const dispatch = useDispatch()
  // const [like] = useAddToFavoritesMutation()
  // const [dislike] = useRemoveFromFavoritesMutation()
  // const toggleLike = (id) => {
  //   if (isLiked) {
  //     dislike(id)
  //   } else {
  //     like(id)
  //   }
  //   if (current && current.id === track.id) {
  //     dispatch(setCurrentIsLiked(!isLiked))
  //   }
  // }
  console.log(user)
  return (
  <S.playlistItem
  // onClick={() => {
  //   if (user) {
  //     setCurrent(track.id)
  //   }
  // }}
  >
    <SkeletonTheme baseColor="#313131" highlightColor="#444" height={19}>
      <S.playlistTrack>
        <S.trackTitle>
          <S.trackTitleImage>
            {user && (
                <S.userAvatar src={user.avatar_url} alt="login" />
            )}

            {!user && <Skeleton width={51} height={51} />}
          </S.trackTitleImage>
          <div>
            <S.trackTitleLink>
              {user ? user?.login : <Skeleton width={356} />}
              {/* {track?.remix ? (
                <S.trackTitleSpan>({track.remix})</S.trackTitleSpan>
              ) : (
                ''
              )} */}
            </S.trackTitleLink>
          </div>
        </S.trackTitle>
        <S.trackAuthor>
          <S.trackAuthorLink href={`${user?.html_url}`} >
          {user ? "Перейти на страницу пользователя"
 : <Skeleton width={356} />}
          </S.trackAuthorLink>
        </S.trackAuthor>
        <S.trackAlbum>
          <S.trackAlbumLink>
            {/* {track ? track.album : <Skeleton width={250} />} */}
          </S.trackAlbumLink>
        </S.trackAlbum>
        {/* {track && (<div>{track.release_date}</div>)} */}
        <S.trackLikeTime>
          {user ? (
            <>
              <ButtonSVG
                // click={() => {
                //   toggleLike(track.id)
                // }}
                name="like"
                modification="tracklike"
                isActive
              />
              <S.trackTimeText>
                {/* {timePresent(track.duration_in_seconds)}: */}
              </S.trackTimeText>
            </>
          ) : (
            <Skeleton width={50} />
          )}
        </S.trackLikeTime>
      </S.playlistTrack>
    </SkeletonTheme>
  </S.playlistItem>
)}
