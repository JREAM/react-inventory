import { useState } from 'react'

export default function Home() {

  return (
    <div className="container">
      <h1>My React Playground</h1>
        <p>Using REST API calls to populate data, the fetch method.
        Using localStorage for artificial login (ignoring XSS for now).</p>
      <ul>
        <li><b>Todo</b></li>
        <li>Work on a possible real API rather than dummy data, eg: Contentful</li>
        <li>shop/:id where ID not found needs to show error not empty item.</li>
        <li>SignIn/SignUp no access if HAS localstorage token</li>
        <li>SignOut no access if NOT HAS localstorage token</li>
        <li>State needs to be triggered Navigation bar for Login/Logout, currently requires refresh. Redux maybe, but I want to use redux for more things rather than that one item if I use it.</li>
      </ul>
    </div>
  )
}
