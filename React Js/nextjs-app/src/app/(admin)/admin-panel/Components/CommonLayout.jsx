import React from 'react'

export default function CommonLayout({ children}) {
  return (
    <>
        <div> Header</div>

        { children}

        <div>Footer</div>
    </>
  )
}
