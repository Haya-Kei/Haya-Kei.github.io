import '../styles/Info.css';

const experiences = [
  {
    title: 'Machine Learning Engineer',
    subtitle: 'RAG / QA Automation / AI Platforming',
    bullets: [
      'Retrieval-Augmented Generation（RAG）基盤の設計・実装を主導し、資料検索からQAチャットボットまでを一貫して構築。',
      'Ark ETL / Ark RAG を活用したクライアント案件に参画し、ドキュメントレビュー効率化と業務ナレッジ活用を推進。',
      'IP制限やAzure AD連携など、エンタープライズ向けセキュリティ要件に対応したデプロイをリード。'
    ]
  },
  {
    title: 'Project Manager',
    subtitle: 'Global Delivery / Stakeholder Enablement',
    bullets: [
      '多国籍メンバーとのリモートコラボレーションを英語でリードし、仕様定義からリリースまでの全体進行を可視化。',
      'タスクの優先順位付けとスプリント計画を担い、リソース配分とスケジュールの最適化を実現。',
      'クライアント折衝を通じて要件を抽出し、AI導入のROIとリスクをバランスさせた意思決定を支援。'
    ]
  }
];

const skillGroups = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript / TypeScript', 'React / Next.js', 'C++（Learning）', 'Flutter（Learning）']
  },
  {
    category: 'AI / Machine Learning',
    items: ['LangChain', 'RAG on Pinecone & Azure AI Search', 'GPT / Gemini / Cohere', 'RLHF & Evolutionary Algorithms', 'Computer Vision（Viola-Jones, CNN, Decision Tree）']
  },
  {
    category: 'Cloud / Infrastructure',
    items: ['AWS（EC2, Lambda, RDS, S3, Cognito, ECS, VPC）', 'Azure（App Service, Blob Storage, AI Search, AD連携）', 'Docker & Kubernetes', 'Prisma / PostgreSQL']
  },
  {
    category: 'Dev Environment',
    items: ['MacBook Pro', 'NeoVim', 'Fish Shell', 'GitHub', 'Docker Compose']
  }
];

const projects = [
  {
    name: 'CHAPPY',
    description: 'AIコンパニオンアプリ。会話ログからペルソナとメモリを生成し、Firestore・PostgreSQL・Pineconeを連携させた長期記憶体験を設計。モバイルUI/UXもフルリード。',
    tech: 'Flutter / Firebase / PostgreSQL / Pinecone'
  },
  {
    name: 'Timey',
    description: 'Google Calendar × AgentCore × AWS Bedrockで動作するAIスケジューラー。自動スケジュール提案やバッファ挿入を行い、日々の予定調整を自律化。',
    tech: 'GAS / AgentCore / Amazon Bedrock'
  },
  {
    name: '広告画像自動生成システム',
    description: 'Adobe Illustratorを自動制御し、AIで生成したコピーや配色をもとに広告素材を量産。制作オペレーションのボトルネックを解消。',
    tech: 'Illustrator Scripting / Generative AI'
  },
  {
    name: '音声対話システム',
    description: '5歳児向けに音声で対話するチャットボット。Whisperで音声認識し、Style BERTとLLMを組み合わせた応答をCoefont/Voiceboxで読み上げ、AWS上で運用。',
    tech: 'OpenAI Whisper / Style BERT / AWS'
  }
];

const hackathons = [
  {
    title: 'No-Code/Low-Code AI Hackathon in San Francisco 2025',
    date: '2025.05.21-24 / San Francisco',
    award: '3位入賞',
    host: '主催: Aparavi 他 / 協賛: Google, Neo4j など',
    summary: 'Low-Code/No-Codeを駆使したB2B向けAIツールのプロトタイプを4日間で開発。多様な企業スポンサーの期待に応える機能を実装。'
  },
  {
    title: 'AWS AI Agent 1Day Hackathon',
    date: '2025.09.15 / Tokyo',
    award: '優勝',
    host: '主催: MeltingHack / AWS Startup Loft Tokyo',
    summary: 'Amazon Bedrock AgentCoreを用い、AI Agent Marketplace向けのエージェントを1日で構築。バイリンガル開催でのプレゼンテーションも担当。'
  }
];

const researchAreas = [
  '多文化共生とコミュニティデザイン',
  '日本の財政社会学 × AI活用',
  '強化学習・進化アルゴリズム',
  'Robotics × AI',
  '統計学・金融（株式市場分析）'
];

const strengths = [
  'AI / 機械学習 × インフラ × プロジェクトマネジメントのハイブリッドスキル。',
  'RAGやLLMの実装経験を活かした、課題解決志向のプロダクト思考。',
  'グローバルチームでの英語コミュニケーションと迅速な意思決定。',
  'UI/UXのディレクションから設計・実装まで横断できるデザインセンス。'
];

const Info = () => {
  return (
    <section className="info">
      <div className="info__inner">
        <header className="info__header">
          <p className="info__eyebrow">Portfolio Overview</p>
          <h2 className="info__title">AIプロダクトを"動くところまで"届ける、ハイブリッドエンジニア。</h2>
          <p className="info__summary">
            慶應義塾大学経済学部を休学し、RAGやAIエージェントを軸にしたプロジェクトをリード。要件設計からMLOps、
            UI/UXまでを横断しながら、クライアントやチームの意思決定を支援します。
          </p>
          <div className="info__facts">
            <span className="info-chip">Engineer / Project Manager</span>
            <span className="info-chip">Focus: RAG &amp; AI Agents</span>
            <span className="info-chip">Global Team Collaboration</span>
            <span className="info-chip">慶應義塾大学 経済学部（休学中）</span>
          </div>
        </header>

        <div className="info__grid">
          <section className="info-card info-card--wide">
            <h3 className="info-card__heading">Professional Experience</h3>
            <div className="experience-grid">
              {experiences.map((experience) => (
                <article className="experience-card" key={experience.title}>
                  <h4 className="experience-card__title">{experience.title}</h4>
                  <p className="experience-card__subtitle">{experience.subtitle}</p>
                  <ul className="info-list">
                    {experience.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="info-card info-card--wide">
            <h3 className="info-card__heading">Signature Projects</h3>
            <div className="info-projects-grid">
              {projects.map((project) => (
                <article className="info-project-card" key={project.name}>
                  <div className="info-project-card__header">
                    <h4>{project.name}</h4>
                  </div>
                  <p className="info-project-card__description">{project.description}</p>
                  <p className="info-project-card__tech">{project.tech}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="info-card">
            <h3 className="info-card__heading">Skill Matrix</h3>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.category}>
                  <p className="skill-group__title">{group.category}</p>
                  <div className="skill-group__chips">
                    {group.items.map((item) => (
                      <span className="skill-chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="info-card">
            <h3 className="info-card__heading">Research &amp; Curiosity</h3>
            <ul className="info-list">
              {researchAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>

          <section className="info-card">
            <h3 className="info-card__heading">Strengths</h3>
            <ul className="info-list">
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </section>

          <section className="info-card info-card--wide">
            <h3 className="info-card__heading">Hackathon Highlights</h3>
            <div className="hackathon-list">
              {hackathons.map((hackathon) => (
                <article className="hackathon-card" key={hackathon.title}>
                  <div className="hackathon-card__header">
                    <p className="hackathon-card__date">{hackathon.date}</p>
                    <span className="info-chip info-chip--accent">{hackathon.award}</span>
                  </div>
                  <h4 className="hackathon-card__title">{hackathon.title}</h4>
                  <p className="hackathon-card__host">{hackathon.host}</p>
                  <p className="hackathon-card__summary">{hackathon.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Info;
