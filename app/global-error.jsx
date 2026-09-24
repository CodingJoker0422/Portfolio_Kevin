"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ padding: 24, color: "white", background: "#000" }}>
          <h2>Something went wrong</h2>
          <p>{error?.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
