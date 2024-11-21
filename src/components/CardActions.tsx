import { useState } from "react";
import { Download, Share2, Loader2 } from "lucide-react";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { Box, Button } from "@mui/material";

interface CardActionsProps {
  cardRef: React.RefObject<HTMLDivElement>;
  username: string;
}

export function CardActions({ cardRef, username }: CardActionsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const downloadCard = async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = `gitpulse-card-${username}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Card downloaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to download card");
    } finally {
      setIsDownloading(false);
    }
  };

  const shareCard = async () => {
    if (!cardRef.current) return;

    setIsSharing(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2,
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `github-card-${username}.png`, {
        type: "image/png",
      });

      if (navigator.share) {
        await navigator.share({
          title: `GitHub Card - ${username}`,
          text: "Check out my GitHub stats created with Gitpulse!",
          files: [file],
        });
        toast.success("Card shared successfully!");
      } else {
        // Fallback: Provide a downloadable link as a fallback
        const fallbackLink = document.createElement("a");
        fallbackLink.download = `gitpulse-card-${username}.png`;
        fallbackLink.href = dataUrl;
        fallbackLink.click();
        toast.info("Sharing is not supported; Image downloaded instead.");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to share card");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Box className="flex mb-1 gap-1">
      {/* Download Button */}
      <Button
        onClick={downloadCard}
        className="normal-case text-blue-600"
        disabled={isDownloading}
      >
        {isDownloading ? (
          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
        ) : (
          <Download className="w-4 mr-1 h-4" />
        )}
        Download
      </Button>

      {/* Share Button */}
      <Button
        onClick={shareCard}
        className="normal-case text-blue-600"
        disabled={isSharing}
      >
        {isSharing ? (
          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
        ) : (
          <Share2 className="w-4 mr-1 h-4" />
        )}
        Share
      </Button>
    </Box>
  );
}
