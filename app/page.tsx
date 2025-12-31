const phrases = [
  "hi ghjkll",
  "Building something delightful",
  "Deploy-ready Next.js starter"
];

const highlight = (text: string) => {
  if (text === "hi ghjkll") {
    return <span className="spark" key={text}>{text}</span>;
  }
  return <span key={text}>{text}</span>;
};

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>{highlight("hi ghjkll")}</h1>
        <p>
          {phrases.slice(1).map((phrase) => (
            <span key={phrase}>{phrase}</span>
          ))}
        </p>
        <a className="cta" href="#next">Get Started</a>
      </section>
      <section className="content" id="next">
        <article>
          <h2>What&apos;s inside</h2>
          <ul>
            <li>Next.js App Router with strict TypeScript.</li>
            <li>Lightweight styling with modern CSS features.</li>
            <li>Ready-to-deploy configuration for Vercel.</li>
          </ul>
        </article>
        <article>
          <h2>How to use</h2>
          <ol>
            <li>Run <code>npm run dev</code> to explore locally.</li>
            <li>Update the hero section copy to match your brand.</li>
            <li>Deploy seamlessly to Vercel when you&apos;re ready.</li>
          </ol>
        </article>
      </section>
    </main>
  );
}
