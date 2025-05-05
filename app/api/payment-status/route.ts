// src/pages/api/payment-status.ts

import { stripe } from "@/src/lib/stripe/stripe.config";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
  try {
    const { clientSecret } = await req.json();
    if (!clientSecret) {
      return NextResponse.json(
        { error: "Client secret is required" },
        { status: 400 }
      );
    }
    const paymentIntent = await stripe.paymentIntents.retrieve(
      clientSecret.split("_secret")[0]
    );
    if (!paymentIntent) {
      return NextResponse.json(
        { error: "PaymentIntent not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ status: paymentIntent.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
