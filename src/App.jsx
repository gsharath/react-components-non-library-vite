import { useState } from 'react'
import {ButtonNonLibrary} from './components/Button';
import {TitleNonLibrary} from './components/Title';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TitleNonLibrary>Title Non Library</TitleNonLibrary>
      <ButtonNonLibrary color={'red'}>Button Non Library</ButtonNonLibrary>
    </>
  )
}

export default App
