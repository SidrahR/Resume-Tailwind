import { NextResponse } from "next/server";
export async function GET() {
  const data = [
    { ref: "main", name: "Home" },
    { ref: "about", name: "About" },
    { ref: "skills", name: "Skills" },
    { ref: "experiences", name: "Experiences" },
    { ref: "portfolio", name: "Portfolio" },
    { ref: "pricing", name: "Pricing" },
    { ref: "contact", name: "Contact" },
  ];

  return NextResponse.json(data);
}
