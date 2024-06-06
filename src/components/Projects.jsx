'use client';
import { Canvas } from '@react-three/fiber';
import '../styles/Projects.css';
import Model from './Model.jsx';
import { Environment } from '@react-three/drei';

function Projects() {
    return <div className='projects'>
    <div className='section-title'>Projects</div>
    <>
      <Canvas>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />
        <Model />
      </Canvas>
    </>
  </div>;
}
export default Projects;
