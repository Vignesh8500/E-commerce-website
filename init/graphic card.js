const graphicCard = [
    {
        title: "NVIDIA GeForce RTX 4060",
        description: "Mid-range graphics card with ray tracing and DLSS support.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2414/innergigabyteimages/kf-card.png",
        price: 6000,
        discount: 10,
        additionalInformation: "Ideal for gamers looking for a balance between performance and affordability.",
        aboutThisItem: "The NVIDIA GeForce RTX 4060 features ray tracing, DLSS support, and a compact design for efficient cooling.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "1830 MHz",
            boostClock: "2460 MHz",
            powerConsumption: "115W"
        }
    },
    {
        title: "AMD Radeon RX 7600",
        description: "Affordable graphics card with RDNA 3 architecture and high efficiency.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://th.bing.com/th/id/R.aa520425ec711993f44608b0dac5c906?rik=kt%2fd8o0YQoadUw&riu=http%3a%2f%2fwww.vastarmor.com%2fstatic%2fupload%2fimage%2f20230609%2f1686284294261468.png&ehk=Xbk5BtrRhRXhh6DQFLjE9OHwrrcZ2%2bcCfBVECFJsnIs%3d&risl=&pid=ImgRaw&r=0",
        price: 6500,
        discount: 12,
        additionalInformation: "Perfect for budget-conscious gamers who need solid performance.",
        aboutThisItem: "The AMD Radeon RX 7600 features RDNA 3 architecture, high efficiency, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "1725 MHz",
            boostClock: "2655 MHz",
            powerConsumption: "165W"
        }
    },
    {
        title: "Intel Arc A750",
        description: "Mid-range graphics card with AI-enhanced upscaling and DirectX 12 support.",
        category: "graphics cards",
        brand: "Intel",
        image: "https://game.intel.com/wp-content/uploads/2024/01/a750-double-shroud-1080.png?x88134",
        price: 7000,
        discount: 15,
        additionalInformation: "Designed for gamers and creators looking for AI-enhanced performance.",
        aboutThisItem: "The Intel Arc A750 features AI-enhanced upscaling, DirectX 12 support, and XeSS technology for improved visuals.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "2050 MHz",
            boostClock: "2400 MHz",
            powerConsumption: "225W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4070",
        description: "High-performance graphics card with advanced ray tracing and DLSS 3.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2305/innergigabyteimages/kf-card.png",
        price: 8000,
        discount: 10,
        additionalInformation: "Perfect for gamers who need high frame rates and stunning visuals.",
        aboutThisItem: "The NVIDIA GeForce RTX 4070 features advanced ray tracing, DLSS 3, and a powerful cooling system.",
        productDetails: {
            memory: "12GB GDDR6X",
            coreClock: "1920 MHz",
            boostClock: "2475 MHz",
            powerConsumption: "200W"
        }
    },
    {
        title: "AMD Radeon RX 7700 XT",
        description: "Powerful graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://compday.ru/files/reg/5970357.png",
        price: 8500,
        discount: 12,
        additionalInformation: "Ideal for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7700 XT features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "12GB GDDR6",
            coreClock: "1800 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "230W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4080",
        description: "High-end graphics card with advanced ray tracing and DLSS 3.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://asset.msi.com/resize/image/global/product/product_1668065962e813592bad41c40f99193415735dafc0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 9000,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-high frame rates and stunning visuals.",
        aboutThisItem: "The NVIDIA GeForce RTX 4080 features advanced ray tracing, DLSS 3, and a powerful cooling system.",
        productDetails: {
            memory: "16GB GDDR6X",
            coreClock: "2205 MHz",
            boostClock: "2505 MHz",
            powerConsumption: "320W"
        }
    },
    {
        title: "AMD Radeon RX 7800 XT",
        description: "Powerful graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://pg.asrock.com/Graphics-Card/photo/Radeon%20RX%207800%20XT%20Phantom%20Gaming%2016GB%20OC(L4).png",
        price: 9500,
        discount: 12,
        additionalInformation: "Perfect for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7800 XT features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "16GB GDDR6",
            coreClock: "1900 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "300W"
        }
    },
    {
        title: "Intel Arc A770",
        description: "High-performance graphics card with AI-enhanced upscaling and DirectX 12 support.",
        category: "graphics cards",
        brand: "Intel",
        image: "https://pg.asrock.com/Graphics-Card/photo/Intel%20Arc%20A770%20Phantom%20Gaming%2016GB%20OC(L3).png",
        price: 10000,
        discount: 15,
        additionalInformation: "Designed for gamers and creators looking for AI-enhanced performance.",
        aboutThisItem: "The Intel Arc A770 features AI-enhanced upscaling, DirectX 12 support, and XeSS technology for improved visuals.",
        productDetails: {
            memory: "16GB GDDR6",
            coreClock: "2100 MHz",
            boostClock: "2500 MHz",
            powerConsumption: "225W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4090",
        description: "Ultra-high-end graphics card with extreme performance and AI-powered rendering.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://images.frandroid.com/wp-content/uploads/2022/09/nvidia-geforce-rtx-4090-frandroid-2022.png",
        price: 12000,
        discount: 10,
        additionalInformation: "Perfect for gamers and creators who need the best performance available.",
        aboutThisItem: "The NVIDIA GeForce RTX 4090 features extreme performance, AI-powered rendering, and a powerful cooling system.",
        productDetails: {
            memory: "24GB GDDR6X",
            coreClock: "2235 MHz",
            boostClock: "2520 MHz",
            powerConsumption: "450W"
        }
    },
    {
        title: "AMD Radeon RX 7900 XTX",
        description: "Flagship graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://static.gigabyte.com/StaticFile/Image/Global/ffebdb331cdc6e8eecf7f2b4b42b8232/Product/32793/Png",
        price: 13000,
        discount: 12,
        additionalInformation: "Ideal for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7900 XTX features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "24GB GDDR6",
            coreClock: "2000 MHz",
            boostClock: "2500 MHz",
            powerConsumption: "355W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4060 Ti",
        description: "Mid-range graphics card with ray tracing and DLSS 3 support.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://dlcdnwebimgs.asus.com/files/media/3A0B48C1-82EB-4716-84E7-9C343E5A28FE/v1/img/kv/pd.png",
        price: 7000,
        discount: 10,
        additionalInformation: "Ideal for gamers looking for a balance between performance and affordability.",
        aboutThisItem: "The NVIDIA GeForce RTX 4060 Ti features ray tracing, DLSS 3 support, and a compact design for efficient cooling.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "2310 MHz",
            boostClock: "2535 MHz",
            powerConsumption: "160W"
        }
    },
    {
        title: "AMD Radeon RX 7600 XT",
        description: "Affordable graphics card with RDNA 3 architecture and high efficiency.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%207600%20XT%20Challenger%2016GB%20OC(M1).png",
        price: 7500,
        discount: 12,
        additionalInformation: "Perfect for budget-conscious gamers who need solid performance.",
        aboutThisItem: "The AMD Radeon RX 7600 XT features RDNA 3 architecture, high efficiency, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "1755 MHz",
            boostClock: "2700 MHz",
            powerConsumption: "170W"
        }
    },
    {
        title: "Intel Arc A580",
        description: "Mid-range graphics card with AI-enhanced upscaling and DirectX 12 support.",
        category: "graphics cards",
        brand: "Intel",
        image: "https://www.sparkle.com.tw/files/20240202122913170.png",
        price: 8000,
        discount: 15,
        additionalInformation: "Designed for gamers and creators looking for AI-enhanced performance.",
        aboutThisItem: "The Intel Arc A580 features AI-enhanced upscaling, DirectX 12 support, and XeSS technology for improved visuals.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "2050 MHz",
            boostClock: "2400 MHz",
            powerConsumption: "225W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4070 Super",
        description: "High-performance graphics card with advanced ray tracing and DLSS 3.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://store.teslards.pe/wp-content/uploads/2024/02/GeForce-RTX%E2%84%A2-4070-SUPER-GAMING-OC-12G-01.png",
        price: 8500,
        discount: 10,
        additionalInformation: "Perfect for gamers who need high frame rates and stunning visuals.",
        aboutThisItem: "The NVIDIA GeForce RTX 4070 Super features advanced ray tracing, DLSS 3, and a powerful cooling system.",
        productDetails: {
            memory: "12GB GDDR6X",
            coreClock: "1920 MHz",
            boostClock: "2475 MHz",
            powerConsumption: "200W"
        }
    },
    {
        title: "AMD Radeon RX 7700 XT",
        description: "Powerful graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://c1.neweggimages.com/BizIntell/item/VGA/Video%20Cards%20-%20AMD%20ATI/14-202-435/28.png",
        price: 9000,
        discount: 12,
        additionalInformation: "Ideal for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7700 XT features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "12GB GDDR6",
            coreClock: "1800 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "230W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4080 Super",
        description: "High-end graphics card with advanced ray tracing and DLSS 3.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://dlcdnwebimgs.asus.com/gain/69455A9D-B47A-48C5-A684-95A170DC738A/w1000/h732",
        price: 11000,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-high frame rates and stunning visuals.",
        aboutThisItem: "The NVIDIA GeForce RTX 4080 Super features advanced ray tracing, DLSS 3, and a powerful cooling system.",
        productDetails: {
            memory: "16GB GDDR6X",
            coreClock: "2205 MHz",
            boostClock: "2505 MHz",
            powerConsumption: "320W"
        }
    },
    {
        title: "AMD Radeon RX 7800 XT Super",
        description: "Powerful graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://static.chiphell.com/portal/202309/06/185343mrgdz5yhj94uv64v.png",
        price: 11500,
        discount: 12,
        additionalInformation: "Perfect for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7800 XT Super features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "16GB GDDR6",
            coreClock: "1900 MHz",
            boostClock: "2700 MHz",
            powerConsumption: "300W"
        }
    },
    {
        title: "Intel Arc A770 Super",
        description: "High-performance graphics card with AI-enhanced upscaling and DirectX 12 support.",
        category: "graphics cards",
        brand: "Intel",
        image: "https://plecom.imgix.net/bo-782987-DG2_ARC_LED_00023_Edit.png?auto=format",
        price: 12000,
        discount: 15,
        additionalInformation: "Designed for gamers and creators looking for AI-enhanced performance.",
        aboutThisItem: "The Intel Arc A770 Super features AI-enhanced upscaling, DirectX 12 support, and XeSS technology for improved visuals.",
        productDetails: {
            memory: "16GB GDDR6",
            coreClock: "2100 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "225W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4090 Ti",
        description: "Ultra-high-end graphics card with extreme performance and AI-powered rendering.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://asset.msi.com/resize/image/global/product/product_16655531780ae76e91e577ad9719f1f135824e1a15.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        price: 14000,
        discount: 10,
        additionalInformation: "Perfect for gamers and creators who need the best performance available.",
        aboutThisItem: "The NVIDIA GeForce RTX 4090 Ti features extreme performance, AI-powered rendering, and a powerful cooling system.",
        productDetails: {
            memory: "24GB GDDR6X",
            coreClock: "2235 MHz",
            boostClock: "2520 MHz",
            powerConsumption: "450W"
        }
    },
    {
        title: "AMD Radeon RX 7900 XTX Super",
        description: "Flagship graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%207900%20XTX%20Creator%2024GB(L1).png",
        price: 15000,
        discount: 12,
        additionalInformation: "Ideal for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7900 XTX Super features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "24GB GDDR6",
            coreClock: "2000 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "355W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4060 Super",
        description: "Mid-range graphics card with ray tracing and DLSS 3 support.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://media.spdigital.cl/thumbnails/products/rifuj5lu_8b83c02c_thumbnail_4096.png",
        price: 6500,
        discount: 10,
        additionalInformation: "Ideal for gamers looking for a balance between performance and affordability.",
        aboutThisItem: "The NVIDIA GeForce RTX 4060 Super features ray tracing, DLSS 3 support, and a compact design for efficient cooling.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "2310 MHz",
            boostClock: "2535 MHz",
            powerConsumption: "160W"
        }
    },
    {
        title: "AMD Radeon RX 7600 XT Super",
        description: "Affordable graphics card with RDNA 3 architecture and high efficiency.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://asset.msi.com/resize/image/global/product/product_1684986580ff77e1e64e55885666abf19ec64cedbb.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        price: 7000,
        discount: 12,
        additionalInformation: "Perfect for budget-conscious gamers who need solid performance.",
        aboutThisItem: "The AMD Radeon RX 7600 XT Super features RDNA 3 architecture, high efficiency, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "1755 MHz",
            boostClock: "2700 MHz",
            powerConsumption: "170W"
        }
    },
    {
        title: "Intel Arc A580 Super",
        description: "Mid-range graphics card with AI-enhanced upscaling and DirectX 12 support.",
        category: "graphics cards",
        brand: "Intel",
        image: "https://www.fsi-embedded.jp/contents/uploads/2023/10/IntelArcA580OCEdition_03.png",
        price: 7500,
        discount: 15,
        additionalInformation: "Designed for gamers and creators looking for AI-enhanced performance.",
        aboutThisItem: "The Intel Arc A580 Super features AI-enhanced upscaling, DirectX 12 support, and XeSS technology for improved visuals.",
        productDetails: {
            memory: "8GB GDDR6",
            coreClock: "2050 MHz",
            boostClock: "2400 MHz",
            powerConsumption: "225W"
        }
    },
    {
        title: "NVIDIA GeForce RTX 4070 Ti Super",
        description: "High-performance graphics card with advanced ray tracing and DLSS 3.",
        category: "graphics cards",
        brand: "NVIDIA",
        image: "https://hardwaretimes.com/wp-content/uploads/2023/01/4070Ti_X3_OC_set.png",
        price: 8500,
        discount: 10,
        additionalInformation: "Perfect for gamers who need high frame rates and stunning visuals.",
        aboutThisItem: "The NVIDIA GeForce RTX 4070 Ti Super features advanced ray tracing, DLSS 3, and a powerful cooling system.",
        productDetails: {
            memory: "12GB GDDR6X",
            coreClock: "1920 MHz",
            boostClock: "2475 MHz",
            powerConsumption: "200W"
        }
    },
    {
        title: "AMD Radeon RX 7700 XT Super",
        description: "Powerful graphics card with RDNA 3 architecture and high-speed memory.",
        category: "graphics cards",
        brand: "AMD",
        image: "https://tweakers.net/i/MWsR3kBw8sLH1-VQlicUyP1Qg-U=/i/2006076436.png",
        price: 9000,
        discount: 12,
        additionalInformation: "Ideal for gamers who need high-speed memory and smooth performance.",
        aboutThisItem: "The AMD Radeon RX 7700 XT Super features RDNA 3 architecture, high-speed memory, and support for FidelityFX Super Resolution.",
        productDetails: {
            memory: "12GB GDDR6",
            coreClock: "1800 MHz",
            boostClock: "2600 MHz",
            powerConsumption: "230W"
        }
    }
]
module.exports = {data: graphicCard};