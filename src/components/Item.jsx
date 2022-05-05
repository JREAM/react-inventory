import { useState } from 'react'

export default function Item({ id, title, desc }) {
  const [count, setCount]=useState(0)

  return (
    <div data-id={id} style={{ border: "1px solid silver" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        <a href={`shop/${id}`}>View</a>
      </p>
    </div>
  )
}
