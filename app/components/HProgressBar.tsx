export default function HProgressBar({
  skill,
  percent,
}: {
  skill: string;
  percent: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between font-semibold px-1">
        <h3>{skill}</h3>
        <div>{percent}</div>
      </div>

      <div className="my-2 w-full h-2 rounded-full bg-gray-400">
        <div
          className="h-2 bg-teal-400 rounded-full"
          style={{ width: `${percent}` }}
        ></div>
      </div>
    </div>
  );
}
