
import  API  from "../../db/works.json";
import './workCard.css'

const WorkCard = () => {

  const handleTouch = (event: React.MouseEvent<HTMLDivElement>) => {
    if(window.innerWidth < 450){
      event.currentTarget.classList.toggle("touch");
    }
  }

  return (
    <div className='worksContainer'>
      {API.works.content.map((work) => (
        <>
        <div className='workCard' onClick={handleTouch}>
            <div className='workImageContainer'>
                <img src={work.image} alt={work.name} className='workImage'/>
            </div>
            <h1 className='workTitle'>{work.name}</h1>
            <div className="sidebar">
            <div className='workInfo'>
                <p className='workInfoText'>{work.description}</p>
                <ul className='workTechList'>
                    {work.technologies.map((tech) => (
                        <li className='workTech'>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className='workLinks'>
                <a href={work.url} target='_blank' className='workLink'>Ver la pagina <img src='/icons/open.svg' alt='open web' className='workLinkIcon'/></a>
                {work.github && (
                    <a href={work.github} target='_blank' className='workLink'>Github <img src='/icons/github.svg' alt='github' className='workLinkIcon'/></a>
                )}
            </div>
        </div>
        </div>
        </>
      ))}
      <div className='moreWorks'>
        <p>Visita mi <a href="https://github.com/ignaciothompson" target='_blank'>Github</a> o mi <a href="https://vercel.com/ignaciothompsons-projects" target='_blank'>Vercel</a> para ver mas trabajos.</p>
      </div>
    </div>
  )
}

export default WorkCard
