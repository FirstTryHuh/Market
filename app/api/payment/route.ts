import { NextRequest, NextResponse } from 'next/server'
import payos from '../Payos'

export async function POST(req: NextRequest) {
  try {
    const { productId, productName, amount, quantity } = await req.json()

    const orderCode = Date.now()

    const paymentLink = await payos.paymentRequests.create({
      orderCode,
      amount,
      expiredAt: Math.floor(Date.now() / 1000) + 60 * 15,
      description: `Pay for order ${orderCode}`.substring(0, 25),
      items: [{ name: productName.substring(0, 50), quantity, price: amount }],
      returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${productId}?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${productId}?cancelled=true`,
    })

    console.log('[PayOS Response]', JSON.stringify(paymentLink, null, 2))

    return NextResponse.json({
      qrCode: paymentLink.qrCode,
      checkoutUrl: paymentLink.checkoutUrl,
      orderCode,
    })
  } catch (err) {
    console.error('[PayOS Error]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
