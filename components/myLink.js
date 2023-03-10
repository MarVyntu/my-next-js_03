// //

//

import Link from "next/link";

const MyLink = ({ text, href }) => {
  return (
    <Link href={href} className="mylink">
      {text}
    </Link>
  );
};

export { MyLink };
