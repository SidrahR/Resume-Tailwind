import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = buildStyles({
  textColor: "#374151",
  pathColor: "#2dd4bf",
  trailColor: "#9ca3af",
});

export default function CProgressBar({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) {
  return (
    <div className="flex flex-col w-fit items-center">
      <div className="w-24 h-24">
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          styles={styles}
        />
      </div>
      <h3 className="mt-3 font-semibold">{skill}</h3>
    </div>
  );
}
