// app/api/create-payment-intent/route.ts

import { stripe } from '@/src/lib/stripe/stripe.config';
import { CartItem } from '@/src/stores/cart.store';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const items: CartItem[] = body.items; // Assurez-vous que le corps contient un tableau d'items
      
      // Vérifier que les items sont correctement envoyés
      if (!Array.isArray(items) || items.length === 0) {
        return NextResponse.json({ error: 'Items manquants ou mal formatés' }, { status: 400 });
      }
  
      // Calculer le montant total en centimes
      const totalAmount = items.reduce((total, item) => {
        if (typeof item.unitPrice !== 'number' || typeof item.quantity !== 'number') {
          throw new Error('Les prix et quantités doivent être des nombres');
        }
        return total + (item.unitPrice * item.quantity * 100);
      }, 0);
  
      if (isNaN(totalAmount) || totalAmount <= 0) {
        return NextResponse.json({ error: 'Le montant total est invalide' }, { status: 400 });
      }
  
      // Créer un PaymentIntent avec ce montant
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: 'eur',
        // payment_method: 'pm_card_visa', // Utiliser une carte de test pour le développement
        payment_method_types: ['card'], // Vous pouvez spécifier d'autres méthodes de paiement si nécessaire
        description: 'Achat de produits', // Description facultative
        receipt_email: 'xavier.affringue@gmail.com', // Email du client pour envoyer le reçu
        confirmation_method: 'automatic', // Méthode de confirmation automatique (3d secure si nécessaire)
        // confirm: true, // Confirmer le paiement dès qu'il est créé
      });
  
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }