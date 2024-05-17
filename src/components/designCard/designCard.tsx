import './designCard.css';
import API from '../../db/works.json';

const DesignCard = () => {

  const handleTouch = (event: React.MouseEvent<HTMLDivElement>) => {
    if(window.innerWidth < 450){
      event.currentTarget.classList.toggle("touch");
    }
  }

  return (
    <div className="designContainer">
      {API.designs.content.map((design) => (
        design.primary ? (
          <div className="card" onClick={handleTouch}>
            <h3 className="title">{design.name}</h3>
            {/* <img src={design.image} alt={design.name} className='designImage'/> */}
            <p className='description'>{design.description}</p>
            <div className='designLinks'>
              <a href={design.url} className='designLink' target='_blank'>Ver diseño <img src='/icons/open.svg' alt='open web' className='workLinkIcon'/></a>
              <a href={design.github} className='designLink' target='_blank'>Ver GitHub <img src='/icons/github.svg' alt='github' className='workLinkIcon'/></a>
            </div>
          </div>
        ) : null
      ))}
    </div>
  )
}

export default DesignCard

