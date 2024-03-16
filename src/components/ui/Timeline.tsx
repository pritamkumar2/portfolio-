"use client";
import React, { useState, useRef, useEffect } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight || 0;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = expanded ? `${contentHeight}px` : "0";
    }
  }, [expanded, contentHeight]);

  return (
    <div className="timeline__item">
      <div className="timeline__item-header">
        <button
          className="timeline__arrow"
          type="button"
          aria-expanded={expanded}
          onClick={handleToggle}
        >
          <svg
            className="timeline__arrow-icon"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <use href="#arrow" />
          </svg>
        </button>
        <span className="timeline__dot"></span>
        <span className="timeline__meta">
          <time className="timeline__date" dateTime={date}>
            {date}
          </time>
          <br />
          <strong className="timeline__title">{title}</strong>
        </span>
      </div>
      <div
        className="timeline__item-body"
        aria-hidden={!expanded}
        ref={contentRef}
        style={{ overflow: "hidden", transition: "height 0.3s" }}
      >
        <div className="timeline__item-body-content">
          <p className="timeline__item-p">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <TimelineItem
        date="1,oct 2022"
        title="started web development"
        content="learned from html css javascript."
      />
      <TimelineItem
        date="2023 9, jan "
        title="started react and tailwind"
        content="started learn react maked small small project like todo list etc."
      />
      <TimelineItem
        date="2023-2024"
        title="TechnoHacks EduTech (intern)"
        content="I started internship in TechnoHacks."
      />
      <TimelineItem
        date=""
        title="Wating for new opportunity"
        content="waiting for new opportunity"
      />
    </div>
  );
};

export default Timeline;
