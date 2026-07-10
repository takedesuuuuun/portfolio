import "./skills.css"

export function Skills() {
  
  type Skill = {
    name: string;
    level: string;
  }

  const skills: Skill[] = [
    { name: "HTML", level: "prof" },
    { name: "CSS", level: "prof" },

    { name: "JavaScript", level: "prac" },
    { name: "Git, Github", level: "prac" },
    { name: "React, React Router", level: "prac" },

    { name: "Node.js", level: "lear" },
    { name: "MySQL", level: "lear" },
    { name: "Ruby", level: "lear" },

    { name: "C# (Unity)", level: "next" },
    { name: "C++ (Unreal Engine)", level: "next" }
  ]

  return(
    <div id="skills" className="anchor">
      <h2>Skills <small>技術</small></h2>
      <span className="blueLine"></span>
      <p>Web制作・開発に関する技術や、興味のある分野についてです。</p>
      
      <h3>Proficient <small>扱える・自信 : 大</small></h3>
      <span className="orangeLine"></span>
      <p>十分に扱え、実務で実践していきたいと言えるものです。</p>
      <ul>
        {skills
          .filter((skill) => skill.level === "prof")
          .map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>

      <h3>Practicing <small>練習中・自信 : 中</small></h3>
      <span className="orangeLine"></span>
      <p>ある程度理解しており、使えるように練習しているものです。</p>
      <ul>
        {skills
          .filter((skill) => skill.level === "prac")
          .map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
      </ul>

      <h3>Learning <small>学習中・自信 : 小</small></h3>
      <span className="orangeLine"></span>
      <p>学習をしたことがあるが、扱えるとは言えないものです。</p>
      <ul>
        {skills
          .filter((skill) => skill.level === "lear")
          .map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
      </ul>

      <h3>Next to Learn <small>今後学習予定</small></h3>
      <span className="orangeLine"></span>
      <p>学習したことはありませんが、将来学習したいもの・興味があるものです。</p>
      <ul>
        {skills
          .filter((skill) => skill.level === "next")
          .map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
      </ul>
    </div>
  );
}