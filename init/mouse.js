const mouse = [
    {
        title: "Logitech MX Master 3S",
        description: "Advanced wireless mouse with ultra-fast scrolling and ergonomic design.",
        category: "mouse",
        brand: "Logitech",
        image: "https://media.croma.com/image/upload/v1681404219/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/258454_0_rmm57f.png",
        price: 349.99,
        discount: 10,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Logitech MX Master 3S features ultra-fast scrolling, ergonomic design, and customizable buttons for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            dpi: "8000 DPI",
            batteryLife: "Up to 70 days",
            buttons: "7 programmable buttons"
        }
    },
    {
        title: "Razer DeathAdder V3 Pro",
        description: "Ultra-lightweight wireless gaming mouse with 30K DPI optical sensor.",
        category: "mouse",
        brand: "Razer",
        image: "https://cdn.ut.in.th/media/catalog/product/cache/df78d4eb0ea5a9daa94c769f81472413/r/a/razer-gaming-mouse-deathadder-v3-pro.png",
        price: 499.99,
        discount: 12,
        additionalInformation: "Perfect for competitive gaming with ultra-lightweight design and high DPI sensor.",
        aboutThisItem: "The Razer DeathAdder V3 Pro features a 30K DPI optical sensor, ultra-lightweight design, and HyperSpeed wireless technology for lag-free gaming.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "30,000 DPI",
            batteryLife: "Up to 90 hours",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "SteelSeries Aerox 5 Wireless",
        description: "Ultra-lightweight wireless gaming mouse with customizable RGB lighting.",
        category: "mouse",
        brand: "SteelSeries",
        image: "https://tweakers.net/i/xZCOe9YmEX05MadxhZ403l0ILK0=/i/2005045428.png",
        price: 399.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with customizable RGB lighting.",
        aboutThisItem: "The SteelSeries Aerox 5 Wireless features an ultra-lightweight design, customizable RGB lighting, and Quantum 2.0 wireless technology for seamless connectivity.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "18,000 DPI",
            batteryLife: "Up to 180 hours",
            buttons: "9 programmable buttons"
        }
    },
    {
        title: "Corsair Dark Core RGB Pro",
        description: "High-performance wireless gaming mouse with customizable side grips.",
        category: "mouse",
        brand: "Corsair",
        image: "https://cwsmgmt.corsair.com/pdp/darkcore-rgb-pro/images/dark_core_pro_slipstream.png",
        price: 329.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable side grips.",
        aboutThisItem: "The Corsair Dark Core RGB Pro features a high-performance optical sensor, customizable side grips, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "16,000 DPI",
            batteryLife: "Up to 50 hours",
            buttons: "8 programmable buttons"
        }
    },
    {
        title: "Microsoft Surface Precision Mouse",
        description: "Ergonomic wireless mouse with smooth scrolling and customizable buttons.",
        category: "mouse",
        brand: "Microsoft",
        image: "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/MICROSOFT/FTW-00006/microsoft_precision_mouse/assets/mouse-kv-precision/mouse.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Surface Precision Mouse features smooth scrolling, ergonomic design, and customizable buttons for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            dpi: "3200 DPI",
            batteryLife: "Up to 3 months",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Logitech G Pro X Superlight",
        description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor.",
        category: "mouse",
        brand: "Logitech",
        image: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/gallery-1-pro-x-superlight-2-gaming-mouse-white.png",
        price: 699.99,
        discount: 15,
        additionalInformation: "Designed for esports professionals who need the fastest response times and precision.",
        aboutThisItem: "The Logitech G Pro X Superlight features a HERO 25K sensor, ultra-lightweight design, and ultra-low latency wireless technology.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "25,600 DPI",
            batteryLife: "Up to 70 hours",
            buttons: "5 programmable buttons"
        }
    },
    {
        title: "Razer Viper V2 Pro",
        description: "High-performance wireless gaming mouse with 30K DPI optical sensor.",
        category: "mouse",
        brand: "Razer",
        image: "https://dl.razerzone.com/src/6407/6047-1-en-v2.png",
        price: 749.99,
        discount: 10,
        additionalInformation: "Engineered for professional gamers with an ultra-lightweight frame and ultra-fast response times.",
        aboutThisItem: "The Razer Viper V2 Pro features a 30K DPI optical sensor, lightweight frame, and HyperPolling technology for the fastest gaming performance.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "30,000 DPI",
            batteryLife: "Up to 80 hours",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Mad Catz R.A.T. 8+",
        description: "Customizable modular gaming mouse with adjustable palm and side grips.",
        category: "mouse",
        brand: "Mad Catz",
        image: "https://th.bing.com/th/id/OIP.Y065cBbnMgsnkU_1iBQPegHaKE?rs=1&pid=ImgDetMain",
        price: 329.99,
        discount: 12,
        additionalInformation: "Perfect for gamers who want a customizable design for maximum comfort.",
        aboutThisItem: "The Mad Catz R.A.T. 8+ features adjustable palm and side grips, 16K DPI optical sensor, and customizable weight.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            dpi: "16,000 DPI",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Apple Magic Mouse 3",
        description: "Sleek and minimalistic wireless mouse with multi-touch gestures.",
        category: "mouse",
        brand: "Apple",
        image: "https://clipground.com/images/apple-mouse-png-2.png",
        price: 329.99,
        discount: 5,
        additionalInformation: "Designed for Mac users who prefer a seamless, gesture-based experience.",
        aboutThisItem: "The Apple Magic Mouse 3 features an ultra-smooth multi-touch surface, rechargeable battery, and a sleek aluminum design.",
        productDetails: {
            connectivity: ["Bluetooth", "Lightning"],
            batteryLife: "Up to 1 month",
            buttons: "Touch gestures"
        }
    },
    {
        title: "Razer Basilisk Ultimate",
        description: "Wireless gaming mouse with 20K DPI optical sensor and customizable scroll wheel resistance.",
        category: "mouse",
        brand: "Razer",
        image: "https://assets2.razerzone.com/pages/basilisk-v3-4D578898E8144Le8da21dde32b7a9f5f/basilisk.png",
        price: 799.99,
        discount: 10,
        additionalInformation: "Ideal for FPS and RPG gamers who need precise control and extra features.",
        aboutThisItem: "The Razer Basilisk Ultimate features a 20K DPI sensor, adjustable scroll wheel resistance, and Razer Chroma RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "20,000 DPI",
            batteryLife: "Up to 100 hours",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "HP Omen Photon",
        description: "Wireless gaming mouse with 16,000 DPI optical sensor and customizable buttons.",
        category: "mouse",
        brand: "HP",
        image: "https://www.omen.com/content/dam/sites/omen/worldwide/accessories/photon-wireless-mouse/T900-PHOTON-C22-IMAGE1-SMALL.png",
        price: 399.99,
        discount: 10,
        additionalInformation: "Ideal for gamers who need precision and speed with customizable features.",
        aboutThisItem: "The HP Omen Photon features a 16,000 DPI optical sensor, customizable buttons, and wireless charging support.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "16,000 DPI",
            batteryLife: "Up to 50 hours",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Logitech G903 Lightspeed",
        description: "High-performance wireless gaming mouse with HERO 25K sensor and PowerPlay compatibility.",
        category: "mouse",
        brand: "Logitech",
        image: "https://resource.logitechg.com/content/dam/gaming/en/products/g903/g903-herofeature-1-desktop.png",
        price: 499.99,
        discount: 12,
        additionalInformation: "Perfect for competitive gaming with ultra-fast response times and wireless charging support.",
        aboutThisItem: "The Logitech G903 Lightspeed features a HERO 25K sensor, ultra-low latency wireless technology, and PowerPlay compatibility for continuous charging.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "25,600 DPI",
            batteryLife: "Up to 140 hours",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Razer Naga Pro",
        description: "Modular wireless gaming mouse with interchangeable side plates and 20K DPI sensor.",
        category: "mouse",
        brand: "Razer",
        image: "https://www.pcmgames.com/wp-content/uploads/2020/10/Razer-Naga-Pro-Analisis-Producto-11.png",
        price: 599.99,
        discount: 15,
        additionalInformation: "Designed for MMO and FPS gamers who need customizable controls.",
        aboutThisItem: "The Razer Naga Pro features interchangeable side plates, a 20K DPI optical sensor, and HyperSpeed wireless technology for seamless connectivity.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "20,000 DPI",
            batteryLife: "Up to 150 hours",
            buttons: "19 programmable buttons"
        }
    },
    {
        title: "Corsair M65 RGB Ultra Wireless",
        description: "High-performance wireless gaming mouse with tunable weight system and 26K DPI sensor.",
        category: "mouse",
        brand: "Corsair",
        image: "https://assets.corsair.com/image/upload/akamai/pdp/m65-ultra/wireless/icon_reborn_wireless_3.png",
        price: 449.99,
        discount: 10,
        additionalInformation: "Perfect for FPS gamers who need precision and adjustable weight.",
        aboutThisItem: "The Corsair M65 RGB Ultra Wireless features a tunable weight system, 26K DPI optical sensor, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "26,000 DPI",
            batteryLife: "Up to 120 hours",
            buttons: "8 programmable buttons"
        }
    },
    {
        title: "Microsoft Arc Mouse",
        description: "Slim and portable wireless mouse with touch-sensitive scrolling.",
        category: "mouse",
        brand: "Microsoft",
        image: "https://www.pikpng.com/pngl/b/289-2892673_microsofts-arc-touch-mouse-gets-bluetooth-upgrade-arc.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need a sleek and portable design.",
        aboutThisItem: "The Microsoft Arc Mouse features a slim and foldable design, touch-sensitive scrolling, and Bluetooth connectivity.",
        productDetails: {
            connectivity: ["Bluetooth"],
            batteryLife: "Up to 6 months",
            buttons: "Touch gestures"
        }
    },
    {
        title: "Logitech G600 MMO Gaming Mouse",
        description: "Wired gaming mouse with 20 programmable buttons and RGB lighting.",
        category: "mouse",
        brand: "Logitech",
        image: "https://th.bing.com/th/id/R.b6c6765c3c638d2a74743a821b35df81?rik=ADJc%2boDCJgphfg&riu=http%3a%2f%2fgaming.logitech.com%2fassets%2f47823%2fg600-gaming-mouse-images.png&ehk=wBuVNNauT0qMV%2bnnrux50%2fcpRvcIuAexW%2f716mWI6FM%3d&risl=&pid=ImgRaw&r=0",
        price: 349.99,
        discount: 15,
        additionalInformation: "Designed for MMO gamers who need extensive customization options.",
        aboutThisItem: "The Logitech G600 MMO Gaming Mouse features 20 programmable buttons, RGB lighting, and a high-precision laser sensor.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            dpi: "8,200 DPI",
            buttons: "20 programmable buttons"
        }
    },
    {
        title: "Razer Viper Ultimate",
        description: "Ultra-lightweight wireless gaming mouse with 20K DPI optical sensor.",
        category: "mouse",
        brand: "Razer",
        image: "https://www.ahui3c.com/wp-content/uploads/2019/11/Viper_Ultimate_V03a.png",
        price: 699.99,
        discount: 10,
        additionalInformation: "Engineered for professional gamers with an ultra-lightweight frame and ultra-fast response times.",
        aboutThisItem: "The Razer Viper Ultimate features a 20K DPI optical sensor, lightweight frame, and HyperPolling technology for the fastest gaming performance.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "20,000 DPI",
            batteryLife: "Up to 80 hours",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Mad Catz R.A.T. 9",
        description: "Customizable modular gaming mouse with adjustable palm and side grips.",
        category: "mouse",
        brand: "Mad Catz",
        image: "https://product.hstatic.net/200000478869/product/e3a595e8-2ef7-4a1d-9405-dd168e0c3958_e7cd35335b474bc197f0493d28a94ee0.png",
        price: 329.99,
        discount: 12,
        additionalInformation: "Perfect for gamers who want a customizable design for maximum comfort.",
        aboutThisItem: "The Mad Catz R.A.T. 9 features adjustable palm and side grips, 16K DPI optical sensor, and customizable weight.",
        productDetails: {
            connectivity: ["Wireless", "USB"],
            dpi: "16,000 DPI",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Apple Magic Trackpad 2",
        description: "Multi-touch trackpad with force touch technology and sleek aluminum design.",
        category: "mouse",
        brand: "Apple",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1673525436/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/267817_svbbxv.png",
        price: 399.99,
        discount: 5,
        additionalInformation: "Designed for Mac users who prefer a seamless, gesture-based experience.",
        aboutThisItem: "The Apple Magic Trackpad 2 features an ultra-smooth multi-touch surface, force touch technology, and a sleek aluminum design.",
        productDetails: {
            connectivity: ["Bluetooth", "Lightning"],
            batteryLife: "Up to 1 month",
            buttons: "Touch gestures"
        }
    },
    {
        title: "Razer Basilisk V3 Pro",
        description: "Wireless gaming mouse with 30K DPI optical sensor and customizable scroll wheel resistance.",
        category: "mouse",
        brand: "Razer",
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_101245144/fee_786_587_png/RAZER-Basilisk-V3-Pro-Kablosuz-Mouse-Siyah.webp",
        price: 799.99,
        discount: 10,
        additionalInformation: "Ideal for FPS and RPG gamers who need precise control and extra features.",
        aboutThisItem: "The Razer Basilisk V3 Pro features a 30K DPI sensor, adjustable scroll wheel resistance, and Razer Chroma RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "30,000 DPI",
            batteryLife: "Up to 100 hours",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "HP Spectre Rechargeable Mouse 700",
        description: "Premium wireless mouse with ergonomic design and customizable buttons.",
        category: "mouse",
        brand: "HP",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06073169.png",
        price: 349.99,
        discount: 10,
        additionalInformation: "Ideal for professionals who need a sleek and rechargeable mouse.",
        aboutThisItem: "The HP Spectre Rechargeable Mouse 700 features an ergonomic design, customizable buttons, and a rechargeable battery for long-lasting use.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            dpi: "4000 DPI",
            batteryLife: "Up to 3 months",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Logitech MX Anywhere 3",
        description: "Compact wireless mouse with ultra-fast scrolling and ergonomic design.",
        category: "mouse",
        brand: "Logitech",
        image: "https://resource.logitech.com/w_900,h_900,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-anywhere-3-for-business/gallery/mx-anywhere-3-portable-business-mouse-gallery-pale-gray-4.png?v=1",
        price: 319.99,
        discount: 12,
        additionalInformation: "Perfect for professionals who need a portable and high-performance mouse.",
        aboutThisItem: "The Logitech MX Anywhere 3 features ultra-fast scrolling, ergonomic design, and customizable buttons for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            dpi: "4000 DPI",
            batteryLife: "Up to 70 days",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Razer Orochi V2",
        description: "Ultra-lightweight wireless gaming mouse with long battery life.",
        category: "mouse",
        brand: "Razer",
        image: "https://assets2.razerzone.com/images/pnx.assets/ca2f7dabb8b54e111b4272884d4663e1/custom-design-8.png",
        price: 399.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with long battery life.",
        aboutThisItem: "The Razer Orochi V2 features an ultra-lightweight design, long battery life, and HyperSpeed wireless technology for seamless connectivity.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "18,000 DPI",
            batteryLife: "Up to 950 hours",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Corsair Sabre RGB Pro Wireless",
        description: "High-performance wireless gaming mouse with ultra-fast response times.",
        category: "mouse",
        brand: "Corsair",
        image: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000112-EU-CG-Sabre-01.png",
        price: 429.99,
        discount: 10,
        additionalInformation: "Perfect for esports players who need ultra-fast response times.",
        aboutThisItem: "The Corsair Sabre RGB Pro Wireless features a high-performance optical sensor, ultra-fast response times, and Slipstream wireless technology.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "26,000 DPI",
            batteryLife: "Up to 90 hours",
            buttons: "7 programmable buttons"
        }
    },
    {
        title: "Microsoft Bluetooth Ergonomic Mouse",
        description: "Ergonomic wireless mouse with smooth scrolling and customizable buttons.",
        category: "mouse",
        brand: "Microsoft",
        image: "https://media.flixcar.com/f360cdn/Microsoft-1319754768-SCM_AFront_FY13-zoom.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Bluetooth Ergonomic Mouse features smooth scrolling, ergonomic design, and customizable buttons for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            dpi: "3200 DPI",
            batteryLife: "Up to 3 months",
            buttons: "6 programmable buttons"
        }
    },
    {
        title: "Logitech G502 X Plus",
        description: "High-performance wireless gaming mouse with LIGHTSPEED technology.",
        category: "mouse",
        brand: "Logitech",
        image: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png",
        price: 599.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need precision and speed with customizable features.",
        aboutThisItem: "The Logitech G502 X Plus features LIGHTSPEED wireless technology, HERO 25K sensor, and customizable RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "25,600 DPI",
            batteryLife: "Up to 140 hours",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Razer Atheris",
        description: "Compact wireless gaming mouse with long battery life and high DPI sensor.",
        category: "mouse",
        brand: "Razer",
        image: "https://delta-game.ru/wp-content/uploads/2018/05/Razer-Atheris2.png",
        price: 349.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need a compact and high-performance mouse.",
        aboutThisItem: "The Razer Atheris features a high DPI optical sensor, long battery life, and dual wireless connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "7,200 DPI",
            batteryLife: "Up to 350 hours",
            buttons: "5 programmable buttons"
        }
    },
    {
        title: "Mad Catz R.A.T. 4+",
        description: "Customizable modular gaming mouse with adjustable palm and side grips.",
        category: "mouse",
        brand: "Mad Catz",
        image: "https://product.hstatic.net/200000478869/product/fb03abc1-2cff-4e52-845a-613f8f995f7b_8fb4812a91d7463fa5b78db24a673e6b_1024x1024.png",
        price: 329.99,
        discount: 12,
        additionalInformation: "Perfect for gamers who want a customizable design for maximum comfort.",
        aboutThisItem: "The Mad Catz R.A.T. 4+ features adjustable palm and side grips, 16K DPI optical sensor, and customizable weight.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            dpi: "16,000 DPI",
            buttons: "11 programmable buttons"
        }
    },
    {
        title: "Apple Magic Mouse 3",
        description: "Sleek and minimalistic wireless mouse with multi-touch gestures.",
        category: "mouse",
        brand: "Apple",
        image: "https://th.bing.com/th/id/R.f4673060bf2f6dc6ea60da05013cc382?rik=%2fg%2bTGyBKvIFYvQ&riu=http%3a%2f%2fimg.roomeon.com%2fimg%2fobject%2fapple-magic-mouse-appliances_7df91089ab_xxl.png&ehk=oUprbhNqhQHNMyUts%2flcx%2fJXKSpHOhZyRBMLzPkIXzU%3d&risl=&pid=ImgRaw&r=0",
        price: 329.99,
        discount: 5,
        additionalInformation: "Designed for Mac users who prefer a seamless, gesture-based experience.",
        aboutThisItem: "The Apple Magic Mouse 3 features an ultra-smooth multi-touch surface, rechargeable battery, and a sleek aluminum design.",
        productDetails: {
            connectivity: ["Bluetooth", "Lightning"],
            batteryLife: "Up to 1 month",
            buttons: "Touch gestures"
        }
    },
    {
        title: "Razer Basilisk V3 Pro",
        description: "Wireless gaming mouse with 30K DPI optical sensor and customizable scroll wheel resistance.",
        category: "mouse",
        brand: "Razer",
        image: "https://lmt-web.mstatic.lv/eshop/8148/Razer-Basilisk-V3.png",
        price: 799.99,
        discount: 10,
        additionalInformation: "Ideal for FPS and RPG gamers who need precise control and extra features.",
        aboutThisItem: "The Razer Basilisk V3 Pro features a 30K DPI sensor, adjustable scroll wheel resistance, and Razer Chroma RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            dpi: "30,000 DPI",
            batteryLife: "Up to 100 hours",
            buttons: "11 programmable buttons"
        }
    }
]
module.exports={data:mouse};