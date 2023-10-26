import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes'
import axios from 'axios'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { useQuery } from '@tanstack/react-query'
 function App() {

    // useEffect(() =>{
    //    fetchApi()
    // },[])
    // console.log('process.env.REACT_BACKEND_API_URL', process.env.REACT_BACKEND_API_URL)
    const fetchApi = async () =>{
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
      console.log('res', res)
      return res.data
    }
    const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
    console.log('query', query)
  
  
  return (
    <div>
     <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent : Fragment
          return (
            <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }/>
          )
        })}
      </Routes>
     </Router>
    </div>
  )
}

export default App