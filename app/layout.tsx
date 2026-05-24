import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Recruiter Scanner – Hiring Insights from GitHub Profiles",
  description: "Analyze candidate GitHub activity, contribution patterns, and code quality for smarter technical recruiting."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7d264583-49c5-40ce-b8aa-8ab051ff3cf5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
