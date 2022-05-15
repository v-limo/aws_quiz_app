import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Paper } from '@mui/material'

import { fetchQ } from './features.questions/questions.sync'
import { selectQuestions } from './features.questions/questionsSlice'
import NoMatch from './pages/404'
import Home from './pages/home'
import Layout from './pages/layout'

const App = () => {
  let { questions } = useSelector(selectQuestions)

  let dispatch = useDispatch()

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(fetchQ())
    }
  }, [dispatch, questions.length])

  return (
    <Paper sx={{ minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </Paper>
  )
}

export default App
