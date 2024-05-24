import { Canvas } from '@react-three/fiber'
function Projects() {
    return <div>
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
