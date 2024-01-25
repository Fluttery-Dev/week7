import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OtpLogin from './loginViaOtp'; // Ensure these paths are correct
import NumberInput from './numberInput';

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/loginViaOtp' element={<OtpLogin />} />
          <Route path='/' element={<NumberInput />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;