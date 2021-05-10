import { motion } from 'framer-motion'
import { fadeUp } from '../constants/animations'
import { PROJECTS } from '../constants/projects.js'
import ProjectSection from '../components/ProjectSection.js'
import PageTitle from '../components/PageTitle'

const SECTION_NAMES = Object.keys(PROJECTS)

function Projects(props) {
  const { color } = {...props}
  return (
      <div style={{backgroundColor: color}}  className={"content-container content-container--projects"}>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="content-container--inner">
          <PageTitle text={"Projects"} />
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="body-paragraph">
            I’ve been working at a startup called AeBeZe for almost 4 years as the only permanent engineer, so I’ve gotten to work on and have ownership of all kinds of projects.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {
              SECTION_NAMES.map((section, i) => 
                <ProjectSection key={i} data={PROJECTS[section]} name={section} />
              )
            }
          </motion.div>
        </motion.div>
      </div>
  )
}

export default Projects