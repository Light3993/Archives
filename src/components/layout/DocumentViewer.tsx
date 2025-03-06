import React from 'react';
import { Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface DocumentViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ url, title, onClose }) => {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [scale, setScale] = React.useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.max(1, Math.min(newPageNumber, numPages || 1));
    });
  };

  const adjustScale = (factor: number) => {
    setScale(prevScale => {
      const newScale = prevScale * factor;
      return Math.max(0.5, Math.min(newScale, 2.0));
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg w-full max-w-4xl overflow-hidden"
      >
        {/* En-tête */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center space-x-4">
            <a
              href={url}
              download
              className="flex items-center px-3 py-1 text-blue-600 hover:text-blue-700"
            >
              <Download size={20} className="mr-1" />
              Télécharger
            </a>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Contrôles de navigation */}
        <div className="flex items-center justify-center space-x-4 p-2 bg-gray-50">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm">
            Page {pageNumber} sur {numPages || '?'}
          </span>
          <button
            onClick={() => changePage(1)}
            disabled={pageNumber >= (numPages || 1)}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
          <div className="border-l mx-2 h-6" />
          <button
            onClick={() => adjustScale(1.1)}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Zoom +
          </button>
          <button
            onClick={() => adjustScale(0.9)}
            className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Zoom -
          </button>
        </div>

        {/* Visualiseur PDF */}
        <div className="h-[calc(80vh-8rem)] overflow-auto bg-gray-100 flex justify-center">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </motion.div>
    </motion.div>
  );
};