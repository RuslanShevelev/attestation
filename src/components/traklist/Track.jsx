// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { setCurrentIsLiked } from '../../store/slices/tracksSlice'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'
// import ButtonSVG from '../buttonSVG/ButtonSVG'
// import { timePresent } from '../../utils/utils'
// import {
//   useAddToFavoritesMutation,
//   useRemoveFromFavoritesMutation,
// } from '../../services/appService'

export const ListItem = ({ user, setModal }) => 
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
  // console.log(user)
   (
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
          {user ? user?.html_url
 : <Skeleton width={356} />}
          </S.trackAuthorLink>
        </S.trackAuthor>
        <S.trackAlbum>
          <S.trackAlbumLink href={`${user?.gists_url
}`}>
          {user ? user?.repos_url

 : <Skeleton width={356} />}
          </S.trackAlbumLink>
        </S.trackAlbum>
        {/* {track && (<div>{track.release_date}</div>)} */}
        <S.trackLikeTime>
          {user ? (
              <S.userInfoBtn onClick={() => setModal(user?.login)}>
               get more info
              </S.userInfoBtn>
          ) : (
            <Skeleton width={50} />
          )}
        </S.trackLikeTime>
      </S.playlistTrack>
    </SkeletonTheme>
  </S.playlistItem>
)
