import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { SimilarityWorkbench } from "@/components/similarity/similarity-workbench";

export default async function SimilarityPage() {
  const t = await getTranslations("pages.similarity");
  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />
      <SimilarityWorkbench />
    </div>
  );
}
