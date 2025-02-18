import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Header from "./components/Header"
import FileDisplay from './components/FileDisplay'

export default function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  function handleAudioReset() {
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {isAudioAvailable ? (
          <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset}/>
        ) : (<HomePage setFile={setFile} setAudioStream={setAudioStream}/>)}
      </section>
      <footer></footer>
    </div>
  )
}
