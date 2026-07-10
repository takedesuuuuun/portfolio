import "./contact.css"

export function Contact() {
  
  type Contact = {
    name: string;
    url: string;
  }

  const contacts: Contact[] = [
    {
      name: "Email",
      url: "mailto:takeaninjin@getMaxListeners.com"
    },
    {
      name: "Github",
      url: "https://github.com/takedesuuuuun"
    },
    {
      name: "X",
      url: "https://x.com/take_a_ninjin"
    }
  ]

  return(
    <div id="contact" className="anchor">
      <h2>Contact <small>連絡</small></h2>
      <span className="blueLine"></span>

      <p>連絡先です。お気軽にお問い合わせください。ご相談やご質問など、お待ちしております。</p>
      
      {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target={contact.url.startsWith("http") ? "_blank" : undefined}
            rel={contact.url.startsWith("http") ? "noopener noreferrer" : undefined}
          >
          {contact.name}
          </a>
        ))}
    </div>
  );
}