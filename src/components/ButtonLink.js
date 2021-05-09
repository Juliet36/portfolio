import './ButtonLink.css'

export default function ButtonLink(props) {
  const { text, link, hasShadow } = {...props}
  return (
    <>
    {
      props.handleClick ?
      <div
        onClick={() => props.handleClick(text)}
        className={"button-link" + (hasShadow ? " button-link--plain" : " button-link--shadow") + (props.partial ? " button-link--shadow" : "")}>
        <div className={"button-link__main" + (hasShadow ? " button-link__main--shadow" : " button-link__main--plain")}>
          <p className="button__label">{text}</p>
        </div>
      </div>
      :
      <a href={link} target="_blank" className={"button-link" + (hasShadow ? " button-link--plain" : " button-link--shadow")+ (props.partial ? " button-link--partial" : "")}>
        <div className={"button-link__main" + (hasShadow ? " button-link__main--plain" : " button-link__main--shadow")}>
          <p className="button__label">{text}</p>
        </div>
      </a>
    }
    </>
  )
}