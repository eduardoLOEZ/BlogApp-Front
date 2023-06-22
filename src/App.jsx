import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/registerPage'
import LoginPage from './pages/loginPage'
import AuthProvider from './context/authContext'
import Main from './pages/main'
import PrivateRoute from './components/privateRoute'
import BlogContext from './context/blogContext'
import './App.css'

function App() {


  return (
    <AuthProvider>
      <BlogContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<h1>Hola</h1>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
           


            <Route element={<PrivateRoute />}>
              <Route path="/main" element={<Main />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </BlogContext>
    </AuthProvider>
  )
}

export default App
