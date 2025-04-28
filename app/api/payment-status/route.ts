// src/pages/api/payment-status.ts

import { stripe } from "@/src/lib/stripe/stripe.config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  const { clientSecret } = req.body;

  if (!clientSecret) {
    return res.status(400).json({ error: "Client secret missing" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      clientSecret.split("_secret")[0]
    );

    return res.status(200).json({ status: paymentIntent.status });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
