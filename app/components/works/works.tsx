import "./works.css"

export function Works() {

  type Work = {
    id: number;
    title: string;
    image: string;
    link: string;
    description: string;
  };

  const works: Work[] = [
    {
      id: 1,
      title: "Portfolio",
      image: "/Icon.png",
      link: "https://portfolio-self-rho-s8hs0om3cl.vercel.app/",
      description: "takedesuuuuunのポートフォリオです。(現在のページ)"
    },
    {
      id: 2,
      title: "Todo-app",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0gd1AdwbKPHvU5RaaWQLxAkmrwofr7cMQydo07eOCJHB0N9tH1VaEo1lhuJDWaPzM_HKMzVyIqPpHhoov-D09v2TkcPy61BrOIaiENhdCIP4LTCkZSeI1EbQ9xBZ5jcg7sFVIJvTb2MwQ/s400/no_image_tate.jpg",
      link: "https://todo-app-iota-inky-94.vercel.app/",
      description: "Reactを使用した簡素なTodoアプリです。"
    }
  ];
  

  return(
    <div id="works" className="anchor">
      <h2>Works <small>実績</small></h2>
      <span className="blueLine"></span>
      <section>
        {works.length === 0 ? (
          <div id="noContents">
            <p>
              Works coming soon.
              <span></span>
              <span></span>
            </p>
          </div>
        ) : (
          <ul className="contents">
            {works.map((work) => (
              <li key={work.id}>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <img src={work.image} alt={work.title} />
                </a>

                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </li>
            ))}
          </ul>
        )}
        <ul>
          <li></li>
        </ul>
      </section>
    </div>
  );
}