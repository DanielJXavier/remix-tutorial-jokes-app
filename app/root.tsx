import type { LinksFunction } from "remix";
import { Links, LiveReload, Outlet } from "remix";

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStylesUrl,
  },
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStylesUrl,
    media: "screen and (min-width: 1024px)",
  },
];

const Document = ({
  children,
  title = `Remix: So great, it's funny!`,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <Links />
    </head>
    <body>
      {children}
      <LiveReload />
    </body>
  </html>
);

const App = () => (
  <Document>
    <Outlet />
  </Document>
);

export default App;

export const ErrorBoundary = ({ error }: { error: Error }) => (
  <Document title="Uh-oh!">
    <div className="error-container">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
    </div>
  </Document>
);