import './content.css';
import SkillCard from '../skillCard/skillCard';
import WorkCard from '../workCard/workCard';

const Content = () => {
  return (
    <div className='content'>
      <h1 className='descriptionTitle'>Desarrollador Web, con ambición por la perfección</h1>
        <div className='container'>
            <h1>Mis conocimientos</h1>
          <SkillCard />
        </div>
        <div className='container'>
            <h1>Mis trabajos</h1>
          <WorkCard />
        </div>
    </div>
  )
}

export default Content
