import './ButtonLink.css'

export default function ButtonLink(props) {
  const { text, link, hasShadow } = {...props}
  let button = (
    <div className={"button-link__main" + (hasShadow ? " button-link__main--shadow" : " button-link__main--plain")}>
      <p className="button__label">{text}</p>
    </div>
  )
  return (
    <>
    {
      props.handleClick ?
      <div
        onClick={() => props.handleClick(text)}
        className="button-link">
        {button}
      </div>
      :
      <a href={link} target="_blank" className="button-link">
        {button}
      </a>
    }
    </>
  )
}