import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'

import { Route, Routes } from 'react-router-dom'
import SignIn from './screens/Signin'
import Discussion from './screens/Discussion_Forum'
import More from './screens/More'
import TestPage from './screens/TestScreen'
import Test from './screens/Test'
import Processing from './screens/Processing'
import Result from './screens/TestResult'

function App() {
  return (
    <div>
      <Header />
        <main>
            {/* <HomeScreen/> */}
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/discussion" element={<Discussion />}/>
              <Route path="/about" element={<More />}/>
              <Route path="/startTest" element={<TestPage/>} />
              <Route path="/test" element={<Test/>} />
              <Route path="/processing" element={<Processing/>} />
              <Route path="/result" element={<Result/>} />
            </Routes>
        </main>

      <Footer/>


    </div>
  );
}

export default App;
