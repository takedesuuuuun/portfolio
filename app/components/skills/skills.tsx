import "./skills.css"

export function Skills() {
  
  return(
    <div id="skills" className="anchor">
      <h2>Skills <small>技術</small></h2>
      <span className="blueLine"></span>
      <p>Web制作・開発に関する技術や、興味のある分野についてです。</p>
      
      <h3>Proficient <small>扱える・自信 : 大</small></h3>
      <span className="orangeLine"></span>
      <p>十分に扱え、実務で実践していきたいと言えるものです。</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

      <h3>Practicing <small>練習中・自信 : 中</small></h3>
      <span className="orangeLine"></span>
      <p>ある程度理解しており、使えるように練習しているものです。</p>
      <ul>
        <li>JavaScript</li>
        <li>Git, Github</li>
        <li>React, React Router</li>
      </ul>

      <h3>Learning <small>学習中・自信 : 小</small></h3>
      <span className="orangeLine"></span>
      <p>学習をしたことがあるが、扱えるとは言えないものです。</p>
      <ul>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Ruby</li>
      </ul>

      <h3>Next to Learn <small>今後学習予定</small></h3>
      <span className="orangeLine"></span>
      <p>学習したことはありませんが、将来学習したいもの・興味があるものです。</p>
      <ul>
        <li>C# (Unity)</li>
        <li>C++ (Unreal Engine)</li>
      </ul>
    </div>
  );
}