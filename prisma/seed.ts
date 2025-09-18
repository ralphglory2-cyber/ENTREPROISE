import process from 'node:process';

import { Prisma, PrismaClient, OrderStatus, PaymentMethod } from '@prisma/client';

const prisma = new PrismaClient();

type OrderItemSeed = {
  productId: number;
  quantity: number;
  unitPriceMad: Prisma.Decimal;
};

type AuditLogSeed = {
  action: string;
  details?: string;
  userEmail?: string;
};

type OrderSeed = {
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  items: OrderItemSeed[];
  logs: AuditLogSeed[];
};

function calculateOrderAmount(items: OrderItemSeed[]): Prisma.Decimal {
  const total = items.reduce((sum, item) => {
    return sum + item.quantity * item.unitPriceMad.toNumber();
  }, 0);

  return new Prisma.Decimal(total.toFixed(2));
}

async function main() {
  await prisma.auditLog.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Smart Desk Lamp',
        description: 'Adjustable LED lamp with wireless charging pad and ambient light sensor.',
        priceMad: new Prisma.Decimal('349.99'),
        imageUrl: 'https://example.com/images/lamp.jpg',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Ergonomic Office Chair',
        description: 'Breathable mesh chair with lumbar support and adjustable armrests.',
        priceMad: new Prisma.Decimal('2299.00'),
        imageUrl: 'https://example.com/images/chair.jpg',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Noise-Cancelling Headphones',
        description: 'Over-ear headphones with hybrid noise cancellation and 30-hour battery life.',
        priceMad: new Prisma.Decimal('1599.50'),
        imageUrl: 'https://example.com/images/headphones.jpg',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Dual Monitor Stand',
        description: 'Gas spring monitor arm compatible with 13-32 inch displays.',
        priceMad: new Prisma.Decimal('799.00'),
        imageUrl: 'https://example.com/images/monitor-stand.jpg',
      },
    }),
  ]);

  const productByName = new Map(products.map((product) => [product.name, product]));

  const orders: OrderSeed[] = [
    {
      customerName: 'Sofia El Amrani',
      customerEmail: 'sofia.elamrani@example.com',
      shippingAddress: '123 Rue Mohammed V, Rabat, Morocco',
      status: OrderStatus.pending,
      paymentMethod: PaymentMethod.paypal,
      items: [
        {
          productId: productByName.get('Smart Desk Lamp')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Smart Desk Lamp')!.priceMad,
        },
        {
          productId: productByName.get('Noise-Cancelling Headphones')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Noise-Cancelling Headphones')!.priceMad,
        },
      ],
      logs: [
        {
          action: 'ORDER_CREATED',
          details: 'Order created through the customer portal.',
          userEmail: 'sofia.elamrani@example.com',
        },
      ],
    },
    {
      customerName: 'Mehdi Rachidi',
      customerEmail: 'mehdi.rachidi@example.com',
      shippingAddress: '45 Avenue Hassan II, Casablanca, Morocco',
      status: OrderStatus.shipped,
      paymentMethod: PaymentMethod.cod,
      items: [
        {
          productId: productByName.get('Ergonomic Office Chair')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Ergonomic Office Chair')!.priceMad,
        },
        {
          productId: productByName.get('Smart Desk Lamp')!.id,
          quantity: 2,
          unitPriceMad: productByName.get('Smart Desk Lamp')!.priceMad,
        },
      ],
      logs: [
        {
          action: 'PAYMENT_PENDING',
          details: 'Cash on delivery selected by the customer.',
        },
        {
          action: 'ORDER_SHIPPED',
          details: 'Order handed over to AMANA courier service.',
          userEmail: 'operations@example.com',
        },
      ],
    },
    {
      customerName: 'Lina Berrada',
      customerEmail: 'lina.berrada@example.com',
      shippingAddress: '19 Boulevard Zerktouni, Marrakech, Morocco',
      status: OrderStatus.delivered,
      paymentMethod: PaymentMethod.paypal,
      items: [
        {
          productId: productByName.get('Noise-Cancelling Headphones')!.id,
          quantity: 2,
          unitPriceMad: productByName.get('Noise-Cancelling Headphones')!.priceMad,
        },
      ],
      logs: [
        {
          action: 'ORDER_CREATED',
          details: 'Order submitted via mobile app.',
          userEmail: 'lina.berrada@example.com',
        },
        {
          action: 'ORDER_DELIVERED',
          details: 'Customer confirmed receipt and left a five-star review.',
          userEmail: 'support@example.com',
        },
      ],
    },
    {
      customerName: 'Youssef El Idrissi',
      customerEmail: 'youssef.elidrissi@example.com',
      shippingAddress: '88 Route de Fès, Fès, Morocco',
      status: OrderStatus.shipped,
      paymentMethod: PaymentMethod.paypal,
      items: [
        {
          productId: productByName.get('Dual Monitor Stand')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Dual Monitor Stand')!.priceMad,
        },
        {
          productId: productByName.get('Smart Desk Lamp')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Smart Desk Lamp')!.priceMad,
        },
      ],
      logs: [
        {
          action: 'ORDER_PACKED',
          details: 'Items packed at Casablanca fulfillment center.',
          userEmail: 'warehouse@example.com',
        },
      ],
    },
    {
      customerName: 'Sara Oulkadi',
      customerEmail: 'sara.oulkadi@example.com',
      shippingAddress: '5 Rue de la Liberté, Tangier, Morocco',
      status: OrderStatus.pending,
      paymentMethod: PaymentMethod.cod,
      items: [
        {
          productId: productByName.get('Ergonomic Office Chair')!.id,
          quantity: 1,
          unitPriceMad: productByName.get('Ergonomic Office Chair')!.priceMad,
        },
        {
          productId: productByName.get('Dual Monitor Stand')!.id,
          quantity: 2,
          unitPriceMad: productByName.get('Dual Monitor Stand')!.priceMad,
        },
      ],
      logs: [
        {
          action: 'ORDER_CREATED',
          details: 'Sales agent created order on behalf of the customer.',
          userEmail: 'sales.agent@example.com',
        },
      ],
    },
  ];

  for (const order of orders) {
    const amountMad = calculateOrderAmount(order.items);

    await prisma.order.create({
      data: {
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        shippingAddress: order.shippingAddress,
        status: order.status,
        paymentMethod: order.paymentMethod,
        amountMad,
        orderItems: {
          create: order.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPriceMad: item.unitPriceMad,
          })),
        },
        auditLogs: {
          create: order.logs,
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seed failed', error);
    await prisma.$disconnect();
    process.exit(1);
  });
