import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const userNames = [
  "alice_wonder", "bob_builder", "charlie_dev", "diana_code", "evan_tech",
  "fiona_shop", "george_market", "hannah_sell", "ivan_trade", "julia_store",
  "kevin_deal", "lisa_craft", "mike_goods", "nina_items", "oscar_wares",
  "paula_buy", "quinn_stock", "rachel_brand", "sam_product", "tina_retail",
];

const fullNames = [
  "Alice Wonder", "Bob Builder", "Charlie Dev", "Diana Code", "Evan Tech",
  "Fiona Shop", "George Market", "Hannah Sell", "Ivan Trade", "Julia Store",
  "Kevin Deal", "Lisa Craft", "Mike Goods", "Nina Items", "Oscar Wares",
  "Paula Buy", "Quinn Stock", "Rachel Brand", "Sam Product", "Tina Retail",
];

const locations = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Seattle", "Denver", "Boston",
  "Nashville", "Portland", "Las Vegas", "Louisville", "Miami",
];

const descriptions = [
  "Passionate seller with years of experience.",
  "Quality products at the best prices.",
  "Your go-to marketplace for premium goods.",
  "Trusted by thousands of happy customers.",
  "Fast shipping and excellent customer service.",
  "Bringing you the best deals every day.",
  "Specializing in unique and rare finds.",
  "Affordable luxury for everyone.",
  "Committed to customer satisfaction.",
  "Handpicked items just for you.",
];

const productCategories = [
  { name: "Wireless Headphones", info: "Premium sound quality with noise cancellation. Perfect for music lovers and remote workers.", cost: 89 },
  { name: "Mechanical Keyboard", info: "Tactile switches, RGB backlight, durable build for gamers and typists.", cost: 120 },
  { name: "Portable Charger 20000mAh", info: "Fast charging, dual USB ports, LED indicator. Never run out of battery.", cost: 45 },
  { name: "Smartphone Stand", info: "Adjustable aluminum desk stand for phones and tablets. Sleek minimalist design.", cost: 25 },
  { name: "Laptop Sleeve 15 inch", info: "Water-resistant neoprene sleeve with extra pocket for accessories.", cost: 30 },
  { name: "USB-C Hub 7-in-1", info: "HDMI 4K, USB 3.0, SD card reader, PD charging all in one compact hub.", cost: 55 },
  { name: "Webcam 1080p HD", info: "Auto-focus, built-in mic, plug-and-play. Great for video calls and streaming.", cost: 70 },
  { name: "LED Desk Lamp", info: "Touch control, 3 color modes, USB charging port, eye-care lighting.", cost: 40 },
  { name: "Ergonomic Mouse", info: "Vertical design reduces wrist strain. 6 programmable buttons, wireless.", cost: 65 },
  { name: "Monitor Light Bar", info: "No-glare screen bar with asymmetric lighting, auto-dimming sensor.", cost: 50 },
  { name: "Cable Management Kit", info: "Velcro straps, clips, and sleeves to keep your desk tidy.", cost: 18 },
  { name: "Microphone USB Condenser", info: "Studio-quality recording, cardioid pattern, plug-and-play setup.", cost: 95 },
  { name: "Wireless Charging Pad", info: "10W fast wireless charging, compatible with all Qi devices.", cost: 28 },
  { name: "Mechanical Watch", info: "Automatic movement, sapphire crystal, stainless steel case.", cost: 350 },
  { name: "Running Shoes", info: "Lightweight, breathable mesh upper, responsive foam cushioning.", cost: 85 },
  { name: "Yoga Mat Non-slip", info: "6mm thick, eco-friendly TPE material, carrying strap included.", cost: 38 },
  { name: "Stainless Steel Water Bottle", info: "24oz double-wall insulated, keeps drinks cold 24h, hot 12h.", cost: 32 },
  { name: "Leather Wallet Slim", info: "RFID blocking, 6 card slots, minimalist bifold design.", cost: 42 },
  { name: "Sunglasses Polarized", info: "UV400 protection, lightweight TR90 frame, unisex style.", cost: 60 },
  { name: "Backpack 30L", info: "Water-resistant, laptop compartment, USB charging port built-in.", cost: 75 },
  { name: "Coffee Grinder Electric", info: "Stainless steel burr, 19 grind settings, 200g capacity.", cost: 110 },
  { name: "Reusable Grocery Bags Set", info: "6-pack, machine washable, foldable, 50lb capacity each.", cost: 22 },
  { name: "Indoor Plant Pot Set", info: "Set of 5 terracotta pots with drainage holes and bamboo trays.", cost: 35 },
  { name: "Scented Candle Set", info: "6 hand-poured soy wax candles, 40+ hour burn time each.", cost: 48 },
  { name: "Bluetooth Speaker", info: "360° sound, IPX7 waterproof, 24h battery, compact design.", cost: 79 },
  { name: "Gaming Mousepad XXL", info: "900x400mm extended desk mat, micro-textured surface, non-slip base.", cost: 33 },
  { name: "Smart Plug Wi-Fi", info: "Voice control, schedule timer, energy monitoring, no hub needed.", cost: 20 },
  { name: "Electric Toothbrush", info: "5 cleaning modes, 2-min timer, 30-day battery life, 2 heads.", cost: 58 },
  { name: "Resistance Bands Set", info: "5 levels, latex free, includes handles, ankle straps, door anchor.", cost: 27 },
  { name: "Notebook Dotted A5", info: "192 pages, thick 120gsm paper, hardcover, ribbon bookmark.", cost: 16 },
];

const avatarImages = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=11",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=12",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=13",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=14",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=15",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=16",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=17",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=18",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=19",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=20",
];

const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
  "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400",
  "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400",
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=400",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
  "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400",
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
  "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=400",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
  "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=400",
  "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
  "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400",
];

async function main() {
  console.log("Seeding database...");

  const hashedPassword = await bcrypt.hash("password123", 10);

  // Create 20 users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        img: avatarImages[i],
        imgPublicId: `avatar_${i + 1}`,
        name: fullNames[i],
        email: `${userNames[i]}@example.com`,
        Username: userNames[i],
        Description: descriptions[i % descriptions.length],
        Location: locations[i],
        Password: hashedPassword,
      },
    });
    users.push(user);
    console.log(`Created user: ${user.name}`);
  }

  // Create 3 products per user = 60 products total
  let productIndex = 0;
  for (const user of users) {
    for (let j = 0; j < 3; j++) {
      const product = productCategories[productIndex % productCategories.length];
      const imgIndex = productIndex % productImages.length;

      await prisma.list.create({
        data: {
          AuthorId: user.id,
          img: productImages[imgIndex],
          imgPublicId: `product_${productIndex + 1}`,
          name: product.name,
          author: user.name,
          authorImg: user.img,
          like: Math.floor(Math.random() * 500),
          seen: Math.floor(Math.random() * 5000) + 100,
          cost: product.cost,
          quantity: Math.floor(Math.random() * 100) + 1,
          productInfo: product.info,
        },
      });

      console.log(`Created product: ${product.name} by ${user.name}`);
      productIndex++;
    }
  }

  console.log("\nSeed complete!");
  console.log(`Created: 20 users, 60 products`);
  console.log("Default password for all accounts: password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
