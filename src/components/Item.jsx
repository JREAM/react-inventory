import { useState } from 'react'

export default function Item({ id, title, desc, link=true }) {
  const [count, setCount]=useState(0)

  return (
    <div data-id={id} style={{ border: "1px solid silver", padding: "40px", marginBottom: "40px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        {link&&(
          <a href={`shop/${id}`}>View</a>
        )}
      </div>
    </div>
  )
}
