import React from 'react'

function Repo({repo}) {
  return (
    <div className="card" >
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  )
}

export default Repo
