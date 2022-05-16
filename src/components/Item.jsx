export default function Item({ id, title, desc, thumbnail = null, images = null, rating = null, price = null, link=true }) {

  return (
    <div data-id={id} className="item">
      <div className="row">
          {thumbnail &&
        <div className="column">
            <a href={`shop/${id}`}>
              <img className="item-thumbnail" src={thumbnail} alt={title} />
            </a>
        </div>
          }
        <div className="column">
          <h3>{title}</h3>
          <h4>{price && `$${price}`}</h4>
        </div>
        <div className="column">
          <p>{rating && `${rating} stars`}</p>
          <p>{link && (
            <a className="item-view-link" href={`shop/${id}`}>View</a>
          )}</p>
        </div>
      </div>
      <p>{desc}</p>
      {images && images.map(image => (
        <img className="item-gallery" key={image} src={image} alt={title} />
      ))}
    </div>
  )
}
