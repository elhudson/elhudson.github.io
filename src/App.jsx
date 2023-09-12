import {css} from '@emotion/css'
import {Bio, Links} from './components'
import About from './pages/bio'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contact from './pages/contact'
import theme from './theme'
import Uri from 'jsuri'

function App() {
  const where=new Uri(window.location.href).anchor()
  console.log(where)
  return(
    <div className={css`
      button {
        background-color:rgba(0,0,0,0);
        border:${theme.border};
        font-family:'mono';
      }
    `}>
      {where=="" && <Homepage />}
      {where=='about' && <About />}
      {where=='projects' && <Projects />}
      {where=='blog' && <Blog />}
      {where=='contact' && <Contact />}
    </div>
  )
}

function Homepage() {
  return (
    <div className={css`
      border:${theme.border};
      text-align:center;
      width:fit-content;
      position:absolute;
      top:50%;
      right:50%;
      transform:translate(50%, -50%);
    `}>
        <Bio/>
        <Links />
    </div>
  )}

export default App
