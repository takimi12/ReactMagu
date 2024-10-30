import { AsideMenu } from "./AsideMenu";
import { Comments } from "./Comments";
import Footer from "./Footer";
import {Wrapper} from "./Wrapper"


import { BsFillPeopleFill, BsFillBagCheckFill, BsFillFileEarmarkRuledFill, BsFillHddRackFill } from 'react-icons/bs';
import { BrowserRouter as Router } from 'react-router-dom';
import { Posts } from "./Posts";

import { CheckingLogin } from "./Week4.1/CheckingLogin";


const menuData = [
    {
      linkName: "Clients",
      link: "/clients",
      icon: <BsFillPeopleFill/>,
    },
    {
      linkName: "Orders",
      link: "/orders",
      icon: <BsFillBagCheckFill/>,
    },
    {
      linkName: "Facture",
      link: "/invoices",
      icon: <BsFillFileEarmarkRuledFill/>,
    },
    {
      linkName: "Posts",
      link: "/posts",
      icon: <BsFillHddRackFill/>,
    },
  ];

  const footerData = {
    link1: "/link1",
    documents: "/documents-faq",
    documentation: "/documentation",
  };

  const data = [
    {
      username: "test1 level 1",
      comment: "documents",
      subComments: [
        {
          username: "test2 level2 ",
          comment: "27-10-1990",
        },
        {
          username: "test2 level 2",
          comment: "invoices",
          subComments: [
            {
              comment: "electricityBills",
              username: "test3 level3",
              subComments: [{ comment: "invoice1",username: "test4 level 4" }, { comment: "invoice2",username: "test4 level4" }],
            },
          ],
        },
      ],
    },
    {
      comment: "photos",
      username: "test2",
      subComments: [
        {
          comment: "summer2020",
          username: "test3",
          subComments: [{ comment: "10.25", username: "test1" }],
        },
      ],
    },
  ];

export const Components = () => {
  return (
    <div className="App">
        {/* <AsideMenu menuData={menuData}/>
        <Wrapper />
      <Comments data={data} /> */}
<CheckingLogin />
      {/* <Posts /> */}
        {/* <Footer footerData={footerData} /> */}
        
    </div>
  );
};
