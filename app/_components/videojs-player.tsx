import "@videojs/react/video/skin.css";
import { VideoPlayer, VideoSkin, Video } from "@videojs/react/video";

export default function VideoJsPlayer({
  src,
  aspectRatio,
  width,
}: {
  src: string;
  aspectRatio: string;
  width: string;
}) {
  return (
    <VideoPlayer>
      <VideoSkin style={
        {
          width,
          aspectRatio,
          '--media-font-family': 'Funnel Display'
        } as React.CSSProperties
      }>
        <Video src={src} playsInline autoPlay />
      </VideoSkin>
    </VideoPlayer>
  );
}
