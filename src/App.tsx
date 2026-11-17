import { useState } from 'react'
import './App.css'

const VAT_RATE = 0.255 // 25,5 %

function App() {
  const [amount, setAmount] = useState('')
  const [vat, setVat] = useState<number | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  const calculate = () => {
    const price = parseFloat(amount.replace(',', '.'))
    if (isNaN(price)) {
      setVat(null)
      setTotal(null)
      return
    }
    const vatAmount = price * VAT_RATE
    setVat(vatAmount)
    setTotal(price + vatAmount)
  }

  return (
    <>
      <h1>Vat Calculator</h1>
      <div className="card">
        <label>
          Amount (€):{' '}
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <p>
          <button onClick={calculate}>Calculate VAT</button>
        </p>
      </div>
      <p>
        VAT (€): {vat === null ? '' : vat.toFixed(2)}, Total (€):{' '}
        {total === null ? '' : total.toFixed(2)}
      </p>
    </>
  )
}

export default App