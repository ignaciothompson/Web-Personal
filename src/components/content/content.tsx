import './content.css';
import { useRef, useEffect } from 'react';
import SkillCard from '../skillCard/skillCard';
import WorkCard from '../workCard/workCard';
import DesignCard from '../designCard/designCard';
import About from '../about/about';

const Content = () => {

    const svgRef = useRef<SVGSVGElement>(null);

  const scroll = (): void => {
    const svg = svgRef.current;
    const path = svg?.querySelector("path") as SVGPathElement | null;

    if (!svg || !path) return;

    const distance = window.scrollY;
    const totalDistance = svg.clientHeight - window.innerHeight;

    if (totalDistance <= 0) return;

    const percentage = distance / totalDistance;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
       <svg
        ref={svgRef}
        width="688"
        height="1302"
        viewBox="0 0 688 1302"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle"
      >
        <path
          d="M0 13C225.5 159 19.5 331 148.5 503C277.5 675 459 622.5 459 622.5C625 590 685.684 479.529 670.5 420.5C655.316 361.471 647 346.5 609.5 318.5C572 290.5 522.238 272.169 431.5 300C340.762 327.831 287.946 459.57 299 627.5C324.904 775.893 347.587 826.68 299 901.5C250.413 976.32 133.707 956.9 96.5 1113.5C91.5992 1183.71 97.7121 1223.2 135.5 1294"
          stroke="#0a9cc0"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
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
        <div className='container'>
            <h1>Mis diseños y templates</h1>
          <DesignCard />
        </div>
        <div className='container'>
          <About />
        </div>
    </div>
    </>
  )
}

export default Content
