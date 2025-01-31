import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Components/Home'
import './assets/css/style.css';
import RootLayout from './Components/RootLayout';
import Context from './ContextAPI/Context';
import AddQuiz from './Components/AddQuiz';
import ViewQuiz from './Components/ViewQuiz';
import Register from './Components/Register';
import Login from './Components/Login';
import PlayQuiz from './Components/PlayQuiz';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Context>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='add-quiz' element={<AddQuiz />} />
          <Route path='view-quiz' element={<ViewQuiz />} />
          <Route path='play-quiz' element={<PlayQuiz />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Context>

  </BrowserRouter>

)
