import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  page: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const PaginationEl = ({
  page,
  totalPages,
  total,
  limit,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) return null;

  // Build page number list with ellipsis markers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
    .reduce<(number | "ellipsis-start" | "ellipsis-end")[]>(
      (acc, p, i, arr) => {
        if (i > 0 && p - (arr[i - 1] as number) > 1) {
          acc.push(i === 1 ? "ellipsis-start" : "ellipsis-end");
        }
        acc.push(p);
        return acc;
      },
      [],
    );

  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  return (
    <div className="flex flex-col items-center gap-2 pt-2">
      <p className="text-xs text-foreground-muted">
        Showing {from}–{to} of {total} post{total !== 1 ? "s" : ""}
      </p>

      <Pagination>
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) onPageChange(page - 1);
              }}
              aria-disabled={page === 1}
              className={page === 1 ? "pointer-events-none opacity-40" : ""}
            />
          </PaginationItem>

          {/* Page numbers + ellipses */}
          {pages.map((p, i) =>
            p === "ellipsis-start" || p === "ellipsis-end" ? (
              <PaginationItem key={p}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(p as number);
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) onPageChange(page + 1);
              }}
              aria-disabled={page === totalPages}
              className={
                page === totalPages ? "pointer-events-none opacity-40" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationEl;
