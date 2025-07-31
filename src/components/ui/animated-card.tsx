import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export const AnimatedCard = ({ 
  children, 
  className = "", 
  showImage = false, 
  imageSrc, 
  imageAlt 
}: AnimatedCardProps) => {
  return (
    <Card className={`h-full overflow-hidden rounded-2xl relative bg-gradient-to-br from-white via-slate-50 to-white shadow-lg group ${className}`}>
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 p-[2px] animate-gradient-shift">
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white via-slate-50 to-white"></div>
      </div>
      {/* Animated shadow gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10 animate-glow-pulse"></div>
      
      {showImage && imageSrc && (
        <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
          <img 
            src={imageSrc} 
            alt={imageAlt || ""}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className="p-6 relative z-10">
        {children}
      </CardContent>
    </Card>
  );
}; 