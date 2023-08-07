'use client'
import { useEffect, useState } from 'react'
import {getProjects} from '../api/apiconn'
import Project from './Project'

const Projects = () => {
  const [projects, setProjects] = useState([])  

  useEffect(() => {
    const getData=async ()=>{
      setProjects(await getProjects());      
    }
    getData();
  }, []) 

  return (
    <>
    {projects.map(project =>(
      <Project key={project['id']} project={project['attributes']}/>
    ))}
    </>
  )
}

export default Projects