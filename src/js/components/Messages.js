import React, { useContext } from 'react'
import styled from 'styled-components'
import { MinaraiContext } from '../contexts/minarai'

const Wrapper = styled.div`
  & {
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`

const MessageBalloon = styled.div`
  & {
    display: flex;
    justify-content: ${({ align }) =>
      align === 'left' ? 'flex-start' : 'flex-end'};
  }
`

const Message = styled.div`
  & {
    width: 40%;
    border-radius: 5px;
    padding: 5px 10px;
    min-height: 1.5em;
  }
`

const OutgoingMessage = styled(Message)`
  & {
    background: lightsteelblue;
  }
`

const IncomingMessage = styled(Message)`
  & {
    background: lightgreen;
    display: flex;
    justify-content: flex-end;
  }
`

export default () => {
  const { outgoingMessage, incomingMessage } = useContext(MinaraiContext)
  return (
    <Wrapper>
      <MessageBalloon align="left">
        <OutgoingMessage>{outgoingMessage}</OutgoingMessage>
      </MessageBalloon>
      <MessageBalloon align="right">
        <IncomingMessage>{incomingMessage}</IncomingMessage>
      </MessageBalloon>
    </Wrapper>
  )
}
