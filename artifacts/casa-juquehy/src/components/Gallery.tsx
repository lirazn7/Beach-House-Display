import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { GALLERY_IMAGES } from '@/lib/images';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer image-reveal-wrapper"
            onClick={() => setSelectedIdx(idx)}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={img} 
              alt={`Galeria de fotos Casa Juquehy - Imagem ${idx + 1}`}
              className="object-cover w-full h-full image-reveal"
            />
          </div>
        ))}
      </div>

      <Dialog open={selectedIdx !== null} onOpenChange={(open) => !open && setSelectedIdx(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <VisuallyHidden>
            <DialogTitle>Visualizador de Imagens</DialogTitle>
          </VisuallyHidden>
          
          {selectedIdx !== null && (
            <div className="relative flex items-center justify-center w-full h-[80vh]">
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-2 md:left-4 z-50 rounded-full bg-background/80 backdrop-blur hover:bg-background border-none"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <img 
                src={GALLERY_IMAGES[selectedIdx]} 
                alt={`Imagem ampliada ${selectedIdx + 1}`} 
                className="max-h-full max-w-full object-contain rounded-lg"
              />
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-2 md:right-4 z-50 rounded-full bg-background/80 backdrop-blur hover:bg-background border-none"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
