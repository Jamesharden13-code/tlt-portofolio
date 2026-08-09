import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  id: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {

  const [selectedImg , setSelectedImg] = useState<GalleryImage | null >(null)
  return (
  <div className="w-full max-w-5xl mx-auto px-12 relative">
    <Carousel
      className="w-full mx-auto"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      {/* <CarouselContent className="-ml-1 not-prose"> */}
      <CarouselContent className="-ml-2 md:-ml-4 not-prose">
        {images.map((image, index) => (
          // <CarouselItem key={index} className="pl-1 relative">
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
            <div 
              onClick={ () =>
                setSelectedImg(image)
              }
              className="cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* <Card> */}
              <Card className="overflow-hidden border border-muted shadow-md rounded-xl">
                {/* <CardContent> */}
                <CardContent className="p-0">
                  {/* <AspectRatio ratio={16 / 9} className="h-full w-full"> */}
                  <AspectRatio ratio={9 / 16} className="h-full w-full bg-zinc-900">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full rounded-md object-cover"
                      width={600}
                      height={600}
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className=" md:left-[-3rem] absolute  left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className=" md:right-[-3rem] absolute right-4  top-1/2 -translate-y-1/2" /> */}
      <CarouselPrevious className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>

    {/* modal */}
    <Dialog open={!!selectedImg} onOpenChange={ (open) => !open && setSelectedImg(null)}>
      {/* <DialogContent className='max-w-3xl p-0 overflow-hidden border-none sm:rounded-2xl'> */}
      <DialogContent className="w-[95vw] max-w-6xl h-[90vh] p-2 overflow-hidden border-none sm:rounded-2xl">
          <DialogTitle className="sr-only">
            {selectedImg?.alt || "Aperçu de l'image"}
          </DialogTitle>
          {
            selectedImg && (
            // <div className='relative flex flex-col justify-center items-center max-h-[85vh] sm:max-h-[75vh] p-2 sm:p-4 '>
            <div className="flex h-full w-full flex-col items-center justify-center p-4">
              <img
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  // className="max-w-full max-h-[50vh] sm:max-w-[55vh] object-contain rounded-lg shadow-2xl"
                  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"  
                  width={1200}
                  height={1200}
              />
              {selectedImg.caption && (
                <p className="mt-4 text-center text-sm text-zinc-300 px-4">
                  {selectedImg.caption}
                </p>
              )}
            </div>
            ) 
          }
      </DialogContent>
    </Dialog>
  </div>
  );
}
