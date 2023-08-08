'use client'
import { useEffect, useState } from 'react'
import { getProjects } from '../api/apiconn'
import Project from './Project'
import Loading from './Loading'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setProjects(await getProjects());
      setLoading(false);
    }
    getData();
  }, [])

  return (
    <>
    {loading ? (<Loading/>):
    (
      <div className='project-container'>
      {projects.map(project => (
        <Project key={project['id']} project={project['attributes']} />
      ))}
    </div>
    )}
    </>
  )
}

export default Projects