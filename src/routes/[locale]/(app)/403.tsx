import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import AppError from "#components/app/AppError.tsx";

export default function ErrorPage403() {
  useHead(() =>
    createSeoHead({
      title: "403 - Forbidden",
      description: "You do not have permission to access this resource.",
      noindex: true,
    }),
  );

  return (
    <>
      <AppError
        code={403}
        title="Access Denied"
        description="You do not have permission to access this resource."
        actions={[
          {
            label: "Go to Home Page",
            href: "/",
            variant: "solid",
            color: "primary",
            icon: "i-lucide-home",
          },
        ]}
      />
    </>
  );
}
