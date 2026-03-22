import { useMemo } from "react";
import "./Space.scss";

export default function Space() {
  const stars = useMemo(() => {
    return [...Array(200)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 5}s`,
        }}
      />
    ));
  }, []);
  return <div>{stars}</div>;
}
