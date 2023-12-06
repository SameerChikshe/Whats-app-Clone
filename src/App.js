import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PersonalChat } from './Components/PersonalChat';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>

    <div className="app">
      <div className='app__body'>
        <Sidebar/>
        {/* <Routes>
          <Route path="/" element={<PersonalChat/>}/>
        </Routes> */}

        <Routes>
          <Route path="/room/:chatId" element={<PersonalChat/>}/>
        </Routes>
        
      </div>
      </div>

        </BrowserRouter>

  );
}

export default App;
