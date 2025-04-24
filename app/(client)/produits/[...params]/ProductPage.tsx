"use client";
// @/src/pages/ProductPage.tsx

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MediaSection,
  MediaSectionAside,
  MediaSectionBody,
  MediaSectionContent,
  MediaSectionDescription,
  MediaSectionHeader,
  MediaSectionTitle,
} from "@/src/blocks/media section/media-section";
import { Rating } from "@/src/components/ui/rating";
import { Badge } from "@/src/components/ui/badge";
import { StockIndicator } from "@/src/components/ui/StockIndicator";
import { Input } from "@/src/components/ui/input";
import AddToCartButton from "@/src/components/ui/AddToCartButton";
import { Button } from "@/src/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/src/components/ui/form";

// Données produits
import { CBD_FLOWERS } from "@/productsFleursCBD.exemple";

interface ProductPageProps {
  productId: string;
  categorySegments: string[];
}

// Schéma de validation
const FormSchema = z.object({
  package: z.string().nonempty({ message: "Sélectionnez un pack" }),
  quantity: z.number().min(1, { message: "La quantité doit être supérieure à 0" }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ProductPage({ productId, categorySegments }: ProductPageProps) {
  const product = CBD_FLOWERS.find((p) => p.id === productId);
  if (!product) {
    return <p>Produit non trouvé.</p>;
  }

  // Lien retour catégorie
  const backLink = "/produits/" + (categorySegments.join("/") || "");

  // Options de vente (prix de vente)
  const salesOptions =
    product.options?.find((opt) => opt.id === "prixdevente")?.values || [];
  const defaultOptionId =
    salesOptions.find((v) => v.isDefault)?.id || salesOptions[0]?.id || "";

  // Hook form
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { package: defaultOptionId, quantity: 1 },
  });

  const watchPackage = form.watch("package");
  const watchQuantity = form.watch("quantity") || 1;

  // Prix unitaire et total
  const [selectedOption, setSelectedOption] = useState<
    (typeof salesOptions)[number] | undefined
  >(undefined);
  const [unitPrice, setUnitPrice] = useState<number>(product.price || 0);
  const [totalPrice, setTotalPrice] = useState<number>(product.price || 0);

  useEffect(() => {
    // Option choisie
    const opt = salesOptions.find((v) => v.id === watchPackage);
    setSelectedOption(opt);
    if (!opt) {
      setUnitPrice(0);
      setTotalPrice(0);
      return;
    }
    // Calcul du poids total
    const totalGrams = opt.quantity! * watchQuantity;
    // Déterminer le meilleur palier tarifaire selon le totalGrams
    const applicableTier = salesOptions
      .slice()
      .sort((a, b) => a.quantity! - b.quantity!)
      .filter((v) => v.quantity! <= totalGrams)
      .pop() || opt;
    // Prix unitaire selon le palier
    setUnitPrice(applicableTier.unitPrice!);
    // Prix total = totalGrams * unitPrice
    setTotalPrice(totalGrams * applicableTier.unitPrice!);
  }, [watchPackage, watchQuantity, salesOptions]);

  // Ajouter au panier
  const handleAddToCart = (data: FormValues) => {
    if (!selectedOption) return;
    const cartItem = {
      id: product.id,
      name: product.name,
      unitPrice,
      quantity: data.quantity,
      option: {
        id: selectedOption.id,
        name: selectedOption.name,
        quantity: selectedOption.quantity,
        unit: selectedOption.unit,
      },
      totalPrice,
    };
    // TODO: logique d'ajout au panier
  };

  return (
    <div className="w-full mx-auto space-y-6">
      {/* <Link
        href={backLink}
        className="text-primary flex items-center gap-2 hover:underline"
      >
        <span>←</span> Retour à la catégorie
      </Link> */}

      <MediaSection>
        <MediaSectionAside className="xl:sticky xl:self-start shrink-0 xl:top-24">
          {product.primaryMedia?.type === "image" && (
            <img
              src={product.primaryMedia.url}
              alt={product.primaryMedia.alt}
              className="w-100 aspect-square mx-auto object-cover rounded shadow-md"
            />
          )}
          {product.primaryMedia?.type === "video" && (
            <video
              controls
              className="w-full h-80 object-cover rounded shadow-md"
            >
              <source src={product.primaryMedia.url} type="video/mp4" />
            </video>
          )}

          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Catégorie:</span>
              <Badge variant="outline">
                {product.category?.name || "Non catégorisé"}
              </Badge>
            </div>
            {product.category?.subcategories?.[0] && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Type:</span>
                <Badge>{product.category.subcategories[0].name}</Badge>
              </div>
            )}
            {product.stock && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Stock:</span>
                <StockIndicator stock={product.stock.quantity} />
              </div>
            )}
          </div>
        </MediaSectionAside>

        <MediaSectionBody className="">
          <MediaSectionHeader className="pt-0">
            <div className="flex justify-between items-start">
              <div>
                <MediaSectionTitle>{product.name}</MediaSectionTitle>
                {product.reviewSummary && (
                  <div className="flex items-center gap-2 mt-1">
                    <Rating
                      value={product.reviewSummary.averageRating}
                      readOnly
                    />
                    <span className="text-sm text-muted-foreground">
                      {product.reviewSummary.totalReviews} avis
                    </span>
                  </div>
                )}
              </div>
            </div>
          </MediaSectionHeader>

          <MediaSectionContent>
            <MediaSectionDescription>
              {product.description}
            </MediaSectionDescription>

            <div className="mt-8 space-y-6">
              <h3 className="text-lg font-semibold">Sélectionnez un pack</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleAddToCart)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormControl>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-120">
                            {salesOptions.map((value) => (
                              <Button
                                key={value.id}
                                type="button"
                                variant={
                                  field.value === value.id ? "default" : "outline"
                                }
                                className="w-full"
                                onClick={() => field.onChange(value.id)}
                              >
                                <span className="font-medium">{value.name}</span>
                                <span className="text-sm ml-2">
                                  {value.totalPrice?.toFixed(2)} €
                                </span>
                              </Button>
                            ))}
                          </div>
                        </FormControl>
                        {form.formState.errors.package && (
                          <p className="text-destructive text-sm">
                            {form.formState.errors.package.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="border-t pt-4">
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-4">
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <Button id="btn-subtract"
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => field.onChange(Math.max(1, (field.value || 1) - 1))}
                                  >
                                    -
                                  </Button>
                                  <Input id="input-quantity"
                                    type="number"
                                    min={1}
                                    value={field.value || 1}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                    className="w-16 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    style={{ MozAppearance: "textfield" }} // firefox
                                  />
                                  <Button id="btn-add"
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => field.onChange((field.value || 1) + 1)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </FormControl>
                              {form.formState.errors.quantity && (
                                <p className="text-destructive text-sm mt-1">
                                  {form.formState.errors.quantity.message}
                                </p>
                              )}
                            </FormItem>
                          )}
                        />

                        <AddToCartButton
                          type="submit"
                          product={{ ...product, price: unitPrice }}
                          quantity={selectedOption?.quantity! * watchQuantity}
                          price= {totalPrice}
                          className="flex-1"
                          disabled={!selectedOption || watchQuantity < 1}
                          onAddToCart={() => {}}
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm text-muted-foreground">Montant total :</p>
                        <p className="text-2xl font-bold mt-1">
                          {totalPrice.toFixed(2)} €
                        </p>
                      {selectedOption && (
                        <span className="text-xs text-muted-foreground self-end">
                        {selectedOption.quantity! * watchQuantity}{selectedOption.unit} à {unitPrice} €/ {selectedOption.unit}
                      </span>
                      )}
                    </div>
                      </div>
                  </div>
                </form>
              </Form>
            </div>

            {/* Informations produit et expédition */}
            <div className="mt-10 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Informations produit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Caractéristiques</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Produit cultivé en {product.category?.subcategories?.[0]?.name || "Intérieur"}
                    </li>
                    <li>Récolte {new Date().getFullYear()}</li>
                    <li>Taux de CBD conforme à la législation</li>
                    <li>Testé en laboratoire</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Expédition</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Livraison rapide sous 48h</li>
                    <li>Emballage discret</li>
                    <li>Suivi de commande</li>
                    <li>Satisfait ou remboursé</li>
                  </ul>
                </div>
              </div>
            </div>
          </MediaSectionContent>
        </MediaSectionBody>
      </MediaSection>
    </div>
  );
}
