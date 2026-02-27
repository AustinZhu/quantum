import { Badge } from "@/components/ui/badge";

export function PageHeader({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {badge && (
          <Badge variant="outline" className="font-mono text-xs">
            {badge}
          </Badge>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
