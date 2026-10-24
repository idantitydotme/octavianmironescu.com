import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { useParams } from "@solidjs/router";
import { getLegalPolicies } from "#utils/content.ts";
import ErrorPage404 from "#routes/[locale]/(app)/404.tsx";

export default function LegalPolicyPage() {
  const params = useParams<{ locale?: string; slug?: string }>();
  const policy = () =>
    getLegalPolicies().find((p) => p.locale === params.locale && p.slug === params.slug);
  useHead(() =>
    createSeoHead({
      title: policy()?.data.title ?? "Legal",
      description: policy()?.data.description ?? "",
    }),
  );

  return (
    <>
      {policy() ? (
        <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <header class="border-b border-neutral-200 pb-6 mb-8 text-center">
            <h1 class="text-3xl sm:text-4xl font-bold mb-2">{policy()!.data.title}</h1>
            {policy()!.data.pubDate && (
              <p class="text-sm text-neutral-500">
                <time>{new Date(policy()!.data.pubDate).toLocaleDateString()}</time>
              </p>
            )}
          </header>
          <article class="prose max-w-none leading-relaxed whitespace-pre-wrap">
            {policy()!.body}
          </article>
        </div>
      ) : (
        <ErrorPage404 />
      )}
    </>
  );
}
