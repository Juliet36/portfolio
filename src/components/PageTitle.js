import './PageTitle.css'
import { motion } from 'framer-motion'

const text = {
  hidden: { x: -10, y: 10},
  visible: { x: 0, y: 0, transition: { delay: .6, duration:.5}}
}
export default function PageTitle(props) {
  let { text } = {...props}
  let title = text
  if (text.split(' ').lenght > 1) {
    title = (<>text.split(' ')[0] <br className="optional-br"/>text.split(' ')[1]</>)
  }
  return (
    <>
      <h1>
      {title}
      </h1>
      <motion.h1
        variants={text}
        initial="hidden"
        animate="visible"
        className="shadow">
        {title}
      </motion.h1>
    </>
  )
}

