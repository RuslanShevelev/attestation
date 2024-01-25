import { styled } from 'styled-components'

export const modalBg = styled.div`
  position: fixed;
  inset: 0;
  width: auto;
  height: auto;
  background-color: rgba(182, 114, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`
export const mainContainer = styled.div`
  background-color: #181818;
  max-width: 1178px;
  margin: 0 auto;
  padding: 30px 30px;
  border-radius: 10px;
`
export const modalContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  gap: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const settingsLeft = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const settingsImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #f0f0f0;
  background-size: cover;
`
export const userInfoRight = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const userName = styled.h3`
  width: auto;
  margin-bottom: 10px;
`
export const userInf = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 32px */
  color: #5f5f5f;
`
export const btnClose = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    &::after,
    &::before {
      background-color: #b672ff;
    }
  }
`
