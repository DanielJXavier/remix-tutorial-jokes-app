import { LiveReload, Outlet } from "remix";

const App = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Remix: So great, it's funny!</title>
    </head>
    <body>
      <Outlet />
      <LiveReload />
    </body>
  </html>
);

export default App;