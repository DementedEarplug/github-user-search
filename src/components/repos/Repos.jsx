import React from 'react'
import Repo from "./Repo"

function Repos({repos}) {
  return (
    repos.map((repo)=><Repo repo={repo} />)
  )
}



export default Repos
