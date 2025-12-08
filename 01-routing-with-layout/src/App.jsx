import {BrowserRouter , Routes , Route , Link, useNavigate , Outlet} from "react-router-dom"
import './App.css'

function App() {
  return <div>
    <BrowserRouter>
        
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Landing/>}/>
            <Route path="jee/class-11-program" element={<Class11Program/>}/>
            <Route path="jee/class-12-program" element={<Class12Program/>}/>
            <Route path="*" element={<ErrorPage/>}/>

          </Route>
            

        </Routes>
    </BrowserRouter>
  </div> 
}

function Layout(){
    return <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
}

function Header(){
  return <div>
        <Link to="/"> Allon </Link>
        |
        <Link to="/jee/class-11-program">Class 11</Link>
        |
        <Link to="/jee/class-12-program"> Class 12</Link>
        <br/>
        <br/>
  </div>
}

function Footer(){
  return <>
  footer 
  </>
    
}

function ErrorPage(){
  return <div>
    Please try again later !
  </div>
}


function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div>
    JEE Coaching Programs for Class 12th Students !
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

function Class11Program(){
  return <div>
    JEE Coaching Programs for Class 11th students ! 
    <Link to="/">
        <button>Go back to landing page</button>
    </Link>
    
  </div>
}

function Landing(){
   return <>
    Welcome to Allon Coaching Classes.
   </>
   
}

export default App

