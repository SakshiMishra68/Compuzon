import { Product, Category } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'NVIDIA GeForce RTX 4090 24GB',
    price: 1599.99,
    originalPrice: 1699.99,
    description: 'The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
    category: { id: 'gpu', name: 'Graphics Cards' },
    brand: 'NVIDIA',
    images: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviewCount: 124,
    inStock: true,
    featured: true,
    specifications: {
      'CUDA Cores': '16384',
      'Memory': '24GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      'Power Consumption': '450W'
    },
    tags: ['gaming', 'high-end', 'ray-tracing'],
    createdAt: '2023-09-12T10:00:00Z'
  },
  {
    id: '2',
    name: 'AMD Ryzen 9 7950X 16-Core Processor',
    price: 699.99,
    originalPrice: 799.99,
    description: 'Engineered for gamers, creators, and enthusiasts who demand uncompromising performance. The AMD Ryzen 9 7950X features 16 cores and 32 threads for exceptional multitasking.',
    category: { id: 'cpu', name: 'Processors' },
    brand: 'AMD',
    images: [
      'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviewCount: 256,
    inStock: true,
    featured: true,
    specifications: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '170W'
    },
    tags: ['gaming', 'workstation', 'high-performance'],
    createdAt: '2023-09-15T11:30:00Z'
  },
  {
    id: '3',
    name: 'ASUS ROG Strix X670E-E Gaming WiFi Motherboard',
    price: 499.99,
    originalPrice: 549.99,
    description: 'The ROG Strix X670E-E Gaming WiFi motherboard offers premium power delivery, cooling, and next-gen connectivity for the most demanding builds.',
    category: { id: 'motherboard', name: 'Motherboards' },
    brand: 'ASUS',
    images: [
      'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    featured: true,
    specifications: {
      'Chipset': 'AMD X670E',
      'Form Factor': 'ATX',
      'Memory': 'DDR5, 4 slots, up to 128GB',
      'PCIe': 'PCIe 5.0 x16, PCIe 4.0 x16'
    },
    tags: ['gaming', 'high-end', 'overclocking'],
    createdAt: '2023-09-18T09:45:00Z'
  },
  {
    id: '4',
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    price: 249.99,
    originalPrice: 299.99,
    description: 'Experience next-level computing with the 990 PRO, offering sequential read/write speeds up to 7,450/6,900 MB/s, perfect for gaming and intensive workloads.',
    category: { id: 'storage', name: 'Storage' },
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0 x4, NVMe 2.0',
      'Read Speed': 'Up to 7,450 MB/s',
      'Write Speed': 'Up to 6,900 MB/s'
    },
    tags: ['fast-storage', 'gaming', 'high-performance'],
    createdAt: '2023-09-20T14:15:00Z'
  },
  {
    id: '5',
    name: 'Corsair Dominator Platinum RGB 32GB DDR5-6000',
    price: 249.99,
    originalPrice: 279.99,
    description: 'Corsair Dominator Platinum RGB DDR5 memory delivers spectacular performance with tight timings and offers built-in cooling for superior overclocking headroom.',
    category: { id: 'memory', name: 'RAM' },
    brand: 'Corsair',
    images: [
      'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviewCount: 157,
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': 'DDR5-6000MHz',
      'Timings': 'CL36-36-36-76',
      'Voltage': '1.35V'
    },
    tags: ['high-performance', 'rgb', 'gaming'],
    createdAt: '2023-09-22T16:30:00Z'
  },
  {
    id: '6',
    name: 'NZXT H7 Flow ATX Mid-Tower Case',
    price: 129.99,
    originalPrice: 149.99,
    description: 'The NZXT H7 Flow showcases your build with a spacious interior, exceptional cooling, and clean cable management for a polished look.',
    category: { id: 'case', name: 'PC Cases' },
    brand: 'NZXT',
    images: [
      'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    featured: false,
    specifications: {
      'Form Factor': 'ATX Mid-Tower',
      'Dimensions': '230mm x 505mm x 480mm',
      'Materials': 'Steel, Tempered Glass',
      'Included Fans': '2x 140mm front, 1x 140mm rear'
    },
    tags: ['airflow', 'clean-design', 'cable-management'],
    createdAt: '2023-09-25T13:10:00Z'
  },
  {
    id: '7',
    name: 'Corsair HX1000i Platinum Power Supply',
    price: 239.99,
    originalPrice: 259.99,
    description: 'The Corsair HX1000i delivers clean, reliable power with 80 PLUS Platinum efficiency and fully modular cables for easy installation and cable management.',
    category: { id: 'psu', name: 'Power Supplies' },
    brand: 'Corsair',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    featured: false,
    specifications: {
      'Wattage': '1000W',
      'Efficiency': '80 PLUS Platinum',
      'Form Factor': 'ATX',
      'Modular': 'Fully Modular'
    },
    tags: ['high-efficiency', 'reliable', 'modular'],
    createdAt: '2023-09-28T11:40:00Z'
  },
  {
    id: '8',
    name: 'ASUS ROG Swift PG32UQX 32" 4K Gaming Monitor',
    price: 2999.99,
    originalPrice: 3299.99,
    description: 'The ultimate 4K HDR gaming monitor featuring mini-LED backlight technology, 144Hz refresh rate, and NVIDIA G-SYNC Ultimate certification.',
    category: { id: 'monitor', name: 'Monitors' },
    brand: 'ASUS',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviewCount: 88,
    inStock: true,
    featured: true,
    specifications: {
      'Size': '32"',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Refresh Rate': '144Hz',
      'Panel Type': 'IPS',
      'HDR': 'HDR1400'
    },
    tags: ['gaming', '4k', 'hdr', 'g-sync'],
    createdAt: '2023-10-01T10:20:00Z'
  },
  {
    id: '9',
    name: 'Logitech G Pro X Superlight Wireless Gaming Mouse',
    price: 149.99,
    originalPrice: 159.99,
    description: 'Less than 63 grams of weight and features LIGHTSPEED wireless technology, HERO 25K sensor, and up to 70 hours of battery life.',
    category: { id: 'peripheral', name: 'Peripherals' },
    brand: 'Logitech',
    images: [
      'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviewCount: 345,
    inStock: true,
    featured: false,
    specifications: {
      'Weight': '<63g',
      'Sensor': 'HERO 25K',
      'DPI Range': '100-25,600 DPI',
      'Battery Life': 'Up to 70 hours'
    },
    tags: ['gaming', 'wireless', 'lightweight'],
    createdAt: '2023-10-05T15:50:00Z'
  },
  {
    id: '10',
    name: 'SteelSeries Apex Pro TKL Mechanical Keyboard',
    price: 189.99,
    originalPrice: 219.99,
    description: 'The world\'s fastest mechanical keyboard with adjustable switches, OLED smart display, aircraft-grade aluminum alloy frame, and RGB illumination.',
    category: { id: 'peripheral', name: 'Peripherals' },
    brand: 'SteelSeries',
    images: [
      'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviewCount: 268,
    inStock: true,
    featured: false,
    specifications: {
      'Switch Type': 'OmniPoint Adjustable',
      'Form Factor': 'Tenkeyless (TKL)',
      'Backlight': 'Per-key RGB',
      'Keycaps': 'PBT Double Shot'
    },
    tags: ['gaming', 'mechanical', 'customizable'],
    createdAt: '2023-10-08T12:35:00Z'
  },
  {
    id: '11',
    name: 'Intel Core i9-13900K Desktop Processor',
    price: 589.99,
    originalPrice: 649.99,
    description: 'Featuring 24 cores (8 P-cores, 16 E-cores) and 32 threads, the i9-13900K delivers exceptional gaming and multitasking performance.',
    category: { id: 'cpu', name: 'Processors' },
    brand: 'Intel',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviewCount: 187,
    inStock: true,
    featured: true,
    specifications: {
      'Cores': '24 (8P+16E)',
      'Threads': '32',
      'Base Frequency': '3.0 GHz (P-cores), 2.2 GHz (E-cores)',
      'Max Turbo Frequency': '5.8 GHz',
      'TDP': '125W'
    },
    tags: ['gaming', 'high-performance', 'productivity'],
    createdAt: '2023-10-10T09:15:00Z'
  },
  {
    id: '12',
    name: 'MSI GeForce RTX 4080 16GB Suprim X',
    price: 1299.99,
    originalPrice: 1399.99,
    description: 'The MSI GeForce RTX 4080 Suprim X delivers extraordinary performance with advanced cooling, premium design, and whisper-quiet operation.',
    category: { id: 'gpu', name: 'Graphics Cards' },
    brand: 'MSI',
    images: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    featured: true,
    specifications: {
      'CUDA Cores': '9728',
      'Memory': '16GB GDDR6X',
      'Boost Clock': '2.7 GHz',
      'Power Consumption': '320W'
    },
    tags: ['gaming', 'ray-tracing', 'high-performance'],
    createdAt: '2023-10-12T14:25:00Z'
  }
];