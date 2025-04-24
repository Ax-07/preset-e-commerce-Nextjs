// pages/api/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/src/lib/stripe/stripe.config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    const headersList = new Headers(req.headers);
    const origin = headersList.get("origin");

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: "Items invalides" }, { status: 400 });
    }

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.unitPrice * 100), // montant en centimes
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url }); // ✅ pas redirect côté API
  } catch (err: any) {
    console.error("Erreur Stripe:", err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
