import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Messages from './Messages'
import { MinaraiContextProvider } from '../contexts/minarai'

const Main = styled.div`
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`

const Contents = styled.div`
  & {
    width: 80%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`

console.log('hogehoge')
console.log(MinaraiContextProvider)

export default () => {
  return (
    <MinaraiContextProvider>
      <Main>
        <Contents>
          <Form />
          <Messages />
        </Contents>
      </Main>
    </MinaraiContextProvider>
  )
}
