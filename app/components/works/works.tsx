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
      image: "../public/Icon.png",
      link: "#",  //Vercel公開でそのリンク
      description: "takedesuuuuunのポートフォリオです。"
    },
    {
      id: 2,
      title: "Portfolio",
      image: "../public/Icon.png",
      link: "#",  //Vercel公開でそのリンク
      description: "takedesuuuuunのポートフォリオです。2"
    },
    {
      id: 3,
      title: "Portfolio",
      image: "../public/Icon.png",
      link: "#",  //Vercel公開でそのリンク
      description: "takedesuuuuunのポートフォリオです。3"
    },
    {
      id: 4,
      title: "Portfolio",
      image: "../public/Icon.png",
      link: "#",  //Vercel公開でそのリンク
      description: "takedesuuuuunのポートフォリオです。4"
    },
    {
      id: 5,
      title: "Portfolio",
      image: "../public/Icon.png",
      link: "#",  //Vercel公開でそのリンク
      description: "takedesuuuuunのポートフォリオです。5"
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