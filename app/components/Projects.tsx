'use client'
import { useEffect, useState } from 'react'
import { getProjects } from '../api/apiconn'
import Project from './Project'
import { data as dataArray } from '../api/apiconn'

const Projects = () => {
  const data = dataArray[0].english;

  return (
      <div className='project-container'>
      {data.map(project =>(
        <Project key={project['id']} project={project}></Project>
    ))}
    </div>
  )
}

export default Projects