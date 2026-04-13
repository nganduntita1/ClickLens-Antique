import "./globals.css";

export const metadata = {
  title: "Alice R Photography | Timeless Photos",
  description: "Professional photography for personal moments, brands, and unforgettable memories.",
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
