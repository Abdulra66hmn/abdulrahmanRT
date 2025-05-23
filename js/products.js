// بيانات المنتجات
const products = [
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 0,
    name: "HP OmniBook Laptop",
    storage: "1 TB M.2 NVMe PCIe 4.0 SSD",
    ram: "16 GB",
    processor: "Snapdragon X Elite",
    screen_size: "14 inches",
    screen_type: "2.2-inch IPS anti-glare backlit touchscreen",
    graph_card: "Qualcomm Adreno processor",
    os: "Windows 11 Pro",
    price: 82365,
    old_price: 86700,
    isBestSeller: false,
    isNew: true,
    img: "lap/product-1.jpg",
    img_hover: "lap/product-1-1.jpg"
  },
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 1,
    name: "HP EliteBook 640 Laptop",
    storage: "512 GB SSD",
    ram: "16 GB",
    processor: "Intel Core Ultra 5",
    screen_size: "14 inches",
    screen_type: "WUXGA IPS anti-glare display with 400 nits brightness",
    graph_card: "Intel Arc Graphics",
    price: 42525,
    old_price: 47250,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11 Pro",
    img: "lap/product-3-0.jpg",
    img_hover: "lap/product-3-1.jpg"
  },
  {
    laptop: "hp",
    lap_type: "gaming_laptop",
    id: 2,
    name: "HP Victus Gaming Laptop",
    storage: "1 TB PCIe NVMe M.2 SSD",
    ram: "16 GB",
    processor1: "13th Generation Intel Core i7-13700H",
    processor: "Intel Core i7",
    screen_size: "15.6 inches",
    screen_type: "Full HD IPS AG 250N",
    graph_card: "NVIDIA GeForce RTX 4050 6GB",
    os: "Windows 11",
    price: 59670,
    old_price: 70200,
    isBestSeller: true,
    isNew: false,
    img: "lap/product-6-0.jpg",
    img_hover: "lap/product-6-2.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "laptop",
    id: 3,
    name: "Lenovo IdeaPad Pro 5 Laptop",
    storage: "512 GB",
    ram: "32 GB",
    processor: "Intel Core Ultra 7",
    screen_size: "16 inches",
    screen_type: "2K 400 nit OLED display with brightness",
    graph_card: "6GB NVIDIA GeForce RTX 3050",
    os: "Windows 11 Home",
    price: 49895,
    old_price: 58700,
    isBestSeller: true,
    isNew: false,
    img: "lap/product-5-0.jpg",
    img_hover: "lap/product-5-1.jpg"
  },
  {
    laptop: "mac",
    lap_type: "laptop",
    id: 4,
    name: "Apple MacBook Air Laptop",
    storage: "256 GB SSD",
    ram: "8 GB",
    processor: "M3",
    screen_size: "15.3 inches",
    graph_card: "10-core GPU",
    screen_type: "liquid retinal display",
    price: 45000,
    old_price: 50000,
    isBestSeller: true,
    isNew: false,
    os: "macOS Sonoma",
    img: "lap/product-9-0.jpg",
    img_hover: "lap/product-9-3.jpg"
  },
  {
    laptop: "hp",
    lap_type: "2-in-1 convertible laptop",
    id: 5,
    name: "HP Pavilion x360 14 2-in-1 Convertible Laptop",
    storage: "512GB PCIe NVMe M.2 SSD",
    ram: "8 GB",
    processor1: "13th Generation Intel Core i5-1335U",
    processor:"Intel Core i5",
    screen_size: "14 inches",
    graph_card: "Intel Iris Xe Graphics",
    screen_type: "1080p IPS LED multi-touch screen",
    price: 43400,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11",
    img: "lap/product-2.jpg",
    img_hover: "lap/product-2-1.jpg"
  },
  
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 6,
    name: "HP EliteBook 660 Laptop",
    storage: "512 GB SSD",
    ram: "32 GB",
    processor1: "155H7 Intel Core Ultra Processor",
    processor:"Intel Core Ultra 7", 
    screen_size: "16 inches",
    graph_card: "Intel Arc Graphics",
    screen_type: "WUXGA IPS anti-glare display with 400 nits brightness",
    price: 79650,
    isBestSeller: false,
    isNew: true,
    os: "Pro 11 Windows",
    img: "lap/product-4-0.jpg",
    img_hover: "lap/product-4-1.jpg"
  },

  {
    laptop: "hp",
    lap_type: "laptop",
    id: 7,
    name: "HP EliteBook 840 Laptop",
    storage: "1TB NVMe PCIe Gen 4x4 SSD",
    ram: "32 GB",
    processor1: "Intel Core i7-1550U",
    processor: "Intel Core Ultra 7",
    screen_size: "14 inches",
    graph_card: "Intel Arc Graphics",
    screen_type: "WUXGA IPS AG Display",
    price: 70500,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11 Pro",
    img: "lap/product-7.jpg",
    img_hover: "lap/product-7-1.jpg"
  },
  
  {
    laptop: "hp",
    lap_type: "gaming_laptop",
    id: 8,
    name: "HP Victus Gaming Laptop",
    storage: "1TB M.2 NVMe PCIe SSD",
    ram: "16 GB",
    processor1: "Intel Core i5-14450HX (14th Generation)",
    processor: "Intel Core i5",
    screen_size: "16.1 inches",
    graph_card: "6GB NVIDIA GeForce RTX 3050",
    screen_type: "144Hz Full HD IPS Display",
    price: 58800,
    isBestSeller: false,
    isNew: true,
    os: "Windows 11 Home",
    img: "lap/product-8.jpg",
    img_hover: "lap/product-8-1.jpg"
  },
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 9,
    name: "HP Notebook Laptop",
    storage: "512GB PCIe NVMe M.2 SSD",
    ram: "8 GB",
    processor1: "Intel Core i5-1334U (13th Generation)",
    processor: "Intel Core i5",
    screen_size: "15.6 inches",
    graph_card: "Intel Iris Xe Graphics",
    screen_type: "1080p IPS micro-edge display",
    price: 25900,
    old_price: 33750,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11",
    img: "lap/product-10.jpg",
    img_hover: "lap/product-10-1.jpg"
  },
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 10,
    name: "HP Pavilion Laptop",
    storage: "1TB M.2 NVMe PCIe SSD",
    ram: "16 GB",
    processor1: "Intel Core i7-1360P (13th Generation)",
    processor: "Intel Core i7",
    screen_size: "15.6 inches",
    graph_card: "Intel Iris Xe Graphics",
    screen_type: "FHD IPS GL 250N",
    price: 32400,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11",
    img: "lap/product-11.jpg",
    img_hover: "lap/product-11-1.jpg"
  },
  {
    laptop: "hp",
    lap_type: "laptop",
    id: 11,
    name: "HP Notebook Laptop",
    storage: "512GB SSD",
    ram: "16 GB",
    processor1: "7730-7 AMD Ryzen U",
    processor: "Intel Core i7",
    screen_size: "15.6 inches",
    graph_card: "AMD Radeon graphics",
    screen_type: "High definition anti-glare LED screen",
    price: 40500,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11 Home",
    img: "lap/product-12.jpg",
    img_hover: "lap/product-12-1.jpg"
  },

  
  {
    laptop: "lenovo",
    lap_type: "gaming_laptop",
    id: 12,
    name: "Lenovo L0Q Gaming Laptop",
    storage: "512 GB NVMe M.2 SSD",
    ram: "12 GB RAM",
    processor: "Intel Core i5-12450HX (12th Generation)",
    screen_size: "15.6 inches",
    graph_card: "NVIDIA GeForce 4 GB",
    screen_type: "144Hz Full HD IPS Display",
    price: 35200,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11 Home",
    img: "lap/product-13.jpg",
    img_hover: "lap/product-13-1.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "laptop",
    id: 13,
    name: "Lenovo IdeaPad Slim 3 Laptop",
    storage: "1 TB PCIe NVMe M.2 SSD",
    ram: "16 GB RAM",
    processor: "Intel Core i7-13620H (13th Gen)",
    screen_size: "15.6 inches",
    graph_card: "Intel UHD Graphics",
    screen_type: "FHD IPS AG 300N",
    price: 35000,
    old_price: 37400,
    isBestSeller: true,
    isNew: false,
    os: "Windows 11 Home",
    img: "lap/product-14.jpg",
    img_hover: "lap/product-14-1.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "laptop",
    id: 14,
    name: "Lenovo ThinkBook 14 Laptop",
    storage: "512 GB SSD",
    ram: "16 GB RAM",
    processor: "Intel Core Ultra 5 125U",
    screen_size: "14 inches",
    graph_card: "Intel Graphics",
    screen_type: "WUXGA IPS AG Display",
    price: 39150,
    isBestSeller: false,
    isNew: false,
    os: "Windows 11 Pro",
    img: "lap/product-15.jpg",
    img_hover: "lap/product-15-1.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "laptop",
    id: 15,
    name: "Lenovo ThinkBook 16 G7 Laptop",
    storage: "512 GB SSD",
    ram: "16 GB RAM",
    processor: "Intel Core Ultra 7 155H",
    screen_size: "16 inches",
    graph_card: "Intel Arc Graphics",
    screen_type: "WUXGA IPS AG Display",
    price: 47000,
    isBestSeller: false,
    isNew: true,
    os: "Windows 11 Pro",
    img: "lap/product-16.jpg",
    img_hover: "lap/product-16-1.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "laptop",
    id: 16,
    name: "Lenovo ThinkBook 16 Laptop",
    storage: "1 TB SSD",
    ram: "16 GB RAM",
    processor: "Intel Core Ultra 7 155H",
    screen_size: "16 inches",
    graph_card: "Intel Arc Graphics",
    screen_type: "WUXGA IPS AG Display",
    price: 49300,
    isBestSeller: false,
    isNew: true,
    os: "Windows 11 Pro",
    img: "lap/product-17.jpg",
    img_hover: "lap/product-17-1.jpg"
  },
  {
    laptop: "lenovo",
    lap_type: "gaming_laptop",
    id: 17,
    name: "Lenovo LOQ Gaming Laptop",
    storage: "1 TB M.2 NVMe PCIe 4.0 SSD",
    ram: "16 GB RAM",
    processor: "Intel Core i7-14700HX (14th Gen)",
    screen_size: "15.6 inches",
    graph_card: "NVIDIA GeForce RTX 4060 (8 GB)",
    screen_type: "FHD IPS 144 Hz Display",
    price: 51120,
    old_price: 54120,
    isBestSeller: true,
    isNew: false,
    os: "Windows 11 Home",
    img: "lap/product-18.jpg",
    img_hover: "lap/product-18-1.jpg"
  },
  {
    laptop: "lenovo",
    id: 18,
    name: "Lenovo IdeaPad Flex 5 2-in-1 Laptop - Convertible",
    storage: "512 GB PCIe NVMe M.2 SSD",
    ram: "8 GB RAM",
    processor: "Intel Core i5-13420H (13th Gen)",
    screen_size: "14 inches",
    graph_card: "Intel UHD Graphics",
    screen_type: "WUXGA IPS 300N Multi-touch Display",
    price: 27750,
    old_price: 28750,
    isBestSeller: true,
    isNew: false,
    os: "Windows 11 Home",
    img: "lap/product-19.jpg",
    img_hover: "lap/product-19-1.jpg"
  },


  {
    laptop: "mac",
    id: 19,
    name: "Apple MacBook Air Retina Laptop",
    storage: "256 GB SSD",
    ram: "8 GB RAM",
    processor: "M1",
    screen_size: "13.3 inches",
    graph_card: "7-core graphics processing unit",
    screen_type: "Retina display",
    price: 32500,
    old_price:35000 ,
    isBestSeller: false,
    isNew: false,
    os: "macOS Big Show",
    img: "lap/product-20.jpg",
    img_hover: "lap/product-20-1.jpg"
  },

  {
    laptop: "mac",
    id: 20,
    name: "Apple MacBook Air Retina Laptop",
    storage: "256 GB SSD",
    ram: "8 GB RAM",
    processor: "M2",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 38500,
    old_price: 41000,
    isBestSeller: false,
    isNew: false,
    os: "macOS Monterey",
    img: "lap/product-21.jpg",
    img_hover: "lap/product-21-1.jpg"
  },

  {
    laptop : "mac",
    id : 21,
    name: "Apple MacBook Air Retina Laptop",
    storage: "256 GB SSD",
    ram: "8 GB RAM",
    processor: "M2",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 38500,
    old_price: 41000,
    isBestSeller: false,
    isNew: false,
    os: "macOS Monterey",
    img: "lap/product-22.jpg",
    img_hover: "lap/product-21-1.jpg"
  },

  {
    laptop : "mac",
    id : 22,
    name: "Apple MacBook Air Retina Laptop",
    storage: "256 GB SSD",
    ram: "8 GB RAM",
    processor: "M2",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 38500,
    old_price: 41000,
    isBestSeller: false,
    isNew: false,
    os: "macOS Monterey",
    img: "lap/product-23.jpg",
    img_hover: "lap/product-21-1.jpg"
  },

  
  {
    laptop : "mac",
    id : 23,
    name: "Apple MacBook Air Retina Laptop",
    storage: "512 GB SSD",
    ram: "8 GB RAM",
    processor: "M2",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 43200,
    isBestSeller: false,
    isNew: false,
    os: "macOS Monterey",
    img: "lap/product-24.jpg",
    img_hover: "lap/product-21-1.jpg"
  },

  
  {
    laptop : "mac",
    id : 24,
    name: "Apple MacBook Air Retina Laptop",
    storage: "512 GB SSD",
    ram: "16 GB RAM",
    processor: "M2",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 44500,
    isBestSeller: false,
    isNew: true,
    os: "macOS Sequoia",
    img: "lap/product-25.jpg",
    img_hover: "lap/product-25-2.jpg"
  },


  {
    laptop : "mac",
    id : 25,
    name: "Apple MacBook Air laptop",
    storage: "256 GB SSD",
    ram: "8 GB RAM",
    processor: "M3",
    screen_size: "13.6 inches",
    graph_card: "8-core GPU",
    screen_type: "Retina display",
    price: 54750,
    isBestSeller: true,
    isNew: false,
    os: "macOS Sequoia",
    img: "lap/product-26.jpg",
    img_hover: "lap/product-25-2.jpg"
  },
  

];
