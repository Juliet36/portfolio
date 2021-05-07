import './ButtonLink.css'

export default function ButtonLink(props) {
  const { text, link } = {...props}
  console.log(props.handleClick ? 'yes' : 'no')
  return (
    <>
    {
      props.handleClick ?
      <div onClick={() => props.handleClick(text)} className={"button-link" + (props.plain ? " button-link--plain" : " button-link--original")+ (props.partial ? " button-link--partial" : "")}>
        <div className={"button-link__main" + (props.plain ? " button-link__main--plain" : " button-link__main--original")}>
          <p className="main__label">{text}</p>
        </div>
      </div>
      :
      <a href={link} target="_blank" className={"button-link" + (props.plain ? " button-link--plain" : " button-link--original")+ (props.partial ? " button-link--partial" : "")}>
        <div className={"button-link__main" + (props.plain ? " button-link__main--plain" : " button-link__main--original")}>
          <p className="main__label">{text}</p>
        </div>
      </a>
    }
    </>
  )
}