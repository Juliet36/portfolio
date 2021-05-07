import './Label.css'

export default function Label(props) {
  const { text, color } = {...props}
  return (
    <div className="label">
      <div className="color-square" style={{backgroundColor: color}}></div>
      <p className="label-text">{text}</p>
    </div>
  )
}