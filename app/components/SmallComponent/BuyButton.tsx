'use client'

import { useState } from 'react'
import style from '../css/BuyButton.module.css'

interface Props {
  productId: number
  productName: string
  amount: number
  maxQuantity: number
}

export default function BuyButton({ productId, productName, amount, maxQuantity }: Props) {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const quantity = Math.min(Math.max(Number(formData.get('quantity')) || 1, 1), maxQuantity)

    setLoading(true)
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, productName, amount, quantity }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Payment failed')
      const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(data.qrCode)}`
      setQrCode(qrImageUrl)
      setCheckoutUrl(data.checkoutUrl)
    } catch (err) {
      alert(`Error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  function closeModal() {
    setQrCode(null)
    setCheckoutUrl(null)
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.quantityRow}>
          
          <label>Quantity:</label>
          <input
            className={style.quantityInput}
            type="number"
            name="quantity"
            min="1"
            max={maxQuantity}
            defaultValue={1}
          />
          <div className={style.quantity2}>
              Only {maxQuantity} available
            </div>
        </div>
        <button className={style.buyNow} type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Buy now'}
        </button>
      </form>

      {qrCode && (
        <div className={style.overlay}>
          <div className={style.modal}>
            <h2>Scan to Pay</h2>
            <img className={style.qrImg} src={qrCode} alt="Payment QR Code" />
            <a className={style.payLink} href={checkoutUrl!} target="_blank" rel="noopener noreferrer">
              Or pay via link
            </a>
            <button className={style.closeBtn} type="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
