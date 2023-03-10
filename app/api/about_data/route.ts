import { NextResponse } from "next/server";
export async function GET() {
  const data = [
    { lang: "Javascript" },
    { lang: "Typescript" },
    { lang: "HTML" },
    { lang: "Java" },
    { lang: "Python" },
    { lang: "R" },
    { lang: "C++" },
    { lang: "React" },
    { lang: "Next.js" },
    { lang: "Tailwind CSS" },
    { lang: "Chakra UI" },
    { lang: "Node.js" },
  ];

  return NextResponse.json(data);
}
