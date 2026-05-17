/* ========================================
   AllSellz Product Database — 50 products
   ======================================== */

const CATEGORIES = [
  { id: 'headphones', name: 'Headphones', icon: 'fa-headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
  { id: 'smartwatch', name: 'Smart Watches', icon: 'fa-clock', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80' },
  { id: 'smartphone', name: 'Smartphones', icon: 'fa-mobile', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
  { id: 'laptop-bag', name: 'Laptop Bags', icon: 'fa-briefcase', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80' },
  { id: 'sneakers', name: 'Sneakers', icon: 'fa-shoe-prints', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
  { id: 'speaker', name: 'Speakers', icon: 'fa-volume-high', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80' },
  { id: 'keyboard', name: 'Keyboards', icon: 'fa-keyboard', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80' },
  { id: 'mouse', name: 'Gaming Mouse', icon: 'fa-computer-mouse', img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80' },
  { id: 'monitor', name: 'LED Monitors', icon: 'fa-display', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80' },
  { id: 'tablet', name: 'Tablets', icon: 'fa-tablet', img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80' },
  { id: 'hoodie', name: 'Hoodies', icon: 'fa-shirt', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80' },
  { id: 'perfume', name: 'Perfumes', icon: 'fa-spray-can', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80' },
];

// Image helper – uses Unsplash queries to get realistic images
const img = (q, n=1) => `https://images.unsplash.com/${q}?w=800&q=80&auto=format&fit=crop`;

const PRODUCTS = [
  // ========== HEADPHONES ==========
  { id:1, title:"boAt Rockerz 450 Wireless Headphones", brand:"boAt", category:"headphones",
    price:1499, oldPrice:2999, rating:4.5, reviews:1284, stock:25, bestseller:true,
    desc:"Experience 15 hours of seamless music with these premium Bluetooth on-ear headphones. Features 40mm drivers, ergonomic padded earcups, and dual modes for wired & wireless usage.",
    images:["photo-1505740420928-5e560c06d30e","photo-1583394838336-acd977736f90","photo-1546435770-a3e426bf472b","photo-1487215078519-e21cc028cb29"] },
  { id:2, title:"Sony WH-1000XM5 Noise Cancelling", brand:"Sony", category:"headphones",
    price:24990, oldPrice:34990, rating:4.8, reviews:892, stock:12, bestseller:true,
    desc:"Industry-leading noise cancellation with auto NC optimizer. Up to 30-hour battery life with quick charging. Crystal clear hands-free calling.",
    images:["photo-1583394838336-acd977736f90","photo-1545127398-14699f92334b","photo-1484704849700-f032a568e944","photo-1546435770-a3e426bf472b"] },
  { id:3, title:"JBL Tune 760NC Wireless Headphones", brand:"JBL", category:"headphones",
    price:6999, oldPrice:9999, rating:4.4, reviews:567, stock:30,
    desc:"JBL Pure Bass Sound with Active Noise Cancellation. 50 hours of battery life with NC off, fast charge in 5 minutes for 3 hours of playback.",
    images:["photo-1545127398-14699f92334b","photo-1484704849700-f032a568e944","photo-1505740420928-5e560c06d30e","photo-1583394838336-acd977736f90"] },
  { id:4, title:"boAt Airdopes 141 TWS Earbuds", brand:"boAt", category:"headphones",
    price:999, oldPrice:2990, rating:4.3, reviews:3421, stock:120, bestseller:true,
    desc:"42H total playback, ENx tech for clear calls, IWP technology for instant pairing. IPX4 water resistance.",
    images:["photo-1572569511254-d8f925fe2cbb","photo-1606220588913-b3aacb4d2f46","photo-1590658268037-6bf12165a8df","photo-1606400082777-ef05f3c5cde2"] },
  { id:5, title:"Sony WF-C700N True Wireless", brand:"Sony", category:"headphones",
    price:8990, oldPrice:11990, rating:4.6, reviews:445, stock:18,
    desc:"Smallest & lightest noise cancelling earbuds from Sony. 7.5 hours battery life with NC. Multipoint connection for two devices.",
    images:["photo-1590658268037-6bf12165a8df","photo-1606400082777-ef05f3c5cde2","photo-1572569511254-d8f925fe2cbb","photo-1606220588913-b3aacb4d2f46"] },

  // ========== SMARTWATCH ==========
  { id:6, title:"boAt Wave Call Smart Watch", brand:"boAt", category:"smartwatch",
    price:1499, oldPrice:7990, rating:4.2, reviews:2876, stock:45, bestseller:true,
    desc:"1.69\" HD display with BT calling, 150+ watch faces, 100+ sports modes, IP68 water resistance, 7-day battery life.",
    images:["photo-1523275335684-37898b6baf30","photo-1546868871-7041f2a55e12","photo-1579586337278-3befd40fd17a","photo-1508685096489-7aacd43bd3b1"] },
  { id:7, title:"Fire-Boltt Phoenix Pro Smartwatch", brand:"Fire-Boltt", category:"smartwatch",
    price:1999, oldPrice:8999, rating:4.3, reviews:1654, stock:38,
    desc:"1.39\" full touch round display, BT calling, SpO2 & heart rate monitoring, 120+ sports modes.",
    images:["photo-1579586337278-3befd40fd17a","photo-1508685096489-7aacd43bd3b1","photo-1523275335684-37898b6baf30","photo-1546868871-7041f2a55e12"] },
  { id:8, title:"Noise ColorFit Pro 4 Smart Watch", brand:"Noise", category:"smartwatch",
    price:2499, oldPrice:5999, rating:4.4, reviews:1287, stock:28,
    desc:"1.72\" TruView display, 100+ watch faces, AI voice assistance, productivity suite, 7-day battery.",
    images:["photo-1546868871-7041f2a55e12","photo-1508685096489-7aacd43bd3b1","photo-1579586337278-3befd40fd17a","photo-1523275335684-37898b6baf30"] },
  { id:9, title:"Apple Watch Series 9 GPS 45mm", brand:"Apple", category:"smartwatch",
    price:45900, oldPrice:48900, rating:4.9, reviews:678, stock:8, bestseller:true,
    desc:"Always-On Retina display, S9 chip, Double Tap gesture, ECG & blood oxygen sensor, advanced fitness tracking.",
    images:["photo-1551816230-ef5deaed4a26","photo-1579586337278-3befd40fd17a","photo-1508685096489-7aacd43bd3b1","photo-1546868871-7041f2a55e12"] },
  { id:10, title:"Fire-Boltt Ninja Call Pro Plus", brand:"Fire-Boltt", category:"smartwatch",
    price:1399, oldPrice:6999, rating:4.1, reviews:892, stock:60,
    desc:"1.83\" big display, BT calling, AI voice assistant, multiple sports modes, 7-day battery life.",
    images:["photo-1508685096489-7aacd43bd3b1","photo-1523275335684-37898b6baf30","photo-1546868871-7041f2a55e12","photo-1579586337278-3befd40fd17a"] },

  // ========== SMARTPHONE ==========
  { id:11, title:"iPhone 15 Pro 256GB Titanium", brand:"Apple", category:"smartphone",
    price:134900, oldPrice:139900, rating:4.9, reviews:432, stock:15, bestseller:true,
    desc:"Titanium design, A17 Pro chip, 48MP main camera with 5x telephoto, Action button, USB-C with USB 3.",
    images:["photo-1592750475338-74b7b21085ab","photo-1695048133142-1a20484d2569","photo-1511707171634-5f897ff02aa9","photo-1601784551446-20c9e07cdbdb"] },
  { id:12, title:"OnePlus 12 5G 256GB", brand:"OnePlus", category:"smartphone",
    price:64999, oldPrice:69999, rating:4.7, reviews:289, stock:22,
    desc:"Snapdragon 8 Gen 3, 6.82\" QHD+ AMOLED, Hasselblad camera with 64MP periscope, 100W SUPERVOOC charging.",
    images:["photo-1598327105666-5b89351aff97","photo-1574944985070-8f3ebc6b79d2","photo-1511707171634-5f897ff02aa9","photo-1592750475338-74b7b21085ab"] },
  { id:13, title:"Xiaomi 14 Ultra 512GB", brand:"Xiaomi", category:"smartphone",
    price:99999, oldPrice:109999, rating:4.6, reviews:154, stock:10,
    desc:"Leica Vario-Summilux quad camera, 1\" main sensor, Snapdragon 8 Gen 3, 6.73\" AMOLED display.",
    images:["photo-1574944985070-8f3ebc6b79d2","photo-1598327105666-5b89351aff97","photo-1598300042247-d088f8ab3a91","photo-1511707171634-5f897ff02aa9"] },
  { id:14, title:"Realme GT Neo 5 SE 12GB/256GB", brand:"Realme", category:"smartphone",
    price:29999, oldPrice:34999, rating:4.4, reviews:678, stock:35,
    desc:"Snapdragon 7+ Gen 2, 144Hz AMOLED display, 100W SuperDart charging, 50MP triple camera.",
    images:["https://images.fonearena.com/blog/wp-content/uploads/2023/04/realme-GT-Neo-5-SE-1024x971.jpg","photo-1511707171634-5f897ff02aa9","photo-1574944985070-8f3ebc6b79d2","photo-1598327105666-5b89351aff97"] },
  { id:15, title:"iPhone 14 128GB Midnight", brand:"Apple", category:"smartphone",
    price:69900, oldPrice:79900, rating:4.8, reviews:1234, stock:18, bestseller:true,
    desc:"6.1\" Super Retina XDR display, A15 Bionic chip, 12MP dual camera, Crash Detection.",
    images:["photo-1695048133142-1a20484d2569","photo-1601784551446-20c9e07cdbdb","photo-1592750475338-74b7b21085ab","photo-1511707171634-5f897ff02aa9"] },
  { id:16, title:"OnePlus Nord CE 3 Lite", brand:"OnePlus", category:"smartphone",
    price:19999, oldPrice:22999, rating:4.3, reviews:543, stock:42,
    desc:"108MP main camera, 67W SUPERVOOC charging, 120Hz display, Snapdragon 695 5G.",
    images:["photo-1601784551446-20c9e07cdbdb","photo-1598327105666-5b89351aff97","photo-1574944985070-8f3ebc6b79d2","photo-1592750475338-74b7b21085ab"] },
  { id:17, title:"Xiaomi Redmi Note 13 Pro+", brand:"Xiaomi", category:"smartphone",
    price:31999, oldPrice:34999, rating:4.5, reviews:876, stock:28,
    desc:"200MP OIS camera, 120W HyperCharge, 1.5K AMOLED display, Dimensity 7200-Ultra processor.",
    images:["photo-1598327105666-5b89351aff97","photo-1565849904461-04a58ad377e0","photo-1574944985070-8f3ebc6b79d2","photo-1601784551446-20c9e07cdbdb"] },

  // ========== LAPTOP BAGS ==========
  { id:18, title:"Lenovo Legion Gaming Backpack", brand:"Lenovo", category:"laptop-bag",
    price:2999, oldPrice:4499, rating:4.6, reviews:432, stock:50,
    desc:"Fits 15.6\" laptop, water-resistant, multiple compartments, padded shoulder straps, USB charging port.",
    images:["photo-1553062407-98eeb64c6a62","photo-1622560480605-d83c853bc5c3","photo-1581605405669-fcdf81165afa","photo-1547949003-9792a18a2601"] },
  { id:19, title:"Lenovo Classic Laptop Backpack B210", brand:"Lenovo", category:"laptop-bag",
    price:799, oldPrice:1299, rating:4.4, reviews:1876, stock:120, bestseller:true,
    desc:"Slim design fits up to 15.6\" laptop, multiple pockets, lightweight & durable. Perfect for office & travel.",
    images:["photo-1622560480605-d83c853bc5c3","photo-1553062407-98eeb64c6a62","photo-1581605405669-fcdf81165afa","photo-1547949003-9792a18a2601"] },
  { id:20, title:"Lenovo ThinkPad Professional Backpack", brand:"Lenovo", category:"laptop-bag",
    price:1899, oldPrice:2999, rating:4.5, reviews:654, stock:45,
    desc:"Premium ballistic nylon, RFID protection pocket, fits 15.6\" laptop, padded compartments.",
    images:["photo-1581605405669-fcdf81165afa","photo-1547949003-9792a18a2601","photo-1622560480605-d83c853bc5c3","photo-1553062407-98eeb64c6a62"] },

  // ========== SNEAKERS ==========
  { id:21, title:"Nike Air Max 270 Sneakers", brand:"Nike", category:"sneakers",
    price:8995, oldPrice:12995, rating:4.7, reviews:2143, stock:32, bestseller:true,
    desc:"Inspired by Air Max icons, the Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride.",
    images:["photo-1542291026-7eec264c27ff","photo-1606107557195-0e29a4b5b4aa","photo-1595950653106-6c9ebd614d3a","photo-1600185365926-3a2ce3cdb9eb"] },
  { id:22, title:"Adidas Ultraboost 22 Running", brand:"Adidas", category:"sneakers",
    price:11999, oldPrice:15999, rating:4.6, reviews:876, stock:24,
    desc:"Adidas Primeknit upper, BOOST midsole for energy return, Continental rubber outsole for grip.",
    images:["photo-1606107557195-0e29a4b5b4aa","photo-1542291026-7eec264c27ff","photo-1595950653106-6c9ebd614d3a","photo-1600185365926-3a2ce3cdb9eb"] },
  { id:23, title:"Puma RS-X Sneakers", brand:"Puma", category:"sneakers",
    price:6999, oldPrice:9999, rating:4.4, reviews:543, stock:38,
    desc:"Bulky sole inspired by 80s running tech, mixed material upper, premium colorway.",
    images:["photo-1595950653106-6c9ebd614d3a","photo-1600185365926-3a2ce3cdb9eb","photo-1542291026-7eec264c27ff","photo-1606107557195-0e29a4b5b4aa"] },
  { id:24, title:"Nike Revolution 6 Running Shoes", brand:"Nike", category:"sneakers",
    price:3495, oldPrice:4995, rating:4.5, reviews:1287, stock:67,
    desc:"Soft foam midsole, lightweight knit upper, perfect for daily runs and gym workouts.",
    images:["photo-1600185365926-3a2ce3cdb9eb","photo-1542291026-7eec264c27ff","photo-1595950653106-6c9ebd614d3a","photo-1606107557195-0e29a4b5b4aa"] },

  // ========== SPEAKERS ==========
  { id:25, title:"boAt Stone 1200 Bluetooth Speaker", brand:"boAt", category:"speaker",
    price:2499, oldPrice:4990, rating:4.4, reviews:1543, stock:42, bestseller:true,
    desc:"14W stereo sound, 9 hours battery, IPX7 water resistant, Bluetooth v5.0, TWS feature.",
    images:["photo-1608043152269-423dbba4e7e1","photo-1545454675-3531b543be5d","photo-1545127398-14699f92334b","photo-1558537348-c0f8e733989d"] },
  { id:26, title:"Sony SRS-XB23 EXTRA BASS", brand:"Sony", category:"speaker",
    price:8990, oldPrice:11990, rating:4.7, reviews:678, stock:18,
    desc:"EXTRA BASS sound, IP67 waterproof & dustproof, 12-hour battery, Party Connect with 100 speakers.",
    images:["photo-1545454675-3531b543be5d","photo-1608043152269-423dbba4e7e1","photo-1558537348-c0f8e733989d","photo-1545127398-14699f92334b"] },
  { id:27, title:"JBL Flip 6 Portable Speaker", brand:"JBL", category:"speaker",
    price:9999, oldPrice:12999, rating:4.8, reviews:1432, stock:25, bestseller:true,
    desc:"Bold JBL Original Pro Sound, racetrack-shaped driver, IP67 waterproof & dustproof, 12-hour battery.",
    images:["photo-1558537348-c0f8e733989d","photo-1545454675-3531b543be5d","photo-1608043152269-423dbba4e7e1","photo-1545127398-14699f92334b"] },
  { id:28, title:"boAt Stone 352 Bluetooth Speaker", brand:"boAt", category:"speaker",
    price:1299, oldPrice:2990, rating:4.3, reviews:2876, stock:88,
    desc:"10W RMS stereo sound, IPX7 water resistance, 12 hours playtime, integrated controls.",
    images:["photo-1589003077984-894e133dabab","photo-1608043152269-423dbba4e7e1","photo-1545454675-3531b543be5d","photo-1558537348-c0f8e733989d"] },

  // ========== KEYBOARDS ==========
  { id:29, title:"Keychron K2 Wireless Mechanical Keyboard", brand:"Keychron", category:"keyboard",
    price:8999, oldPrice:11999, rating:4.7, reviews:432, stock:24, bestseller:true,
    desc:"75% compact layout, hot-swappable Gateron switches, RGB backlight, Bluetooth 5.1 + USB-C.",
    images:["photo-1587829741301-dc798b83add3","photo-1618384887929-16ec33fab9ef","photo-1595225476474-87563907a212","photo-1561112078-7d24e04c3407"] },
  { id:30, title:"Logitech MX Mechanical Mini", brand:"Logitech", category:"keyboard",
    price:14995, oldPrice:17995, rating:4.6, reviews:287, stock:15,
    desc:"Low-profile mechanical switches, backlit keys, multi-device wireless, 15-day battery with backlight.",
    images:["photo-1618384887929-16ec33fab9ef","photo-1587829741301-dc798b83add3","photo-1595225476474-87563907a212","photo-1561112078-7d24e04c3407"] },
  { id:31, title:"Razer BlackWidow V4 Pro", brand:"Razer", category:"keyboard",
    price:23999, oldPrice:27999, rating:4.7, reviews:198, stock:8,
    desc:"Razer Green mechanical switches, Chroma RGB, dedicated media keys, magnetic wrist rest.",
    images:["photo-1595225476474-87563907a212","photo-1618384887929-16ec33fab9ef","photo-1587829741301-dc798b83add3","photo-1561112078-7d24e04c3407"] },
  { id:32, title:"Zebronics Max Plus Mechanical Keyboard", brand:"Zebronics", category:"keyboard",
    price:2499, oldPrice:4499, rating:4.3, reviews:876, stock:55,
    desc:"Blue switches, full RGB backlight, aluminium top frame, 104 keys with N-key rollover.",
    images:["photo-1561112078-7d24e04c3407","photo-1587829741301-dc798b83add3","photo-1618384887929-16ec33fab9ef","photo-1595225476474-87563907a212"] },

  // ========== GAMING MOUSE ==========
  { id:33, title:"Zebronics Phobos Pro Gaming Mouse", brand:"Zebronics", category:"mouse",
    price:899, oldPrice:1499, rating:4.4, reviews:1432, stock:78, bestseller:true,
    desc:"7200 DPI, RGB lighting, 7 programmable buttons, ergonomic design with anti-slip grip.",
    images:["photo-1615663245857-ac93bb7c39e7","photo-1615663245857-ac93bb7c39e7","photo-1629429407759-01cd3d7cfb38","photo-1563297007-0686b7003af7"] },
  { id:34, title:"Logitech G502 HERO Gaming Mouse", brand:"Logitech", category:"mouse",
    price:3995, oldPrice:5995, rating:4.8, reviews:2143, stock:34,
    desc:"HERO 25K sensor, 11 programmable buttons, adjustable weight system, LIGHTSYNC RGB.",
    images:["photo-1615663245857-ac93bb7c39e7","photo-1527814050087-3793815479db","photo-1629429407759-01cd3d7cfb38","photo-1563297007-0686b7003af7"] },
  { id:35, title:"Razer DeathAdder V3 Pro", brand:"Razer", category:"mouse",
    price:14999, oldPrice:16999, rating:4.7, reviews:567, stock:14,
    desc:"30K Focus Pro sensor, 90-hour battery, ultra-lightweight 63g, HyperSpeed wireless.",
    images:["photo-1629429407759-01cd3d7cfb38","photo-1527814050087-3793815479db","photo-1615663245857-ac93bb7c39e7","photo-1563297007-0686b7003af7"] },
  { id:36, title:"Zebronics Transformer-M Gaming Mouse", brand:"Zebronics", category:"mouse",
    price:599, oldPrice:1199, rating:4.2, reviews:2876, stock:120,
    desc:"3200 DPI, 6 buttons, RGB lighting effects, braided cable, ergonomic design.",
    images:["photo-1563297007-0686b7003af7","photo-1527814050087-3793815479db","photo-1615663245857-ac93bb7c39e7","photo-1629429407759-01cd3d7cfb38"] },

  // ========== MONITORS ==========
  { id:37, title:"LG UltraGear 27\" 144Hz Gaming Monitor", brand:"LG", category:"monitor",
    price:24999, oldPrice:32999, rating:4.7, reviews:432, stock:18, bestseller:true,
    desc:"27\" QHD IPS panel, 144Hz refresh rate, 1ms response time, HDR10, AMD FreeSync Premium.",
    images:["photo-1527443224154-c4a3942d3acf","photo-1593640408182-31c70c8268f5","photo-1616763355548-1b606f439f86","photo-1551645120-d70bfe84c826"] },
  { id:38, title:"Samsung Odyssey G5 32\" Curved", brand:"Samsung", category:"monitor",
    price:29999, oldPrice:39999, rating:4.6, reviews:298, stock:12,
    desc:"32\" curved WQHD VA panel, 165Hz, 1ms MPRT, HDR10, AMD FreeSync Premium, ergonomic stand.",
    images:["photo-1593640408182-31c70c8268f5","photo-1527443224154-c4a3942d3acf","photo-1616763355548-1b606f439f86","photo-1551645120-d70bfe84c826"] },
  { id:39, title:"Dell S2722QC 27\" 4K USB-C Monitor", brand:"Dell", category:"monitor",
    price:31999, oldPrice:39999, rating:4.5, reviews:187, stock:9,
    desc:"4K UHD IPS panel, USB-C with 65W power delivery, dual speakers, height adjustable.",
    images:["photo-1616763355548-1b606f439f86","photo-1527443224154-c4a3942d3acf","photo-1593640408182-31c70c8268f5","photo-1551645120-d70bfe84c826"] },

  // ========== TABLETS ==========
  { id:40, title:"iPad Air 5th Gen 64GB WiFi", brand:"Apple", category:"tablet",
    price:54900, oldPrice:59900, rating:4.8, reviews:543, stock:16, bestseller:true,
    desc:"M1 chip, 10.9\" Liquid Retina display, 12MP Ultra Wide front camera, USB-C, supports Apple Pencil 2.",
    images:["photo-1561154464-82e9adf32764","photo-1585790050230-5dd28404ccb9","photo-1542751110-97427bbecf20","photo-1623126908029-58cb08a2b272"] },
  { id:41, title:"Samsung Galaxy Tab S9 FE 128GB", brand:"Samsung", category:"tablet",
    price:39999, oldPrice:46999, rating:4.5, reviews:234, stock:21,
    desc:"10.9\" LCD display, Exynos 1380, S Pen included, IP68 water resistant, 90Hz refresh rate.",
    images:["photo-1585790050230-5dd28404ccb9","photo-1561154464-82e9adf32764","photo-1542751110-97427bbecf20","photo-1623126908029-58cb08a2b272"] },
  { id:42, title:"Xiaomi Pad 6 128GB", brand:"Xiaomi", category:"tablet",
    price:26999, oldPrice:31999, rating:4.4, reviews:387, stock:28,
    desc:"11\" 2.8K display, 144Hz, Snapdragon 870, quad speakers tuned by Dolby Atmos, 8840mAh battery.",
    images:["photo-1542751110-97427bbecf20","photo-1561154464-82e9adf32764","photo-1585790050230-5dd28404ccb9","photo-1623126908029-58cb08a2b272"] },

  // ========== HOODIES ==========
  { id:43, title:"Nike Sportswear Club Fleece Hoodie", brand:"Nike", category:"hoodie",
    price:3495, oldPrice:4495, rating:4.6, reviews:876, stock:64, bestseller:true,
    desc:"Soft, mid-weight fleece for everyday wear. Adjustable hood, kangaroo pocket, ribbed cuffs and hem.",
    images:["photo-1556821840-3a63f95609a7","photo-1614975058903-3e84d29e2b9c","photo-1572495641004-28421ae29ed4","photo-1542406775-ade58c52d2e4"] },
  { id:44, title:"Adidas Essentials Fleece Hoodie", brand:"Adidas", category:"hoodie",
    price:2999, oldPrice:3999, rating:4.5, reviews:543, stock:48,
    desc:"Soft cotton-blend fleece, adjustable drawcord hood, embroidered 3-Stripes on sleeves.",
    images:["photo-1614975058903-3e84d29e2b9c","photo-1556821840-3a63f95609a7","photo-1572495641004-28421ae29ed4","photo-1542406775-ade58c52d2e4"] },
  { id:45, title:"Premium Oversized Streetwear Hoodie", brand:"Urban", category:"hoodie",
    price:1499, oldPrice:2999, rating:4.4, reviews:1287, stock:92,
    desc:"Heavyweight 400 GSM cotton blend, oversized fit, drop shoulder, embroidered logo.",
    images:["photo-1572495641004-28421ae29ed4","photo-1556821840-3a63f95609a7","photo-1614975058903-3e84d29e2b9c","photo-1542406775-ade58c52d2e4"] },

  // ========== PERFUMES ==========
  { id:46, title:"Dior Sauvage Eau de Parfum 100ml", brand:"Dior", category:"perfume",
    price:11500, oldPrice:13500, rating:4.9, reviews:432, stock:14, bestseller:true,
    desc:"Fresh, raw, noble fragrance with notes of bergamot, ambroxan, and vanilla. Long-lasting masculine scent.",
    images:["photo-1541643600914-78b084683601","photo-1592945403244-b3fbafd7f539","photo-1523293182086-7651a899d37f","photo-1587017539504-67cfbddac569"] },
  { id:47, title:"Chanel Bleu de Chanel Parfum 100ml", brand:"Chanel", category:"perfume",
    price:14900, oldPrice:16900, rating:4.8, reviews:298, stock:9,
    desc:"Woody aromatic fragrance with notes of citrus, sandalwood, and amber. Timeless masculine elegance.",
    images:["photo-1592945403244-b3fbafd7f539","photo-1541643600914-78b084683601","photo-1523293182086-7651a899d37f","photo-1587017539504-67cfbddac569"] },
  { id:48, title:"Versace Eros Eau de Toilette 100ml", brand:"Versace", category:"perfume",
    price:8500, oldPrice:10500, rating:4.7, reviews:543, stock:22,
    desc:"Mint, green apple, tonka bean, and ambroxan create a passionate and sensual scent for men.",
    images:["photo-1523293182086-7651a899d37f","photo-1541643600914-78b084683601","photo-1592945403244-b3fbafd7f539","photo-1587017539504-67cfbddac569"] },
  { id:49, title:"Calvin Klein CK One Unisex 100ml", brand:"Calvin Klein", category:"perfume",
    price:3499, oldPrice:4999, rating:4.5, reviews:876, stock:38,
    desc:"Iconic unisex fragrance with refreshing notes of bergamot, jasmine, and musk.",
    images:["photo-1587017539504-67cfbddac569","photo-1541643600914-78b084683601","photo-1523293182086-7651a899d37f","photo-1592945403244-b3fbafd7f539"] },
  { id:50, title:"Tom Ford Black Orchid 100ml", brand:"Tom Ford", category:"perfume",
    price:18500, oldPrice:21500, rating:4.9, reviews:187, stock:0,
    desc:"Luxurious and sensual fragrance with black truffle, ylang-ylang, bergamot, and dark chocolate notes.",
    images:["photo-1594035910387-fea47794261f","photo-1541643600914-78b084683601","photo-1587017539504-67cfbddac569","photo-1523293182086-7651a899d37f"] },
];



// Resolve image URLs
PRODUCTS.forEach(p => {
  p.images = p.images.map(id => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`);
  p.image = p.images[0];
  p.discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
});



document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  const app = document.getElementById("app");
  const mainWebsite = document.getElementById("mainWebsite");

  if (!page) return;

  if (mainWebsite) {
    mainWebsite.style.display = "none";
  }

  if (page === "products") {
    loadProducts();
    
  }

  if (page === "categories") {
    loadCategories();
  }

  if (page === "deals") {
    loadDeals();
  }

});


function loadProducts(products = PRODUCTS) {

  const app = document.getElementById("app");

  // NO PRODUCTS
  if(products.length === 0){
    app.innerHTML = `
      <div style="padding:40px;text-align:center;">
        <h2>❌ No Products Found</h2>
      </div>
    `;
    return;
  }

  // PRODUCTS HTML
  app.innerHTML = `
    <div style="padding:30px;">
      <h2>🛍️ All Products</h2>

      <div class="products-grid">

        ${products.map(p => `

          <div class="product-card" onclick="openProduct(${p.id})">

            <img src="${p.image}"
                 style="width:100%;height:220px;object-fit:cover;border-radius:10px;">

            <h3>${p.title}</h3>

            <p style="font-weight:bold;color:green;">
              ₹${p.price}
            </p>

            <button onclick="Cart.add(${p.id})">
              Add To Cart
            </button>

          </div>

        `).join("")}

      </div>
    </div>
  `;
}

function loadCategories() {
  document.getElementById("app").innerHTML = "<h2 style='padding:20px;'>Categories Page</h2>";
}

function loadDeals() {
  document.getElementById("app").innerHTML = "<h2 style='padding:20px;'>Deals Page</h2>";
}

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");

  if (!searchInput) return;

  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase().trim();

    // EMPTY SEARCH → HOME PAGE
    if (value === "") {

      if (typeof renderHome === "function") {
        renderHome();
      }

      return;
    }

    // FILTER PRODUCTS
    const filteredProducts = PRODUCTS.filter(product => {

      return (
        product.title.toLowerCase().includes(value) ||
        product.brand.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
      );

    });

    // SHOW PRODUCTS
    loadProducts(filteredProducts);

  });

});


function openProduct(id) {

  const product = PRODUCTS.find(p => p.id == id);

  if (!product) return;

  document.getElementById("app").innerHTML = `
  
    <div style="padding:30px;">

      <button onclick="loadProducts()" 
        style="
          margin-bottom:20px;
          padding:10px 15px;
          cursor:pointer;
        ">
        ← Back
      </button>

      <div style="
        display:flex;
        gap:40px;
        flex-wrap:wrap;
        align-items:flex-start;
      ">

        <img src="${product.image}"
          style="
            width:350px;
            max-width:100%;
            border-radius:12px;
          ">

        <div style="flex:1;min-width:280px;">

          <h1>${product.title}</h1>

          <h2 style="color:green;">
            ₹${product.price}
          </h2>

          <p style="
            text-decoration:line-through;
            color:gray;
          ">
            ₹${product.oldPrice}
          </p>

          <p style="margin-top:20px;">
            ${product.desc}
          </p>

          <button onclick="Cart.add(${product.id})"
            style="
              margin-top:20px;
              padding:12px 20px;
              background:black;
              color:white;
              border:none;
              border-radius:8px;
              cursor:pointer;
            ">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  `;
}

// ================= LOGIN SYSTEM =================

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// SIGNUP
function signup(username, password) {

  let users = getUsers();

  let exists = users.find(u => u.username === username);

  if (exists) {
    alert("User already exists");
    return;
  }

  users.push({ username, password });
  saveUsers(users);

  alert("Signup successful!");
}

// LOGIN
function login(username, password) {

  let users = getUsers();

  let user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    alert("Invalid credentials");
    return false;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Login successful!");
  return true;
}

// CHECK LOGIN
function isLoggedIn() {
  return localStorage.getItem("loggedInUser") !== null;
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out");
}

function handleSignup() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  signup(u, p);
}

function handleLogin() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  login(u, p);
}