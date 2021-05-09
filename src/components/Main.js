import { motion } from 'framer-motion'

export default function Main(props) {
  return (
    <motion.main
      initial={{ zIndex: 2 }}
      animate={{ zIndex: 5 }}
      exit={{ zIndex: 2 }}
      transition={{ delay: .5 }}
      >
      {props.children}
    </motion.main>
  )
}