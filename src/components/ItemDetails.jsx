export default function ItemDetails({ id, title, desc, more, heroImage }) {

  return (
    <div data-id={id} style={{ border: "1px solid silver", padding: "40px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{more}</p>
      <p>{heroImage}</p>
    </div>
  )
}
