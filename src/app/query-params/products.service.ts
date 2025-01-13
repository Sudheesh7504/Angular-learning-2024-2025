import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      image: 'https://triprindia.com/cdn/shop/files/133close1_1024x.jpg?v=1708080238',
      name: "Men's T-Shirt",
      price: 19.99,
      category: "Men",
      brand: "FashionX",
      stock: 120,
    },
    {
      image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwba3033d5/images/aw23/fstve2058aw23nvy_1-1.jpg?sw=242&sh=363',
      name: "Women's Dress",
      price: 49.99,
      category: "Women",
      brand: "StyleHub",
      stock: 80,
    },
    {
      image: 'https://static.digit.in/OnePlus-13-%E0%AE%A9%E0%AF%8D-phone.jpg',
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      brand: "TechCore",
      stock: 50,
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/355529138/SC/PX/LU/25006117/oneplus-buds-pro-2-bluetooth-tws-in-ear-earbuds.jpeg',
      name: "Bluetooth Headphones",
      price: 99.99,
      category: "Electronics",
      brand: "SoundWave",
      stock: 150,
    },
    {
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/mc28a5013ak-tl/gallery/in-mc28a5013-convection-microwave--28-l-mc28a5013ak-tl-532582908?$684_547_PNG$',
      name: "Microwave Oven",
      price: 199.99,
      category: "Home Appliances",
      brand: "KitchenPro",
      stock: 60,
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKK_H2l6BM8echcSwH9cZ7BDsQcqDosAoqcKUo_oKW5qkKJDjpJU7t5MyzducI1Z1dk5spbGRLDumCYj0PZygbVbCShq5XZ2cEJcjJu3jE&usqp=CAc',
      name: "Men's Jeans",
      price: 39.99,
      category: "Men",
      brand: "DenimWorld",
      stock: 200,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc-CgRaH1scW4ImtN--HrMaDcptOY6Y9UoA&s',
      name: "Women's Handbag",
      price: 59.99,
      category: "Women",
      brand: "BagStyle",
      stock: 90,
    },
    {
      image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_3_1_1.png',
      name: "Laptop",
      price: 899.99,
      category: "Electronics",
      brand: "ComputeMate",
      stock: 30,
    },
    {
      image: 'https://m.media-amazon.com/images/I/71LDghYCyZL._AC_UF894,1000_QL80_.jpg',
      name: "Vacuum Cleaner",
      price: 149.99,
      category: "Home Appliances",
      brand: "CleanEasy",
      stock: 40,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejUVrdsFJXvaxPDnGg3wJkhisA0NkKKKInA&s',
      name: "LED TV",
      price: 399.99,
      category: "Electronics",
      brand: "ViewPlus",
      stock: 25,
    },
    {
      image: 'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg',
      name: "Men's Watch",
      price: 129.99,
      category: "Men",
      brand: "Timeless",
      stock: 70,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDtpnBhxHfPb0EDdBHcnu3ACvhGmJSkWoyw&s',
      name: "Women's Necklace",
      price: 79.99,
      category: "Women",
      brand: "GlamShine",
      stock: 100,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqD6JM-UPX1Ve_5UytKOQNxaYGGCHD3YOw&s',
      name: "Refrigerator",
      price: 999.99,
      category: "Home Appliances",
      brand: "CoolWave",
      stock: 15,
    },
    {
      image: 'https://www.johnstonmurphy.com/on/demandware.static/-/Sites/default/dwc9256231/imagefilters/GOLF_6_14_24.png',
      name: "Men's Shoes",
      price: 89.99,
      category: "Men",
      brand: "StepUp",
      stock: 140,
    },
    {
      image: 'https://5.imimg.com/data5/ECOM/Default/2023/8/333181245/ML/PE/OW/19034405/74b17bbc-7ce0-4181-8415-62b5dafd15c6-500x500.jpg',
      name: "Women's Sandals",
      price: 49.99,
      category: "Women",
      brand: "FootTrend",
      stock: 130,
    },
  ];

  constructor() { }
}
