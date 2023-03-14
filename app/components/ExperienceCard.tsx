type Work = { designation: string; year: string; work: string };

export default function ExperienceCard({ designation, year, work }: Work) {
  return (
    <div className="border h-full border-1 border-gray-200 shadow-lg bg-white">
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold">{designation}</h3>
        <p className="text-teal-400 font-bold">{year}</p>
        <p className="text-sm">{work}</p>
      </div>
    </div>
  );
}
