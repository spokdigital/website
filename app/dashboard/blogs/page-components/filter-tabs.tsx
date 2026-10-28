"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FunnelIcon,
  GridNineIcon,
  ListBulletsIcon,
} from "@phosphor-icons/react";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortOption = "newest" | "oldest" | "az";
type FilterType = "all" | "published" | "draft";

const SORT_LABELS: Record<SortOption, string> = {
  newest: "Newest first",
  oldest: "Oldest first",
  az: "A → Z",
};

const FILTER_TABS: FilterType[] = ["all", "published", "draft"];

interface Props {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  counts: { all: number; published: number; draft: number };
  blogView: "list" | "grid";
  setBlogView: React.Dispatch<React.SetStateAction<"list" | "grid">>;
  sort: SortOption;
  setSort: React.Dispatch<React.SetStateAction<SortOption>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTabs = ({
  filter,
  setFilter,
  counts = { all: 0, published: 0, draft: 0 },
  blogView,
  setBlogView,
  sort,
  setSort,
  search,
  setSearch,
}: Props) => (
  <div className="space-y-4">
    {/* Search + Sort */}
    <div className="flex items-center justify-between gap-3">
      <Input
        placeholder="Search blog..."
        className="max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" className="gap-1.5">
            <FunnelIcon size={14} />
            {SORT_LABELS[sort]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {(Object.entries(SORT_LABELS) as [SortOption, string][]).map(
            ([key, label]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => setSort(key)}
                className={sort === key ? "text-brand font-medium" : ""}
              >
                {label}
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* Filter tabs + view toggle */}
    <div className="flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-1">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px
              ${
                filter === tab
                  ? "border-brand text-foreground"
                  : "border-transparent text-foreground-muted hover:text-foreground"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="ml-1.5 text-xs text-foreground-muted">
              ({counts[tab] ?? 0})
            </span>
          </button>
        ))}
      </div>

      <ButtonGroup>
        {(["list", "grid"] as const).map((view) => (
          <Button
            key={view}
            size="sm"
            variant={blogView === view ? "default" : "outline"}
            onClick={() => setBlogView(view)}
          >
            {view === "list" ? <ListBulletsIcon /> : <GridNineIcon />}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  </div>
);

export default FilterTabs;
