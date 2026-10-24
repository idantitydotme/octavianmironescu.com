import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";

export default function PrivacyPolicyPage() {
  useHead(() =>
    createSeoHead({
      title: "Privacy Policy",
      description: "Privacy Policy for octavianmironescu.com",
    }),
  );

  return (<>

      <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p class="text-neutral-400">
          This Privacy Policy outlines how your information is collected, used, and protected.
        </p>
      </div>
    
</>
  );
}
