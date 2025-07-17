export function setupCartHooks() {
  //@ts-ignore
  Ecwid.OnCartChanged.add((cart) => {
    const cartProductIds = cart.items.map((item: any) => item.product?.id).filter(Boolean)
    //@ts-ignore
    const order = window.ec?.order
    if (!order?.extraFields || typeof order.extraFields !== 'object') return

    Object.keys(order.extraFields).forEach((key) => {
      const match = key.match(/^added_from_rup_product_id_(\d+)$/)
      if (!match) return
      const productId = parseInt(match[1])
      if (!cartProductIds.includes(productId)) {
        delete order.extraFields[key]
      }
    })
    //@ts-ignore
    Ecwid.refreshConfig()
  })

  //@ts-ignore
  Ecwid.OnOrderPlaced.add((order) => {
    const orderedIds = order.items.map((item: any) => item.product.id)
    //@ts-ignore
    const extraFields = ec?.order?.extraFields || {}
    const matchedIds = Object.keys(extraFields)
      .map((key) => key.match(/added_from_rup_product_id_(\d+)/))
      .filter(Boolean)
      .map((m) => parseInt(m![1]))
      .filter((id) => orderedIds.includes(id))

    fetch(`http://localhost:8000/api/ordered-from-rup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: order.orderNumber, productId: matchedIds }),
    }).catch(console.error)
  })
}
