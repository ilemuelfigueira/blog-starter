export const Noticia = ({ children, ...props }) => {
  const { title, description, data } = props

  return (
    <div> { /* criar com styled -> Container */}
      <div className="header"> { /* criar com styled -> Header */}
        <strong>{data}</strong>
        <img src="/purple-heart.svg" />
      </div>
      <h2>{title}</h2> { /* manipular com o container */}
      <p>{description}</p> { /* manipular com o container */}
    </div>
  )
}