import Whats from "@/components/Whats";
import Nav from "../components/Nav";
import "../style/style.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="fav.png" sizes="any" />

      <body >
        <Nav />
        <Whats />
        {children}
      </body>
    </html>
  );
}
