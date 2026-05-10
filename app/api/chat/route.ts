import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rrdfmfhqgqlxdyzcfkwc.supabase.co",
  "sb_publishable_8F6aodYK1UzLXpKxjcXNtA_VJG7Ub3y"
);

export async function POST(req: Request) {
  const body = await req.json();

  const message = body.message || "";

  const phoneMatch =
    message.match(/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/);

  const lead = {
    name: message.split(" ")[0] || "Unknown",
    phone: phoneMatch ? phoneMatch[0] : "",
    email: "",
    address: "",
  };

  await supabase.from("leads").insert([lead]);

  return Response.json({
    reply: "Lead captured successfully!",
  });
}