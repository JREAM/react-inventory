export default function Item({ id, title, desc, thumbnail = null, images = null, rating = null, price = null,link=true }) {

  return (
    <div data-id={id} style={{ border: "1px solid silver", padding: "40px", marginBottom: "40px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        {price && `$${price}`}
      </p>
      <p>
        {rating && `${rating} stars`}
      </p>
      {thumbnail&&<img style={{ maxWidth: "175px" }} src={thumbnail} alt={title} />}
      {images && images.map(image => (
        <img style={{ maxWidth: "250px", display: "inline", margin: "0 20px 20px 0" }} key={image} src={image} alt={title} />
      ))}
      <div>
        {link&&(
          <a href={`shop/${id}`}>View</a>
        )}
      </div>
    </div>
  )
}
