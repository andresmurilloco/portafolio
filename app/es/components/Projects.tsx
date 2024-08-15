'use client'
import Project from './Project'
import { data as dataArray } from '../../api/apiconn'

const Projects = () => {
  const data = dataArray.spanish;

  return (
    <div className='project-container'>
      {data.map(project => (
        <Project key={project['id']} project={project}></Project>
      ))}
    </div>
  )
}

export default Projects