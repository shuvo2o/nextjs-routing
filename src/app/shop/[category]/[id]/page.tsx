import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  return (
    <div>
      <h1>Product Details</h1>
      <p>
        Product Category: <span className="capitalize">{category}</span>
      </p>
      <p>
        <span>{category} Item:</span> {id}
      </p>
    </div>
  );
}
