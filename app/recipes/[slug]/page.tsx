import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { RECIPE_QUERY } from "@/sanity/lib/queries";
import { Recipe } from "../../components/Recipe";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { client } from "../../../sanity/lib/client";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
    const { isEnabled } = await draftMode();

  const { data: recipe } = await sanityFetch({
    query: RECIPE_QUERY,
    params: { slug: params.slug },
    ...(isEnabled && {
      perspective: "previewDrafts",
      useCdn: false,
      stega: true, // or "stage": "draft" if you're using a custom plugin
    }),
  });

  if (!recipe) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Recipe {...recipe} />
      <SanityLive />
    </main>
  );
}
