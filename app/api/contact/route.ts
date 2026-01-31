import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    
    if (!client) {
      return new Response(
        JSON.stringify({ ok: false, error: "Database connection failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    
    const db = client.db();

    await db.collection("contact_messages").insertOne({
      name,
      email,
      subject: subject || "General Inquiry",
      message,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
