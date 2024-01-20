import Prose from "@/components/prose";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

export const runtime = "edge";

export const revalidate = 43200; // 12 hours in seconds

const page = {
  id: 123,
  title: "Kaizen Informatics",
  handle: "welcome-page",
  body: "<p>This is the main content of the page. Welcome to my website!</p>",
  bodySummary: "A brief summary of the page content.",
  seo: {
    description: "Explore the exciting content on my website.",
    title: "My Awesome Website",
  },
  createdAt: "2024-01-20T12:00:00Z",
  updatedAt: "2024-01-20T14:30:00Z",
};

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
