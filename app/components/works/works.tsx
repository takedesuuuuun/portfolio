import "./works.css"

export function Works() {

  type Work = {
    id: number;
    title: string;
    description: string;
  };

  const works: Work[] = [
    // No contents
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
          <ul>
            {works.map((work) => (
              <li key={work.id}>{work.title}</li>
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