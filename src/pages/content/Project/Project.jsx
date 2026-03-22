import "./Project.scss";
import { projects } from "../../../assets/components/Projects/Projects";
import { useParams, useLocation } from "react-router-dom";
export default function Project() {
  const { slug } = useParams();
  const location = useLocation();

  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <div>{project.name}</div>
      <div>{project.description}</div>
    </>
  );
}
