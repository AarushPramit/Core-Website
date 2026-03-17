import "./globals.css";

export const metadata = {
  title: "Core Website",
  description: "Clothing brand website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
