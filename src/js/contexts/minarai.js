import React, { createContext, useState, useMemo, useCallback } from 'react'
import io from 'socket.io-client'
import MinaraiClient from 'minarai-client-sdk-js-socket-io'

export const MinaraiContext = createContext()

export const MinaraiContextProvider = ({ children }) => {
  const [outgoingMessage, setOutgoingMessage] = useState('')
  const [incomingMessage, setIncomingMessage] = useState('')

  const minaraiClient = useMemo(() => {
    const cli = new MinaraiClient({
      io: io,
      lang: 'ja-JP',
      socketIORootURL: 'minarai url here',
      socketIOOptions: {},
      applicationId: 'your application id here',
      applicationSecret: 'your application secret here',
      clientId: 'dummy',
      userId: 'dummy',
      deviceId: 'dummy',
      debug: true,
      silent: false,
    })
    cli.on('sync', data => {
      setOutgoingMessage(data.body.message)
    })
    cli.on('message', data => {
      setIncomingMessage(
        data.body.messages
          .map(m => m.utterances.map(mm => mm.text).join('\n'))
          .join('\n')
      )
    })

    cli.init()

    return cli
  }, [])

  const send = useCallback(message => minaraiClient.send(message), [])

  return (
    <MinaraiContext.Provider value={{ outgoingMessage, incomingMessage, send }}>
      {children}
    </MinaraiContext.Provider>
  )
}
