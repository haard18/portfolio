import BackButton from '@/components/backButton';
import { ExpandableCardDemo } from '@/components/Cards';


const Projects = () => {
  return (
    <>
      
      <BackButton mode={"light"} />
      <div className='min-h-screen flex flex-col items-center  bg-gradient-to-r from-blue-50 to-blue-100 py-12'>
        <h1 className='text-5xl font-bold text-gray-800 font-mono mb-12 tracking-wider' style={{ fontFamily: "'Orbitron', sans-serif" }}>Projects</h1>

        <div className='w-full max-w-7xl px-4 md:px-8'>
          <ExpandableCardDemo />
        </div>
      </div>
    </>
  );
};

export default Projects;
