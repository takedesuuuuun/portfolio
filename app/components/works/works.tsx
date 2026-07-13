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
      description: "takedesuuuuunのポートフォリオです。"
    },
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
          <ul id="contents">
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