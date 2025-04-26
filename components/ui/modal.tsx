import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  sourceLink?: string;
  badges?: string[];
  icon?: React.ReactNode;
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  content,
  videoUrl, 
  sourceLink,
  badges,
  icon
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <Card className="relative z-50 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-background/80"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-lg">{description}</p>
        </CardHeader>

        {/* Cover Image Section */}
        <div className="relative w-full h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-background/80 rounded-full flex items-center justify-center backdrop-blur-sm">
              {icon}
            </div>
          </div>
        </div>

        <CardContent className="space-y-6 pt-6">
          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{content}</p>
          </div>
          
          {/* Video Section */}
          {videoUrl && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Project Demo</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Source Link */}
          {sourceLink && (
            <div className="pt-4">
              <Button asChild className="w-full" size="lg">
                <a 
                  href={sourceLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  View Source Code
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 