export default function Item({ id, title, desc, thumbnail = null, images = null, rating = null, price = null, link=true }) {

  return (
    <div data-id={id} style={{ border: "1px solid silver", padding: "40px", overflow: "auto", marginBottom: "40px" }}>
      {thumbnail &&
        <a href={`shop/${id}`}>
          <img style={{ maxWidth: "175px" }} className="float-right" src={thumbnail} alt={title} />
        </a>
      }
      <h3>{title}</h3>
      <p>{desc}</p>
      <h4>{price && `$${price}`}</h4>
      <p>
        {rating && `${rating} stars`}
      </p>
      {images && images.map(image => (
        <img style={{ maxWidth: "250px", display: "inline", margin: "0 20px 20px 0" }} key={image} src={image} alt={title} />
      ))}
      <div>
        {link && (
          <a className="item-view-link" href={`shop/${id}`}>View</a>
        )}
      </div>
    </div>
  )
}
