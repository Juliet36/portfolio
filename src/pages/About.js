import './Content.css'
import './About.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PieChart } from 'react-minimal-pie-chart'
import { ReactComponent as Dog } from '../images/me+dog.svg'
import { HOBBIES, EMOTIONS } from '../constants/hobbies'
import PageTitle from '../components/PageTitle'
import ButtonsContainer from '../components/ButtonsContainer'
import ButtonLink from '../components/ButtonLink'
import Label from '../components/Label'

function randomGenerator() {
  let prep = " A"
  let hobby = HOBBIES[Math.floor(Math.random() * HOBBIES.length)]
  let emotion = EMOTIONS[Math.floor(Math.random() * EMOTIONS.length)]
  if (['A','E','I','O','U'].includes(emotion.charAt(0))) {
    prep = " An"
  }
  let descriptor = `${prep} ${emotion} ${hobby}.`
  return descriptor.toLowerCase()
}

function About(props) {
  const [description, setDescription] = useState("")
  const [total, setTotal] = useState(0)
  const [yes, setYes] = useState(0)
  const [no, setNo] = useState(0)
  const [answer, setAnswer] = useState("")
  
  useEffect(() => {
    setDescription(randomGenerator())
    const proxyurl = "https://mysterious-eyrie-54160.herokuapp.com/"
    fetch(proxyurl+`https://us-central1-jks-portfolio.cloudfunctions.net/getCounts`)
      .then(res => res.json())
      .then(
        (result) => {
          setTotal(result.yes + result.no)
          setYes(result.yes)
          setNo(result.no)
        },
        (error) => {
          setTotal(total)
          setYes(yes)
          setNo(no)
        }
      )
  }, [])
  
  function answerQuestion(answer) {
    setAnswer(answer)
    answer = answer.toLowerCase()
    console.log(answer)
    const proxyurl = "https://mysterious-eyrie-54160.herokuapp.com/"
    fetch(proxyurl+`https://us-central1-jks-portfolio.cloudfunctions.net/addResult?type=${answer}`)
      .then(res => res.json())
      .then(
        (result) => {
          setTotal(total+1)
          if (answer === "yes") {
            setYes(result.count)
          } else {
            setNo(result.count)
          }
        },
        (error) => {
          setTotal(total)
        }
      )
  }
  
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 1
      }
    }
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 2
      }
    }
  }

  return (
        <div style={{backgroundColor: props.color}} className={"content-container content-container--home"}>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="content-container--inner">
            <PageTitle text={"Hello!"} />
            <h2>I'm <b>Juliet Slade</b>, a <b>web developer</b> and <b>more</b>.</h2>
            <h2>You are <b>visiting my site</b>, and are
              <motion.span
                className="load-screen--message"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
              <b>
              {description.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
              </b>
              </motion.span>
            </h2>
            <div className="side-by-side mobile-flex-start">
              <div className="top-bottom" style={{maxWidth: '800px'}}>
                <div>
                  <p className="body-paragraph" style={{marginBottom: "5px"}}>Did I get it right?</p>
                  {
                    !answer &&
                    <ButtonsContainer>
                      <ButtonLink text="Yes" link="#" handleClick={answerQuestion} />
                      <ButtonLink text="No" link="#" handleClick={answerQuestion} />
                    </ButtonsContainer>
                  }
                  <p className={"body-paragraph body-paragraph--larger" + (answer ? " reveal " : " invisible ") + answer}>
                    <b>{answer}?</b><br/>
                    {answer === "Yes" ? "Nice!" : "Ah, bummer"}
                  </p>
                </div>
                <div className={"right-side" + (answer ? " reveal" : " invisible")}>
                  <p className="body-paragraph"><b>Times I've Gotten It Right So Far...</b></p>
                  <div className="side-by-side align-start-mobile" style={{marginTop: 0}}>
                    <PieChart className="pie-chart"
                      data={[
                        { title: 'One', value: no, color: '#000000' },
                        { title: 'Three', value: yes, color: '#FFBA08' }
                      ]}
                    />
                    <div className="top-bottom">
                      <Label text={`Yes (${yes})`} color={"#FFBA08"}/>
                      <Label text={`No (${no})`} color={"#000000"}/>
                    </div>
                  </div>
                </div>
              </div>
              <Dog className="svg--dog" />
            </div>
          </motion.div>
        </div>
  )
}

export default About