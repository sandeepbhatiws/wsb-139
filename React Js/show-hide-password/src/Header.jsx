import React from 'react'

// export default function Header(data) {

//     console.log(data);

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.children}</p>
//     </div>
//   )
// }

export default function Header({ title, description, children }) {

  return (
    <div>
      <h1>{ title }</h1>
      <p>{ children }</p>
    </div>
  )
}
