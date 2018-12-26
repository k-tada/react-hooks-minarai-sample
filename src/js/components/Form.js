import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import { MinaraiContext } from '../contexts/minarai'

const Wrapper = styled.div`
  & {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
`

const Input = styled(TextField)`
  && {
    margin: 5px;
  }
`
const Send = styled(Button)`
  && {
    margin: 5px;
  }
`

export default () => {
  const [text, setText] = useState('')
  const { send } = useContext(MinaraiContext)

  return (
    <Wrapper>
      <Input
        id="send-message"
        label="SendMessage"
        value={text}
        placeholder="Input message..."
        onChange={e => setText(e.target.value)}
        fullWidth
      />
      <Send color="primary" onClick={() => send(text)}>
        Send
      </Send>
    </Wrapper>
  )
}
