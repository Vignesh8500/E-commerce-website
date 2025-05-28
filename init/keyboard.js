const keyboard = [
    {
        title: "Logitech MX Keys",
        description: "Advanced wireless keyboard with backlit keys and ergonomic design.",
        category: "keyboards",
        brand: "Logitech",
        image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mx-keys-s-combo/product-gallery/graphite/mx-keys-s-combo-keyboard-front-view-graphite-us.png?v=1",
        price: 349.99,
        discount: 10,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Logitech MX Keys features backlit keys, ergonomic design, and customizable shortcuts for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            keySwitchType: "Scissor",
            batteryLife: "Up to 10 days",
            backlighting: "Yes"
        }
    },
    {
        title: "Razer Huntsman V2",
        description: "High-performance gaming keyboard with optical switches and RGB lighting.",
        category: "keyboards",
        brand: "Razer",
        image: "https://www.pcmgames.com/wp-content/uploads/2021/02/Razer-Huntsman-V2-Analog-Analisis-Producto-8.png",
        price: 499.99,
        discount: 12,
        additionalInformation: "Perfect for competitive gaming with ultra-fast optical switches and customizable RGB lighting.",
        aboutThisItem: "The Razer Huntsman V2 features optical switches, customizable RGB lighting, and a detachable wrist rest for comfort.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Optical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "SteelSeries Apex Pro",
        description: "Mechanical gaming keyboard with adjustable actuation switches and OLED display.",
        category: "keyboards",
        brand: "SteelSeries",
        image: "https://media.steelseriescdn.com/thumbs/catalog/items/64865/2e6a305c2d184e37901724681b50552d.png.1400x1120_q100_crop-fit_optimize.png",
        price: 399.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with adjustable actuation switches.",
        aboutThisItem: "The SteelSeries Apex Pro features adjustable actuation switches, an OLED display, and customizable RGB lighting.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Corsair K100 RGB",
        description: "Premium mechanical gaming keyboard with customizable macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Corsair",
        image: "https://res.cloudinary.com/dvv9fvblr/image/upload/v1601565165/ak9wb1dxdola9bzra8r8.png",
        price: 599.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable macro keys.",
        aboutThisItem: "The Corsair K100 RGB features mechanical switches, customizable macro keys, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Microsoft Surface Keyboard",
        description: "Slim and ergonomic wireless keyboard with quiet keys and Bluetooth connectivity.",
        category: "keyboards",
        brand: "Microsoft",
        image: "https://www.seekpng.com/png/full/751-7519178_microsoft-surface-hub-keyboard.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Surface Keyboard features quiet keys, ergonomic design, and Bluetooth connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Bluetooth"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 12 months",
            backlighting: "No"
        }
    },
    {
        title: "HP Omen Sequencer",
        description: "Mechanical gaming keyboard with optical switches and customizable RGB lighting.",
        category: "keyboards",
        brand: "HP",
        image: "https://www.omen.com/content/dam/sites/omen/worldwide/accessories/keyboard/T900-C22-IMAGE2-SMALL.png",
        price: 399.99,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-fast optical switches and customizable lighting.",
        aboutThisItem: "The HP Omen Sequencer features optical-mechanical switches, customizable RGB lighting, and dedicated macro keys.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Optical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Logitech G915 TKL",
        description: "Wireless mechanical gaming keyboard with low-profile switches and LIGHTSPEED technology.",
        category: "keyboards",
        brand: "Logitech",
        image: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery/deu-g915-tkl-carbon-gallery-topdown.png",
        price: 499.99,
        discount: 12,
        additionalInformation: "Perfect for gamers who need a compact and high-performance wireless keyboard.",
        aboutThisItem: "The Logitech G915 TKL features low-profile mechanical switches, LIGHTSPEED wireless technology, and customizable RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            keySwitchType: "Mechanical",
            batteryLife: "Up to 40 hours",
            backlighting: "RGB"
        }
    },
    {
        title: "Razer BlackWidow V4 Pro",
        description: "High-performance mechanical gaming keyboard with dedicated macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Razer",
        image: "https://static-geektopia.com/storage/geek/products/razer/blackwidow/blackwidow__2019__render_01_.png",
        price: 599.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with dedicated macro keys.",
        aboutThisItem: "The Razer BlackWidow V4 Pro features mechanical switches, customizable RGB lighting, and dedicated macro keys for enhanced gameplay.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Corsair K70 RGB Pro",
        description: "Premium mechanical gaming keyboard with customizable macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Corsair",
        image: "https://res.cloudinary.com/corsair-pwa/image/upload/f_auto,q_auto/v1/akamai/pdp/k70-mini-wireless/K70_PRO_MINI_WIRELESS_PBT_03.png",
        price: 449.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable macro keys.",
        aboutThisItem: "The Corsair K70 RGB Pro features mechanical switches, customizable macro keys, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Microsoft Ergonomic Keyboard",
        description: "Ergonomic wired keyboard with split key layout and cushioned palm rest.",
        category: "keyboards",
        brand: "Microsoft",
        image: "https://wallpapers.com/images/hd/microsoft-ergonomic-keyboard-cis9r1o655asf8qa.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Ergonomic Keyboard features a split key layout, cushioned palm rest, and wired connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Membrane",
            batteryLife: "N/A",
            backlighting: "No"
        }
    },
    {
        title: "HP Omen Encoder",
        description: "Mechanical gaming keyboard with Cherry MX switches and customizable RGB lighting.",
        category: "keyboards",
        brand: "HP",
        image: "https://ssr.col.movistar.es/api/v3/get-pic/content/dam/movistar/estaticos/imagenes/terminales-moviles/ficha-445/hp-omen-teclado-encoder-03.png?oe=png&hash=lyj5shi2",
        price: 399.99,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-fast Cherry MX switches and customizable lighting.",
        aboutThisItem: "The HP Omen Encoder features Cherry MX mechanical switches, customizable RGB lighting, and dedicated macro keys.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Cherry MX",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Logitech G915 Lightspeed",
        description: "Wireless mechanical gaming keyboard with low-profile switches and LIGHTSPEED technology.",
        category: "keyboards",
        brand: "Logitech",
        image: "https://resource.logitechg.com/w_1800,c_limit,f_auto,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/products/g915-tkl/g915-white-update/g915-tkl-intro-desktop-w.png?v=1",
        price: 499.99,
        discount: 12,
        additionalInformation: "Perfect for gamers who need a compact and high-performance wireless keyboard.",
        aboutThisItem: "The Logitech G915 Lightspeed features low-profile mechanical switches, LIGHTSPEED wireless technology, and customizable RGB lighting.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            keySwitchType: "Mechanical",
            batteryLife: "Up to 40 hours",
            backlighting: "RGB"
        }
    },
    {
        title: "Razer Cynosa V2",
        description: "High-performance membrane gaming keyboard with customizable RGB lighting.",
        category: "keyboards",
        brand: "Razer",
        image: "https://www.nemesisec.gg/wp-content/uploads/2021/09/TECLADO-CYNOSA-V2-v2.png",
        price: 299.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with customizable RGB lighting.",
        aboutThisItem: "The Razer Cynosa V2 features membrane switches, customizable RGB lighting, and dedicated media controls.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Membrane",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Corsair K95 RGB Platinum",
        description: "Premium mechanical gaming keyboard with customizable macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Corsair",
        image: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9127014-NA-K95-Platinum-001.png",
        price: 599.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable macro keys.",
        aboutThisItem: "The Corsair K95 RGB Platinum features mechanical switches, customizable macro keys, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Microsoft Sculpt Ergonomic Keyboard",
        description: "Ergonomic wireless keyboard with split key layout and cushioned palm rest.",
        category: "keyboards",
        brand: "Microsoft",
        image: "https://media.jacob.services/images/87/b0/ba/27/87b0ba2781c2e5faa4aa96ba7656a445.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Sculpt Ergonomic Keyboard features a split key layout, cushioned palm rest, and wireless connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Wireless", "USB"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 12 months",
            backlighting: "No"
        }
    },
    {
        title: "Dell Alienware AW510K",
        description: "Mechanical gaming keyboard with Cherry MX switches and customizable RGB lighting.",
        category: "keyboards",
        brand: "Dell",
        image: "https://media.spdigital.cl/thumbnails/products/77mes1_k_42052d50_thumbnail_4096.png",
        price: 399.99,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-fast Cherry MX switches and customizable lighting.",
        aboutThisItem: "The Dell Alienware AW510K features Cherry MX mechanical switches, customizable RGB lighting, and dedicated macro keys.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Cherry MX",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Logitech K780 Multi-Device",
        description: "Wireless keyboard with multi-device connectivity and ergonomic design.",
        category: "keyboards",
        brand: "Logitech",
        image: "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k780/gallery/k780-gallery-speckled-uk-wide-1.png",
        price: 349.99,
        discount: 12,
        additionalInformation: "Perfect for professionals who need a compact and high-performance wireless keyboard.",
        aboutThisItem: "The Logitech K780 Multi-Device features ergonomic design, multi-device connectivity, and quiet keys for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 24 months",
            backlighting: "No"
        }
    },
    {
        title: "Razer Turret for Xbox",
        description: "Wireless gaming keyboard and mouse combo designed for Xbox gaming.",
        category: "keyboards",
        brand: "Razer",
        image: "https://www.pngkit.com/png/full/786-7860451_the-turret-today-is-just-as-what-we.png",
        price: 499.99,
        discount: 15,
        additionalInformation: "Designed for console gamers who need speed and precision with customizable RGB lighting.",
        aboutThisItem: "The Razer Turret for Xbox features mechanical switches, customizable RGB lighting, and a built-in mouse pad for seamless gaming.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            keySwitchType: "Mechanical",
            batteryLife: "Up to 40 hours",
            backlighting: "RGB"
        }
    },
    {
        title: "Corsair K60 RGB Pro",
        description: "Mechanical gaming keyboard with customizable macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Corsair",
        image: "https://cwsmgmt.corsair.com/pdp/keyboards/k60-pro-tkl-rgb/k60-icue.png",
        price: 299.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable macro keys.",
        aboutThisItem: "The Corsair K60 RGB Pro features mechanical switches, customizable macro keys, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Microsoft Designer Compact Keyboard",
        description: "Slim and ergonomic wireless keyboard with quiet keys and Bluetooth connectivity.",
        category: "keyboards",
        brand: "Microsoft",
        image: "https://purepng.com/public/uploads/large/purepng.com-keyboard-and-mouseelectronicskeyboardmouse-9415246721386yb6q.png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and comfort for extended use.",
        aboutThisItem: "The Microsoft Designer Compact Keyboard features quiet keys, ergonomic design, and Bluetooth connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Bluetooth"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 12 months",
            backlighting: "No"
        }
    },
    {
        title: "Keychron K8 Wireless",
        description: "Wireless mechanical keyboard with hot-swappable switches and RGB backlighting.",
        category: "keyboards",
        brand: "Keychron",
        image: "https://cdn.shopify.com/s/files/1/0328/6034/0364/t/4/assets/k8pro-1658204658259.png?v=1658204663",
        price: 349.99,
        discount: 10,
        additionalInformation: "Ideal for professionals and gamers who need a compact and versatile keyboard.",
        aboutThisItem: "The Keychron K8 features hot-swappable mechanical switches, wireless connectivity, and customizable RGB backlighting.",
        productDetails: {
            connectivity: ["Bluetooth", "USB-C"],
            keySwitchType: "Mechanical",
            batteryLife: "Up to 240 hours",
            backlighting: "RGB"
        }
    },
    {
        title: "Logitech K380 Multi-Device",
        description: "Compact wireless keyboard with multi-device connectivity and quiet keys.",
        category: "keyboards",
        brand: "Logitech",
        image: "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/multi-keyboard-k380/gallery/k380-sand-gallery-1-us.png",
        price: 319.99,
        discount: 12,
        additionalInformation: "Perfect for professionals who need a portable and high-performance wireless keyboard.",
        aboutThisItem: "The Logitech K380 Multi-Device features ergonomic design, multi-device connectivity, and quiet keys for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 24 months",
            backlighting: "No"
        }
    },
    {
        title: "Razer Pro Type Ultra",
        description: "Wireless mechanical keyboard with silent switches and ergonomic wrist rest.",
        category: "keyboards",
        brand: "Razer",
        image: "https://img.terabyteshop.com.br/archive/1264690020/HTML%20Teclado%20Mec%C3%A2nico%20Gamer%20Razer%20Pro%20Type%20Ultra%20-%201.png",
        price: 499.99,
        discount: 15,
        additionalInformation: "Designed for professionals who need speed and precision with silent mechanical switches.",
        aboutThisItem: "The Razer Pro Type Ultra features silent mechanical switches, ergonomic wrist rest, and wireless connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Wireless", "USB-C"],
            keySwitchType: "Mechanical",
            batteryLife: "Up to 40 hours",
            backlighting: "White LED"
        }
    },
    {
        title: "Corsair K65 RGB Mini",
        description: "Compact mechanical gaming keyboard with customizable macro keys and RGB lighting.",
        category: "keyboards",
        brand: "Corsair",
        image: "https://cwsmgmt.corsair.com/pdp/k65-rgb-mini/assets/images/Keyboard-Layout.png",
        price: 299.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and comfort with customizable macro keys.",
        aboutThisItem: "The Corsair K65 RGB Mini features mechanical switches, customizable macro keys, and Slipstream wireless technology for ultra-fast response times.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Microsoft Modern Keyboard",
        description: "Slim and ergonomic wireless keyboard with fingerprint reader and Bluetooth connectivity.",
        category: "keyboards",
        brand: "Microsoft",
        image: "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76993107/fee_786_587_png",
        price: 319.99,
        discount: 8,
        additionalInformation: "Ideal for professionals who need precision and security with a built-in fingerprint reader.",
        aboutThisItem: "The Microsoft Modern Keyboard features quiet keys, ergonomic design, and Bluetooth connectivity for seamless performance.",
        productDetails: {
            connectivity: ["Bluetooth"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 12 months",
            backlighting: "No"
        }
    },
    {
        title: "Asus ROG Strix Scope RX",
        description: "Mechanical gaming keyboard with optical switches and customizable RGB lighting.",
        category: "keyboards",
        brand: "Asus",
        image: "https://dlcdnwebimgs.asus.com/gain/6FF3C6FB-B36D-4920-8172-83909ED8CFA7/w1000/h732",
        price: 399.99,
        discount: 10,
        additionalInformation: "Ideal for gamers who need ultra-fast optical switches and customizable lighting.",
        aboutThisItem: "The Asus ROG Strix Scope RX features optical-mechanical switches, customizable RGB lighting, and dedicated macro keys.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Optical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Dell KM717 Premier Wireless",
        description: "Wireless keyboard and mouse combo with multi-device connectivity.",
        category: "keyboards",
        brand: "Dell",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/kb740/global-spi/ng/keyboard-kb740-gray-campaign-hero-504x350-ng.psd?hei=402&qtl=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto",
        price: 349.99,
        discount: 12,
        additionalInformation: "Perfect for professionals who need a sleek and high-performance wireless keyboard and mouse combo.",
        aboutThisItem: "The Dell KM717 features ergonomic design, multi-device connectivity, and quiet keys for enhanced productivity.",
        productDetails: {
            connectivity: ["Bluetooth", "USB"],
            keySwitchType: "Membrane",
            batteryLife: "Up to 24 months",
            backlighting: "No"
        }
    },
    {
        title: "HyperX Alloy Origins 60",
        description: "Compact mechanical gaming keyboard with customizable RGB lighting.",
        category: "keyboards",
        brand: "HyperX",
        image: "https://scglobal.cl/1824-large_default/teclado-mecanico-hyperx-alloy-switch-aqua-rgb-56r64aa.jpg",
        price: 299.99,
        discount: 15,
        additionalInformation: "Designed for gamers who need speed and precision with customizable RGB lighting.",
        aboutThisItem: "The HyperX Alloy Origins 60 features mechanical switches, customizable RGB lighting, and a compact design for portability.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Redragon K552 Kumara",
        description: "Budget-friendly mechanical gaming keyboard with anti-ghosting and RGB lighting.",
        category: "keyboards",
        brand: "Redragon",
        image: "https://th.bing.com/th/id/R.8048635fa2891ccbe0141dc3e5356af7?rik=RwLcVzfui539CQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0012%2f4957%2f4961%2fproducts%2fredragonkumarak552rgb_1200x1200.png%3fv%3d1620466118&ehk=YQqaftfnVQeWoPEAGwPuM1HXgKJpXlIC7AdfySp2vEU%3d&risl=&pid=ImgRaw&r=0",
        price: 299.99,
        discount: 10,
        additionalInformation: "Perfect for gamers who need precision and durability at an affordable price.",
        aboutThisItem: "The Redragon K552 Kumara features mechanical switches, anti-ghosting technology, and customizable RGB lighting.",
        productDetails: {
            connectivity: ["Wired", "USB"],
            keySwitchType: "Mechanical",
            batteryLife: "N/A",
            backlighting: "RGB"
        }
    },
    {
        title: "Apple Magic Keyboard with Touch ID",
        description: "Wireless keyboard with Touch ID and sleek aluminum design.",
        category: "keyboards",
        brand: "Apple",
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/accessories/2023-magic-trackpad-magic-mouse-magic-keyboard-with-touch-id-accessories-hero.png",
        price: 399.99,
        discount: 5,
        additionalInformation: "Designed for Mac users who prefer a seamless, gesture-based experience.",
        aboutThisItem: "The Apple Magic Keyboard with Touch ID features an ultra-smooth multi-touch surface, rechargeable battery, and a sleek aluminum design.",
        productDetails: {
            connectivity: ["Bluetooth", "Lightning"],
            batteryLife: "Up to 1 month",
            backlighting: "No"
        }
    }

]
module.exports = {data: keyboard}