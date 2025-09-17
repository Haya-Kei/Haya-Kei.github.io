import '../styles/FAQ.css';

const faqs = [
  {
    question: 'どんなプロジェクトにフィットしますか？',
    answer:
      'RAGやAIエージェントなど、LLMを活用した業務改善・新規サービス構築が得意領域です。要件定義から実装、運用設計まで一気通貫でリードできます。'
  },
  {
    question: '海外メンバーとの開発体制は可能ですか？',
    answer:
      'はい。インド拠点を含むグローバルチームでのプロジェクトマネジメント経験があり、英語でのタスク調整やレビュー体制の構築に慣れています。'
  },
  {
    question: '導入後の改善や運用もサポートしてもらえますか？',
    answer:
      'セキュリティ対応やMLOps設計、KPIモニタリングを含めて伴走が可能です。継続的な改善サイクルを前提にした体制づくりを重視しています。'
  }
];

function FAQ() {
  return (
    <section className="faq">
      <div className="section-title">FAQ</div>
      <div className="faq__list">
        {faqs.map((faq) => (
          <article className="faq-item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
