import { useState } from "react";
import emptyThumbnail from "../../assets/images/content/empty-thumbnail.png";
import type { Project } from "../../types/project";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-[#6f76fd] transition-all hover:shadow-xl"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        {/* SKELETON */}
        {!imageLoaded && (
          <div className="w-full h-full animate-pulse bg-gray-200" />
        )}

        {/* IMAGE */}
        <img
          src={project.thumbnailImage || emptyThumbnail}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* STATUS BADGE */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              project.status === "completed"
                ? "bg-green-100 text-green-700"
                : project.status === "in-development"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
            }`}
          >
            {project.status === "completed"
              ? "Completed"
              : project.status === "in-development"
                ? "In Development"
                : "Planned"}
          </span>
        </div>

        {/* TITLE & DESCRIPTION */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6f76fd] transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full group-hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-[#6f76fd] font-semibold text-sm group-hover:gap-3 transition-all">
          View Details
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
