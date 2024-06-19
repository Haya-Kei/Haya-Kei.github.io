import React, { useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial, PresentationControls} from '@react-three/drei';
import { useThree, useFrame} from '@react-three/fiber';

const Model = () => {

  const mesh = useRef();
  const { nodes } = useGLTF('/torus.glb')
  const { viewport } = useThree();

  // useFrame( () => {
  //   mesh.current.rotation.x += 0.01
  // })


  return (
  <group  scale={viewport.width / 26}>
      <Text fontSize={4} font= '/font/TuskerGrotesk-2600Semibold.ttf' position={[0, 0, -0.9]}>
        Hello World
      </Text>
      <PresentationControls
          enabled={true} // これを false に設定するとコントロールを無効にできる。
          global={false} // これを true に設定するとグローバルに回転する。
          cursor={true} // ドラッグ時にカーソルのスタイルを切り替える。
          config={{ mass: 1, tension: 170, friction: 26 }} // スプリングの設定。
          snap={false} // 中央にスナップバックします。指定方法は config と同じ。
          speed={1} // カメラを操作した時のモデルの動きの速度。
          zoom={1} // 極最大値の半分に達したときのズーム倍率
          rotation={[3.14 / 2, 0, 0.01]} // デフォルトの回転度合い
          polar={[-Infinity, Infinity]} // 垂直方向の制限
          azimuth={[-Infinity, Infinity]} // 水平方向の制限
        >
      <mesh ref={mesh} {...nodes.Torus} position={[0, 0, 0]}>
      <MeshTransmissionMaterial />
      </mesh>
      </PresentationControls>
  </group>
  )
}

export default Model
