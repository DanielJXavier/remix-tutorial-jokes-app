import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { 
    rel: "stylesheet",
    href: stylesUrl 
  }
];

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description:
    "Remix jokes app. Learn Remix and laugh at the same time!",
});

const Index = () => (
  <div className="container">
    <div className="content">
      <h1>
        Remix <span>Jokes!</span>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="jokes">Read Jokes</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Index;