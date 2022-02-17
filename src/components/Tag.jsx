//style

export const Tag = ({index, tag}) => {

  return (
    <span className="badge col-auto text-light mx-1 my-1" style={{ backgroundColor: tag.colorTag}}>{tag.titleTag}</span>
  )
}
