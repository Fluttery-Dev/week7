
import { RecoilRoot } from 'recoil'
import './App.css'
import ColorPicker from './components/ColorPicker'
import Display from './components/Display'

function App() {
  return (
    <RecoilRoot>
      <Display></Display>
      <ColorPicker></ColorPicker>
    </RecoilRoot>
  )
}

export default App
