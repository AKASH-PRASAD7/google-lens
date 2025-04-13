import { useState } from "react";
import WebView from "./web-view";
import MobileView from "./mobile-view";

const HomePage = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      <section className="web-view">
        <WebView search={search} setSearch={setSearch} />
      </section>
      <section className="mobile-view">
        <MobileView search={search} setSearch={setSearch} />
      </section>
    </main>
  );
};

export default HomePage;
