import "../styles/App.css";
import "../styles/Home.css";

function Home() {
    return (
        <section className="intro">
            <div className="intro__name">
                <div className="name_first">Keiichi</div>
                <div className="name_second">Hayashi</div>
            </div>
            <p className="intro__role">Engineer / Project Manager</p>
            <p className="intro__statement">
                RAGを中心にAIプロダクトの戦略・設計・実装をリードし、グローバルチームとともに"動く"体験を届けます。
            </p>
        </section>
    );
}

export default Home;
