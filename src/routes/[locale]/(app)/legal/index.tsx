import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { getCurrentLocale, getLocaleUrl } from "@rimelight/i18n";
import { getLegalPolicies } from "#utils/content.ts";

export default function LegalIndexPage() {
  const legalPolicies = () =>
    getLegalPolicies().filter((policy) => policy.locale === getCurrentLocale());
  useHead(() =>
    createSeoHead({
      title: "Legal",
      description: "Legal policies and information",
    }),
  );

  return (
    <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h1 class="text-3xl font-bold mb-6">Legal</h1>
      <ul class="flex flex-col gap-4 list-none p-0 m-0">
        {legalPolicies().map((policy) => (
          <li class="border-b border-neutral-200 pb-4">
            <a
              href={getLocaleUrl(`/legal/${policy.slug}/`)}
              class="hover:text-primary transition-colors font-medium text-lg"
            >
              <h2 class="text-xl font-semibold m-0">{policy.data.title}</h2>
            </a>
            <p class="text-sm text-neutral-500 m-0 mt-1">
              <time>{new Date(policy.data.pubDate).toLocaleDateString()}</time>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
