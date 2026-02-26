"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { orderFormSchema, type OrderFormInput, type OrderFormValues } from "@/lib/validation/order";

type SubmissionResult = {
  accepted: boolean;
  message: string;
  payload: OrderFormValues;
};

export function OrderEntryForm() {
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormInput, unknown, OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      symbol: "",
      side: "BUY",
      quantity: 1,
      limitPrice: undefined,
    },
  });

  const onSubmit = async (values: OrderFormValues) => {
    const accepted = values.quantity <= 10_000;
    setResult({
      accepted,
      message: accepted ? "Order accepted by baseline risk gate." : "Order requires risk review.",
      payload: values,
    });

    if (accepted) {
      reset({ side: values.side, symbol: "", quantity: 1, limitPrice: undefined });
    }
  };

  return (
    <div className="card space-y-4">
      <div className="label">New Order</div>
      <form className="grid gap-3 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <label className="space-y-1">
          <div className="label">Symbol</div>
          <input
            {...register("symbol")}
            className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm"
            placeholder="AAPL"
          />
          {errors.symbol ? <p className="text-xs text-red-300">{errors.symbol.message}</p> : null}
        </label>

        <label className="space-y-1">
          <div className="label">Side</div>
          <select
            {...register("side")}
            className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm"
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
          {errors.side ? <p className="text-xs text-red-300">{errors.side.message}</p> : null}
        </label>

        <label className="space-y-1">
          <div className="label">Quantity</div>
          <input
            {...register("quantity")}
            className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm"
            inputMode="numeric"
            type="number"
          />
          {errors.quantity ? (
            <p className="text-xs text-red-300">{errors.quantity.message}</p>
          ) : null}
        </label>

        <label className="space-y-1">
          <div className="label">Limit Price (Optional)</div>
          <input
            {...register("limitPrice")}
            className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm"
            inputMode="decimal"
            placeholder="185.25"
            type="number"
            step="0.01"
          />
          {errors.limitPrice ? (
            <p className="text-xs text-red-300">{errors.limitPrice.message}</p>
          ) : null}
        </label>

        <div className="md:col-span-2 flex gap-2">
          <Button disabled={isSubmitting} type="submit">
            Submit Order
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              reset({ side: "BUY", symbol: "", quantity: 1, limitPrice: undefined });
              setResult(null);
            }}
          >
            Reset
          </Button>
        </div>
      </form>

      {result ? (
        <div className="rounded-md border border-white/15 bg-black/20 p-3 text-sm">
          <p className={result.accepted ? "text-emerald-300" : "text-amber-300"}>
            {result.message}
          </p>
          <pre className="mt-2 overflow-x-auto text-xs text-white/80">
            {JSON.stringify(result.payload, null, 2)}
          </pre>
        </div>
      ) : null}
    </div>
  );
}
