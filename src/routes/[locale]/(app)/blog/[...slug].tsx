import { useParams } from "@solidjs/router";
import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { getBlogPosts } from "#utils/content.ts";
import ErrorPage404 from "../404.tsx";

export default function BlogPostPage() {
  const params = useParams<{ locale?: string; slug?: string }>();
  const post = () =>
    getBlogPosts().find((p) => p.locale === params.locale && p.slug === params.slug);

  useHead(() =>
    createSeoHead({
      title: post()?.data.title,
      description: post()?.data.description,
    }),
  );

  return (
    <>
      {post() ? (
        <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <article>
            {post()!.data.heroImage && (
              <div class="mb-8 rounded-2xl overflow-hidden shadow-sm">
                <img
                  width={1020}
                  height={510}
                  src={post()!.data.heroImage}
                  alt=""
                  class="w-full h-auto object-cover"
                />
              </div>
            )}
            <header class="border-b border-neutral-200 pb-8 mb-8 text-center">
              <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                {post()!.data.title}
              </h1>
              {post()!.data.description && (
                <p class="text-lg text-neutral-500 max-w-2xl mx-auto mb-4">
                  {post()!.data.description}
                </p>
              )}
              <div class="flex items-center justify-center gap-4 text-sm text-neutral-500">
                <time>{new Date(post()!.data.pubDate).toLocaleDateString()}</time>
                {post()!.data.updatedDate && (
                  <span class="italic">
                    (Updated:{" "}
                    <time>{new Date(post()!.data.updatedDate!).toLocaleDateString()}</time>)
                  </span>
                )}
              </div>
            </header>
            <div class="prose max-w-none mx-auto leading-relaxed whitespace-pre-wrap">
              {post()!.body}
            </div>
          </article>
        </div>
      ) : (
        <ErrorPage404 />
      )}
    </>
  );
}
