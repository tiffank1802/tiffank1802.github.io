import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

const PdfModal = ({ work, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  const options = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
  }), []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pdf-overlay" onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        className="pdf-modal" onClick={(e) => e.stopPropagation()}
      >
        <div className="pdf-header">
          <span className="pdf-title">{work.title}</span>
          <div className="pdf-header-actions">
            <a href={work.file} download className="btn btn-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              PDF
            </a>
            <button className="btn-close" onClick={onClose}>✕</button>
          </div>
        </div>
        <div className="pdf-viewer">
          <Document
            file={work.file}
            onLoadSuccess={({ numPages: n }) => { setNumPages(n); setLoading(false); }}
            onLoadError={() => setLoading(false)}
            loading={<div className="pdf-status">Chargement du document…</div>}
            error={<div className="pdf-status">Erreur de chargement du PDF.</div>}
            options={options}
          >
            <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer className="pdf-page" />
          </Document>
        </div>
        {numPages && (
          <div className="pdf-footer">
            <button className="btn btn-page" onClick={() => setPageNumber(Math.max(1, pageNumber - 1))} disabled={pageNumber <= 1}>◀ Prev</button>
            <span className="pdf-page-info">{pageNumber} / {numPages}</span>
            <button className="btn btn-page" onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))} disabled={pageNumber >= numPages}>Next ▶</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PdfModal;
