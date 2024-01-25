import { useState } from 'react'
import './App.css'
import DisplayParagraph from './DisplayParagraph';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { paraLengthAtom } from './paraLength';
import LengthInput from './lengthInput';

function App() {
  return (
    <RecoilRoot>
      <div id='title'>Para Generator</div>
      <LengthInput></LengthInput>
      <DisplayParagraph></DisplayParagraph>
    </RecoilRoot>
  )
}

export default App

