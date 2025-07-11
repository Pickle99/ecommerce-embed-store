import crypto from 'crypto'

export async function addRUPExtraFieldToOrder(storeId: string, apiKey: string, orderId: number) {
  const randomId = crypto.randomBytes(6).toString('hex')
  const url = `https://app.ecwid.com/api/v3/${storeId}/orders/${orderId}/extraFields`

  const payload = {
    id: 'added_to_cart_from_rup_section',
    value: 'true',
    customerInputType: 'TEXT',
    title: 'Added From RUP Section',
    orderDetailsDisplaySection: 'billing_info',
    showInNotifications: false,
    showInInvoice: false,
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  console.log('response', res)

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(`Failed to add extra field: ${res.status} ${errorBody}`)
  }

  return await res.json()
}
