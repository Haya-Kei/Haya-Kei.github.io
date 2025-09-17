'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import '../styles/Projects.css';
import Model from './Model.jsx';

const projectList = [
  {
    name: 'CHAPPY',
    label: 'AIコンパニオンアプリ',
    description:
      'メモリとペルソナを備えたチャット体験を設計。Firestore / PostgreSQL / Pineconeを横断しながら、モバイルUIまでワンストップでデリバリー。',
    highlights: ['長期記憶とペルソナ同期', '体験設計〜実装をフルリード'],
    stack: 'Flutter / Firebase / PostgreSQL / Pinecone'
  },
  {
    name: 'Timey',
    label: 'AI Calendar Assistant',
    description:
      'AgentCoreとAWS Bedrockを連携させたスケジュール自動化エージェント。Google Calendarと同期し、提案・調整・バッファ確保まで自律実行。',
    highlights: ['Agent Orchestration', 'GASとの連携'],
    stack: 'Google Apps Script / AgentCore / Amazon Bedrock'
  },
  {
    name: '広告画像自動生成システム',
    label: 'Creative Automation',
    description:
      'Adobe Illustratorを自動制御し、AI生成コピー＆配色で広告素材を高速生成。制作ワークフローのボトルネックを解消。',
    highlights: ['生成AI × DTP自動化', '制作リードタイム短縮'],
    stack: 'Illustrator Scripting / Generative AI'
  },
  {
    name: '音声対話システム',
    label: 'Voice Conversational Bot',
    description:
      '5歳児向け音声チャットボット。Whisper × Style BERT × LLMで自然な応答を生成し、Coefont / Voiceboxでリアルタイム読み上げ。',
    highlights: ['Child-friendly UX', 'AWSフルマネージド運用'],
    stack: 'OpenAI Whisper / Style BERT / AWS'
  }
];

function Projects() {
  return (
    <section className="projects">
      <div className="section-title">Projects</div>
      <div className="projects__grid">
        <div className="canvas-container">
          <Canvas>
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="city" />
            <Model />
          </Canvas>
        </div>
        <div className="projects__list">
          {projectList.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__header">
                <h3>{project.name}</h3>
                <span className="project-card__label">{project.label}</span>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__badges">
                {project.highlights.map((highlight) => (
                  <span className="project-badge" key={highlight}>
                    {highlight}
                  </span>
                ))}
              </div>
              <p className="project-card__stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
