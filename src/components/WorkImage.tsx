import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  variant?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imageAvailable, setImageAvailable] = useState(
    !props.image.includes("placeholder")
  );
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {imageAvailable ? (
          <img
            src={props.image}
            alt={props.alt}
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div
            className={`work-image-fallback project-visual project-visual-${props.variant ?? "default"}`}
            aria-label={props.alt}
          >
            <div className="project-visual-icon">
              {props.variant === "security" && "◈"}
              {props.variant === "health" && "+"}
              {props.variant === "java" && "J"}
              {props.variant === "web" && "</>"}
              {props.variant === "assembly" && "6809"}
              {props.variant === "network" && "⌁"}
            </div>
            <small>{props.alt}</small>
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
