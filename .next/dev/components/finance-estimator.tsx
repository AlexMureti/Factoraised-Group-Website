"use client"

import { useState, useMemo } from "react"
import { Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatPrice } from "@/lib/inventory"

interface FinanceEstimatorProps {
  carPrice: number
}

export function FinanceEstimator({ carPrice }: FinanceEstimatorProps) {
  const [deposit, setDeposit] = useState(Math.round(carPrice * 0.2))
  const [term, setTerm] = useState(36)
  const [interestRate, setInterestRate] = useState(14)

  const monthlyPayment = useMemo(() => {
    const principal = carPrice - deposit
    const monthlyRate = interestRate / 100 / 12
    const numPayments = term

    if (monthlyRate === 0) {
      return principal / numPayments
    }

    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    return Math.round(payment)
  }, [carPrice, deposit, term, interestRate])

  const totalPayment = monthlyPayment * term + deposit
  const totalInterest = totalPayment - carPrice

  return (
    <Card className="bg-[#2A2D30] border-[#3a3d40]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Calculator className="h-5 w-5 text-[#0FB4FF]" />
          Finance Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Deposit */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-[#C0C4C7]">Deposit</Label>
            <span className="text-white font-medium">{formatPrice(deposit)}</span>
          </div>
          <Slider
            value={[deposit]}
            min={0}
            max={carPrice * 0.5}
            step={50000}
            onValueChange={([value]) => setDeposit(value)}
            className="[&_[role=slider]]:bg-[#0FB4FF]"
          />
        </div>

        {/* Loan Term */}
        <div className="space-y-2">
          <Label className="text-[#C0C4C7]">Loan Term</Label>
          <Select value={term.toString()} onValueChange={(value) => setTerm(Number(value))}>
            <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
              <SelectItem value="12" className="text-white">
                12 months
              </SelectItem>
              <SelectItem value="24" className="text-white">
                24 months
              </SelectItem>
              <SelectItem value="36" className="text-white">
                36 months
              </SelectItem>
              <SelectItem value="48" className="text-white">
                48 months
              </SelectItem>
              <SelectItem value="60" className="text-white">
                60 months
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-[#C0C4C7]">Interest Rate (est.)</Label>
            <span className="text-white font-medium">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            min={10}
            max={20}
            step={0.5}
            onValueChange={([value]) => setInterestRate(value)}
            className="[&_[role=slider]]:bg-[#0FB4FF]"
          />
        </div>

        {/* Results */}
        <div className="pt-4 border-t border-[#3a3d40] space-y-3">
          <div className="flex justify-between">
            <span className="text-[#6F7377]">Loan Amount</span>
            <span className="text-white">{formatPrice(carPrice - deposit)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6F7377]">Total Interest</span>
            <span className="text-white">{formatPrice(totalInterest)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-white">Monthly Payment</span>
            <span className="text-[#0FB4FF]">{formatPrice(monthlyPayment)}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#6F7377]">
          This is an estimate only. Actual rates and payments depend on your financial institution and credit profile.
        </p>
      </CardContent>
    </Card>
  )
}
