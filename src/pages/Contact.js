import { motion } from 'framer-motion'
import './Content.css'
import axios from "axios"
import { useState } from "react"
import PageTitle from './PageTitle'
import ButtonLink from './ButtonLink'
import ButtonsContainer from './ButtonsContainer'
import { ReactComponent as Maya } from './images/me+maya.svg'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 10},
  visible: { opacity: 1, y: 0, transition: { delay: 1, duration:.4}}
}


function Contact(props) {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    const proxyurl = "https://mysterious-eyrie-54160.herokuapp.com/"
    fetch(proxyurl+`https://us-central1-jks-portfolio.cloudfunctions.net/sendMailOverHTTP?name=${name.value}&email=${email.value}&message=${encodeURI(message.value)}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setStatus("Sent")
        },
        (error) => {
        }
      )
    }
  return (
      <div style={{backgroundColor: props.color}}  className={"content-container content-container--contact"}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        className="content-container--inner">
          <PageTitle text={"Contact Me"} />
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="subheader">Please reach out if you have any <b>questions, comments, or requests</b>&mdash;I'd love to chat!</motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph" style={{marginBottom: '5px'}}>You can also find me online in these places:</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <ButtonsContainer>
            <ButtonLink text="Github" link="https://github.com/Juliet36" />
            <ButtonLink text="LinkedIn" link="https://www.linkedin.com/in/juliet-slade/" />
          </ButtonsContainer>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="side-by-side">
            <form onSubmit={handleSubmit}>
              <div className="small-field-container">
                <input type="text" id="name" placeholder="Name" required />
              </div>
              <div className="small-field-container">
                <input type="email" id="email" placeholder="Email"  required />
              </div>
              <div className="large-field-container">
                <textarea className="large-field" id="message" placeholder="Message" required />
              </div>
              <button className="submit-button" type="submit">{status}</button>
            </form>
            <Maya className="svg-maya" />
          </motion.div>
        </motion.div>
      </div>
  )
}

export default Contact