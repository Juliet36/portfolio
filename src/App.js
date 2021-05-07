import React, { useState, useEffect } from 'react'
import './App.css';
import Content from './Content'

import Navigation from './Navigation'

import {
  Switch,
  Route,
  useLocation,
  useHistory
} from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Projects from './Projects'
import Routes from './Routes'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ReactComponent as Hamburger } from './images/hamburger.svg'

const pages = [
  {
    name: 'Home',
    color: '#FCFAFA',
    position: 0,
    key: 'home'
  },
  {
    name: 'Projects',
    color: '#FFBA08',
    position: 1,
    key: 'projects'
  },
  {
    name: 'About Me',
    color: '#EB441A',
    position: 2,
    key: 'about-me'
  },
  {
    name: 'Contact',
    color: '#3F88C5',
    position: 3,
    key: 'contact'
  }
  ]

// function App() {
//   const [left, setLeft] = useState([pages[0]])
//   const [right, setRight] = useState(pages.slice(2))
//   const [current, setCurrent] = useState(pages[1])
//   const [change, setChange] = useState(false)
//   const [direction, setDirection] = useState('right')
//   const [currentIndex, setCurrentIndex] = useState(1)
//   const [selectedIndex, setSelectedIndex] = useState(1)
//   const [disableClick, setDisableClick] = useState(false)
// 
//   function handleClick(e) {
//     console.log(e)
//     let currentIndex = current.position
//     let index = pages.filter(x => x.key === e)[0].position
//     // setLeft(pages.slice(0, index))
//     // setRight(pages.slice(index+1))
//     setChange(true)
//     setSelectedIndex(index)
//     if (currentIndex < index) {
//       setDirection('right')
//     } else {
//       setDirection('left')
//     }
//     console.log(selectedIndex)
//     setDisableClick(true)
//     setTimeout(() => {
//       setChange(false)
//       setCurrentIndex(index)
//       setCurrent(pages[index])
//       setDisableClick(false)
//     },2000)
//   }
// 
//   return (
//     <div className="App">
//       {pages.map((page) => 
//         <Page
//           animate={change}
//           key={page.number}
//           info={page}
//           isCurrent={page.position === currentIndex}
//           isSelected={page.position === selectedIndex}
//           handleClick={disableClick ? ()=>{} : handleClick} />
//       )}
//     </div>
//   );
// }

// export default App;



export default function App() {
  const location = useLocation()
  const history = useHistory()
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)
  const controls = useAnimation()
  const otherControls = useAnimation()
  const [direction, setDirection] = useState('right')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  
  const getPos = (pathname) => {
    switch (pathname) {
      case '/projects':
        return 1
      case '/about-me':
        return 2
      case '/contact':
        return 3
      default:
        return 0
    }
  }
  function handleMenuClick() {
    setShowMenu(!showMenu)
  }
  
  useEffect(() => {
       // console.log(location)
       setCurrent(getPos(location.pathname))
   },[])

  function updateOrder(index) {
    if (showMenu) {
      setShowMenu(false)
    }
    setPrev(current)
    if (current < index) {
      setDirection('right')
    } else {
      setDirection('left')
    }
    setIsTransitioning(true)
    setCurrent(index)
    setShow(false)
    window.setTimeout(function() {
      setIsTransitioning(false)
      setShow(true)
    }, 500)
  }

  return (
    loading ?
      (<div>
      </div>) :
      (<div>
        <nav style={{zIndex: showMenu ? 15 : 4}}>
          <ul className={ showMenu ? "menu-show" : "menu-hide"}>
            {pages.map((page, i) => 
              <Navigation key={i} direction={direction} animate={isTransitioning} show={show} current={current} prev={prev} position={i} location={page.key} handleClick={updateOrder} info={page} />
            )}
          </ul>
        </nav>
        <div className={"hamburger" + (showMenu ? " animate-cross": " animate-burger")}>
          {
              <Hamburger onClick={handleMenuClick} />
          }
        </div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Routes pages={pages} handleMenuClick={handleMenuClick} showMenu={showMenu} />
          </Switch>
        </AnimatePresence>
      </div>)
  )
}