import React from 'react'

export const Grid = ({children, sm=2, md=3}) => {
  const classgrid = `row row-cols-1 row-cols-sm-${sm} row-cols-md-${md}`

  return (
  <div className="p-3 m-1 rounded text-center ">
        <div className={classgrid}>
        {children}
        </div>
    </div>
  )
}
