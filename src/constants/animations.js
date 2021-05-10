export const fadeUp = {
  hidden: { opacity: 0, y: 10},
  visible: { opacity: 1, y: 0, transition: { delay: 1, duration:.4}}
}

export const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 1
    }
  }
}

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 2
    }
  }
}