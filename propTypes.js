import PropTypes from "prop-types";

// Define prop types for Project
export const ProjectProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
  liveURL: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
});

// Define prop types for skill
export const SkillProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  logoURL: PropTypes.string.isRequired,
});

// Define prop types for skill
export const SkillGroupProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(SkillProps).isRequired,
});

// Define prop types for experience
export const ExperienceProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.object).isRequired,
});
