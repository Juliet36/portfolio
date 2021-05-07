import './PageTitle.css'
import { motion } from 'framer-motion'

const text = {
  hidden: { x: -10, y: 10},
  visible: { x: 0, y: 0, transition: { delay: .6, duration:.5}}
}
export default function PageTitle(props) {
  return (
    <>
      {
        props.text.split(' ').length > 1 ?
          <h1>
          {props.text.split(' ')[0]} <br className="optional-br"/>{props.text.split(' ')[1]}
          </h1>
          :
          <h1
          >
          {props.text}
          </h1>
      }
      {
        props.text.split(' ').length > 1 ?
          <motion.h1
            variants={text}
            initial="hidden"
            animate="visible"
          className="shadow">
          {props.text.split(' ')[0]} <br className="optional-br"/>{props.text.split(' ')[1]}
          </motion.h1>
          :
          <motion.h1 
            variants={text}
            initial="hidden"
            animate="visible"
          className="shadow">{props.text}</motion.h1>
      }
    </>
  )
}

