import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <p>
        Culpa sit duis non non aliquip proident cupidatat deserunt amet. Duis consequat et eu duis proident nostrud sint fugiat velit proident. Non nulla ipsum deserunt et et tempor id veniam do velit. Labore non incididunt excepteur cupidatat amet excepteur ipsum fugiat eiusmod commodo ut ad id in.
      </p>
    </div>
  )
}
