import './Content.css'
import './Experience.css'
import { motion } from 'framer-motion'
import { ReactComponent as CatText } from '../images/cat-text.svg'
import cat from '../images/me+cat.png'
import PageTitle from '../components/PageTitle'
import ButtonLink from '../components/ButtonLink'
import TechCollection from '../components/TechCollection'

const fadeUp = {
  hidden: { opacity: 0, y: 10},
  visible: { opacity: 1, y: 0, transition: { delay: 1, duration:.4}}
}

function Experience(props) {
  return (
      <div style={{backgroundColor: props.color}}  className={"content-container content-container--about-me"}>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          exit={{ opacity: 0 }} className="content-container--inner">
        <PageTitle text={"About Me"} />
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">Technologies I've worked with:</motion.p>
        <motion.div  initial="hidden" animate="visible" variants={fadeUp}>
          <TechCollection />
        </motion.div>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">I have 4 years of experience working in a <b>small start-up</b> as the <b>only in-house engineer</b>, helping to bring various ideas to reality. I’ve worked on <b>all kinds of projects across the stack</b>: making web apps, working on backend APIs, learning to create a google home app or a chrome extension, and serving as a liason between developers, designers, and the in between.</motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">I enjoy solving <b>interesting problems</b> and learning <b>new technologies</b>. As the only engineer I’ve learned to mostly support myself and where to answer my questions, but yearn for <b>collaboration</b> and to support and be supported.</motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">I went to <b>Sarah Lawrence College</b> (class of 2017) to study psychology and almost immediately found and pivoted to <b>Computer Science</b>. I worked my way through their entire CS catalog and worked as a <b>lab assistant</b> and <b>tutor</b> to share my love of coding with other students.</motion.p>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">I was born and raised in <b>Minnesota</b> and have now covered the coasts by going to school in <b>New York</b> and living the last four years in <b>San Francisco</b>. Besides coding I rock climb, play tennis, pat my dog, and draw.</motion.p>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} >
        <ButtonLink text="Send me an email!" link="mailto:juliet.slade@gmail.com" />
        </motion.div>
        <div style={{marginBottom: '100px'}}></div>
        <div className="svg--cat-container--outer">
          <div className="svg--cat--container">
            <img className="svg--cat" src={cat}/>
            <CatText className="svg--cat" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience