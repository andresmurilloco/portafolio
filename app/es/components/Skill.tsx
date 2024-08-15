import '@/app/components/css/skill.css'

const Skill = ({ skillData }: any) => {

    const { skillName, experience, level, skill } = skillData;

    return (
        <div className='skill-card'>
            <h2>{skillName}</h2>
            <div className={`skill-graph-${skill}`}></div>
            <h3>{level}</h3>
            <p>{experience > 1 ? `${experience} Años` : `${experience} Año`}</p>
        </div>
    )
}

export default Skill