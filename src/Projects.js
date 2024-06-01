import { Canvas } from '@react-three/fiber';
import './styles/Projects.css';
function Projects() {
    return <div className='projects'>
    <div className='section-title'>Projects</div>
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  </div>;
}
export default Projects;
