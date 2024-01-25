import Skeleton from 'react-loading-skeleton'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useGetUserInfoQuery } from '../../services/appService'
import * as S from './userInfo.styles'

export const UserInfoModal = ({ url, closeModal }) => {
  const { data: userInfo, isLoading } = useGetUserInfoQuery(url)

  return (
    <S.modalBg onClick={() => closeModal('')}>
      <S.mainContainer onClick={(e) => e.stopPropagation()}>
        <S.modalContent>
          <S.btnClose onClick={() => closeModal('')} />
          <S.settingsLeft>
            {isLoading ? (
              <Skeleton width={170} height={170} circle />
            ) : (
              <S.settingsImg
                style={{
                  backgroundImage: `url(${userInfo?.avatar_url})`,
                }}
              />
            )}
            <S.userName>
              {isLoading ? <Skeleton /> : `Имя: ${userInfo?.name}`}
            </S.userName>
            {userInfo?.company && (
              <S.userInf>
                {isLoading ? <Skeleton /> : `Компания: ${userInfo?.company}`}
              </S.userInf>
            )}
            <S.userInf>
              {isLoading ? <Skeleton /> : `${userInfo?.bio}`}
            </S.userInf>
          </S.settingsLeft>
          <S.userInfoRight>
            <S.userName>Информация о пользователе:</S.userName>
            {userInfo?.email && (
              <S.userInf>
                {isLoading ? <Skeleton /> : `E-mail:  ${userInfo?.email}`}
              </S.userInf>
            )}
            {userInfo?.blog && (
              <S.userInf>
                {isLoading ? <Skeleton /> : `Блог:  ${userInfo?.blog}`}
              </S.userInf>
            )}
            <S.userInf>
              {isLoading ? <Skeleton /> : `Расположение: ${userInfo?.location}`}
            </S.userInf>
            <S.userInf>
              {isLoading ? <Skeleton /> : `Подписчиков: ${userInfo?.followers}`}
            </S.userInf>
            <S.userInf>
              {isLoading ? (
                <Skeleton />
              ) : (
                `Публичных репозиториев: ${userInfo?.public_repos}`
              )}
            </S.userInf>

            <S.userInf>
              {userInfo ? (
                `Зарегистрирован на GitHub с ${format(
                  new Date(userInfo?.created_at),
                  'MMMM yyyy',
                  {
                    locale: ru,
                  }
                )}`
              ) : (
                <Skeleton />
              )}
            </S.userInf>
            <S.userInf>
              {userInfo ? (
                `Последнее обновление: ${format(
                  new Date(userInfo?.updated_at),
                  'dd MMMM yyyy',
                  {
                    locale: ru,
                  }
                )}`
              ) : (
                <Skeleton />
              )}
            </S.userInf>
          </S.userInfoRight>
        </S.modalContent>
      </S.mainContainer>
    </S.modalBg>
  )
}
