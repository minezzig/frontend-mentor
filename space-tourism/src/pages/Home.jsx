import { Header } from "../components/Header";

export const Home = () => {
  return (
    <section className="home">
      <Header />
      <div className="home-container">
        <div className="header-container">
          <div className="heading-xs">So, you want to travel to </div>
          <div className="heading-xl">Space</div>
          <div className="content">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </div>
        </div>
        <a href="/destination"><div className="explore heading-sm">Explore</div></a>
      </div>
    </section>
  );
};
