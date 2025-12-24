import { useEffect, useState } from "react";
import api from "../api/api";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Experience() {
  const [items, setItems] = useState([]);
  useScrollReveal();

  useEffect(() => {
    api.get("/experience")
      .then(res => {
        console.log("Experience data:", res.data);
        setItems(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="section-title">Experience</h1>

      <div className="timeline">
        {items.map((item) => {
          const org =
            item.org ||
            item.company ||
            "—";

          const year =
            item.year ||
            `${item.startDate || ""} – ${item.endDate || ""}`;

          return (
            <div key={item._id}className="timeline-item fade-up show">
              <h3 className="timeline-title">{item.title}</h3>

              <span className="timeline-org">
                {org} • {year}
              </span>

              <p className="timeline-desc">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
