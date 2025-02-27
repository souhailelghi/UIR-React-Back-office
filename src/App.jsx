import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import AssistanteForm from './components/Assistante/AssistanteForm'
// import TraineeForm from './components/Trainee/TraineeForm'
import Home from './components/Home/Home'
// import AssistanteTable from './components/Assistante/AssistanteTable'
import DirecteurTable from './components/Directeur/DirecteurTable'
import Header from './components/UI/Header/Header'
import DirecteurDashboard from './components/Directeur/DirecteurTable'
import DirecteurForm from './components/Directeur/DirecteurForm'
// import DocumentPage from './components/Directeur/DocumentPage'
import UploadDoc from './components/Directeur/UploadDoc'
// import TraineeTable from './components/Directeur/TraineeTable'


function App() {

  return (
    <div className=''>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='traineeForm' element={<TraineeForm />} /> */}
          {/* <Route path='assistanteForm' element={<AssistanteForm />} /> */}
          {/* <Route path='assistanteTable' element={<AssistanteTable />} /> */}
          <Route path='directeurDash' element={<DirecteurTable />} />
          <Route path='directeurTable' element={<DirecteurTable />} />
          {/* <Route path='traineeTable' element={<TraineeTable />} /> */}
          <Route path='directeurForm' element={<DirecteurForm/>} />
          {/* <Route path="/documents/:type" element={<DocumentPage/>}/> */}
          <Route path="/uploadDoc" element={<UploadDoc/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
