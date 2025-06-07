import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showInfo?: boolean;
}

function Pagination({ 
  totalItems, 
  itemsPerPage, 
  currentPage, 
  onPageChange, 
  showInfo = true 
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between">
      {showInfo && (
        <div className="flex-1 text-sm text-surface-600">
          Showing <span className="font-medium text-surface-900">{startItem}</span> to{' '}
          <span className="font-medium text-surface-900">{endItem}</span> of{' '}
          <span className="font-medium text-surface-900">{totalItems}</span> results
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-surface-500 bg-white border border-surface-300 rounded-lg hover:bg-surface-50 hover:text-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <HiChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </button>

        <div className="flex items-center space-x-1">
          {getVisiblePages().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-sm text-surface-500">...</span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-surface-700 bg-white border border-surface-300 hover:bg-surface-50 hover:text-surface-900'
                  }`}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-surface-500 bg-white border border-surface-300 rounded-lg hover:bg-surface-50 hover:text-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <HiChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

// Legacy component for backward compatibility
function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100; // Example total items

  return (
    <div className="space-y-4">
      <div className="text-center text-surface-600">
        <p>This is a demo pagination component</p>
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default PaginatedItems;
export { Pagination };
