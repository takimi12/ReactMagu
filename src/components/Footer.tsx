type Props = {
    link1: string;
    documents:  string;
    documentation: string;
}

type footerData = {
    footerData: Props;
}


const Footer = ({ footerData }:footerData) => {
    return (
      <footer>
        <ul>
          {Object.entries(footerData).map(([text, href]) => (
            <li key={text}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };
  
  export default Footer;