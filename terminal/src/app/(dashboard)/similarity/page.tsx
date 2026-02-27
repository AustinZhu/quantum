import { PageHeader } from "@/components/page-header";
import { SimilarityWorkbench } from "@/components/similarity/similarity-workbench";

export default function SimilarityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Similarity Analysis"
        description="ML-driven stock similarity and clustering workbench"
        
      />
      <SimilarityWorkbench />
    </div>
  );
}
