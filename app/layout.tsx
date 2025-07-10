import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "../app/components/DisableDraftMode";

export const metadata: Metadata = {
  title: "Made With Love | Recipes from Your Team",
  description: "Share and discover amazing recipes made by your colleagues.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="pt-20">{children}</main>
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
