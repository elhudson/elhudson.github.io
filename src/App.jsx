import { css } from '@emotion/css'
import { Bio, Links, Title } from './components'
import About from './pages/bio'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Resume from './pages/resume'
import theme from './theme'
import Uri from 'jsuri'

function App() {
  const where = new Uri(window.location.href).anchor()
  return (
    <div className={css`
      a {
        color:unset;
        text-decoration:unset;
        &:hover {
          font-style:italic;
          text-decoration:underline;
          text-underline-offset:2px;
        }
      }
      button {
        background-color:rgba(0,0,0,0);
        border:${theme.border};
        font-family:'mono';
        &:hover {
          cursor: pointer;
          text-decoration:underline;
          text-underline-offset:1px;
        }
      }
    `}>
      {where == "" ?
        <Homepage /> :
        <>
          <Header />
          {where == 'about' && <About />}
          {where == 'projects' && <Projects />}
          {where == 'blog' && <Blog />}
          {where == 'contact' && <Contact />}
          {where == 'resume' && <Resume />}
        </>}
    </div>
  )
}

function Header() {
  return (
    <div className={css`
      display:flex;
      position:sticky;
      justify-content:space-between;
      margin:0px;
      padding:10px;
      margin-bottom:20px;
      border-bottom:${theme.border};
      >div:last-child {
        width:fit-content;
        button {
          border:${theme.border};
          width:fit-content;
          height:fit-content;
          margin:5px;
          
        }
      }
    `}>
      <Title />
      <Links />
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
      >div:last-child {
        border-top:${theme.border};
      }
    `}>
      <Bio />
      <Links />
    </div>
  )
}

export default App
