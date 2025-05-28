const monitors = [
        {
            title: "Dell UltraSharp U2723QE",
            description: "27-inch 4K UHD IPS monitor with stunning color accuracy and USB-C connectivity.",
            category: "monitors",
            brand: "Dell",
            image: "https://www.pngarts.com/files/10/Dell-Ultrasharp-Monitor-Widescreen-Transparent-Image.png",
            price: 599.99,
            discount: 10,
            additionalInformation: "Ideal for professionals who require accurate colors and crisp resolution for creative work.",
            aboutThisItem: "Equipped with IPS technology, the Dell UltraSharp U2723QE offers exceptional color fidelity and wide viewing angles. USB-C connectivity ensures easy device integration.",
            productDetails: {
                screenSize: "27 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "60Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "LG 32UN500-W",
            description: "32-inch 4K UHD HDR10 monitor with FreeSync, perfect for gaming and multimedia.",
            category: "monitors",
            brand: "LG",
            image: "https://abzarjo.com/wp-content/uploads/2023/02/231424.png",
            price: 349.99,
            discount: 5,
            additionalInformation: "Great for gamers and content creators, providing enhanced contrast and fluid visuals.",
            aboutThisItem: "The LG 32UN500-W combines stunning 4K resolution with HDR10 support for vibrant colors and lifelike details. AMD FreeSync minimizes screen tearing for a smooth gaming experience.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "VA",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "DisplayPort", "Headphone jack"]
            }
        },
        {
            title: "ASUS ROG Swift PG32UQX",
            description: "32-inch 4K HDR gaming monitor with 144Hz refresh rate and G-Sync support.",
            category: "monitors",
            brand: "Asus",
            image: "https://dlcdnwebimgs.asus.com/gain/A00C8F15-E127-4AB4-A5F3-B22FF0CB6BC9/w717/h525",
            price: 1999.99,
            discount: 15,
            additionalInformation: "Designed for competitive gaming with ultra-fast refresh rates and HDR visuals.",
            aboutThisItem: "With 144Hz refresh rate and NVIDIA G-Sync support, the ASUS ROG Swift PG32UQX delivers ultra-smooth, immersive gameplay. HDR technology enhances contrast and color performance.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "BenQ EX3501R",
            description: "35-inch ultrawide curved monitor with HDR and 100Hz refresh rate, ideal for productivity and gaming.",
            category: "monitors",
            brand: "BenQ",
            image: "https://tweakers.net/i/nUw0sFonExqPPRUxzBdQcP0tQd0=/i/2003553614.png",
            price: 599.99,
            discount: 12,
            additionalInformation: "Perfect for multitasking and immersive gaming with its ultrawide screen.",
            aboutThisItem: "The BenQ EX3501R features an ultrawide curved screen for an enhanced viewing experience, HDR support for vibrant visuals, and a 100Hz refresh rate for smooth performance.",
            productDetails: {
                screenSize: "35 inches",
                resolution: "3440 x 1440 UWQHD",
                panelType: "VA",
                refreshRate: "100Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "Samsung Odyssey G7",
            description: "32-inch QHD curved gaming monitor with 240Hz refresh rate and Quantum Dot technology.",
            category: "monitors",
            brand: "Samsung",
            image: "https://images.samsung.com/is/image/samsung/latin-odyssey-g7-g75t-lc32g75tqslxzp-frontlightoffblack-310957544?$650_519_PNG$",
            price: 799.99,
            discount: 20,
            additionalInformation: "Built for hardcore gamers who demand speed and precision in their visuals.",
            aboutThisItem: "The Samsung Odyssey G7 offers a blazing-fast 240Hz refresh rate and a 1000R curved screen for immersive gaming. Quantum Dot technology enhances color accuracy and brightness.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "QHD (2560 x 1440)",
                panelType: "VA",
                refreshRate: "240Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Acer Predator X27",
            description: "27-inch 4K UHD gaming monitor with HDR and 144Hz refresh rate.",
            category: "monitors",
            brand: "Acer",
            image: "https://www.gaincity.com/media/catalog/product/cache/6c6c50d4c233a553cee4f0d7353c6a74/p/r/predator-monitor-x-x27u-logo-wallpaper-01.png",
            price: 1299.99,
            discount: 10,
            additionalInformation: "Designed for high-performance gaming with stunning visuals.",
            aboutThisItem: "The Acer Predator X27 features HDR support, a high refresh rate, and G-Sync compatibility for smooth gameplay.",
            productDetails: {
                screenSize: "27 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "ViewSonic Elite XG270",
            description: "27-inch Full HD gaming monitor with 240Hz refresh rate and IPS panel.",
            category: "monitors",
            brand: "ViewSonic",
            image: "https://www.touchpoint.com.au/wp-content/uploads/2021/01/xg270q-510x425.png",
            price: 499.99,
            discount: 15,
            additionalInformation: "Perfect for esports players who need ultra-fast response times.",
            aboutThisItem: "The ViewSonic Elite XG270 offers a blazing-fast 240Hz refresh rate and IPS technology for vibrant colors.",
            productDetails: {
                screenSize: "27 inches",
                resolution: "Full HD (1920 x 1080)",
                panelType: "IPS",
                refreshRate: "240Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Gigabyte M32U",
            description: "32-inch 4K UHD gaming monitor with 144Hz refresh rate and FreeSync Premium.",
            category: "monitors",
            brand: "Gigabyte",
            image: "https://www.tecmau.com/wp-content/uploads/2023/04/ASCD-1.png",
            price: 799.99,
            discount: 12,
            additionalInformation: "Ideal for gamers and professionals who need high resolution and speed.",
            aboutThisItem: "The Gigabyte M32U delivers stunning 4K visuals with a high refresh rate and FreeSync Premium for smooth performance.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB-C"]
            }
        },
        {
            title: "MSI Optix MAG342CQR",
            description: "34-inch ultrawide curved gaming monitor with 144Hz refresh rate and HDR.",
            category: "monitors",
            brand: "MSI",
            image: "https://storage-asset.msi.com/global/picture/image/feature/monitor/MAG342CQRV/342cqrv-pip-pbp.png",
            price: 599.99,
            discount: 10,
            additionalInformation: "Designed for immersive gaming with an ultrawide curved display.",
            aboutThisItem: "The MSI Optix MAG342CQR features a 144Hz refresh rate, HDR support, and a curved screen for an enhanced gaming experience.",
            productDetails: {
                screenSize: "34 inches",
                resolution: "3440 x 1440 UWQHD",
                panelType: "VA",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Samsung Smart Monitor M8",
            description: "32-inch 4K UHD smart monitor with built-in apps and wireless connectivity.",
            category: "monitors",
            brand: "Samsung",
            image: "https://images.samsung.com/is/image/samsung/p6pim/ch/ls32cm80guuxen/gallery/ch-smart-m8-32m801c32m80bc32m80gc32m80pc-ls32cm80guuxen-thumb-536028561",
            price: 699.99,
            discount: 8,
            additionalInformation: "Perfect for productivity and entertainment with built-in apps.",
            aboutThisItem: "The Samsung Smart Monitor M8 offers a 4K UHD resolution, built-in apps, and wireless connectivity for a seamless experience.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "VA",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "USB-C", "Wi-Fi"]
            }
        },
        {
            title: "HP Omen X 27",
            description: "27-inch QHD gaming monitor with 240Hz refresh rate and 1ms response time.",
            category: "monitors",
            brand: "HP",
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05447860.png",
            price: 799.99,
            discount: 10,
            additionalInformation: "Designed for competitive gaming with ultra-fast response times.",
            aboutThisItem: "The HP Omen X 27 offers a high refresh rate and low response time for smooth, lag-free gaming.",
            productDetails: {
                screenSize: "27 inches",
                resolution: "QHD (2560 x 1440)",
                panelType: "TN",
                refreshRate: "240Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "LG UltraGear 34GN850-B",
            description: "34-inch ultrawide gaming monitor with 144Hz refresh rate and Nano IPS technology.",
            category: "monitors",
            brand: "LG",
            image: "https://cdn.digitalpuls.de/media/image/fc/fa/4c/2041689-01.png",
            price: 1299.99,
            discount: 12,
            additionalInformation: "Perfect for immersive gaming with ultrawide screen and fast refresh rate.",
            aboutThisItem: "The LG UltraGear 34GN850-B features Nano IPS technology for vibrant colors and a 144Hz refresh rate for smooth gameplay.",
            productDetails: {
                screenSize: "34 inches",
                resolution: "3440 x 1440 UWQHD",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "BenQ PD3220U",
            description: "32-inch 4K UHD designer monitor with HDR10 and 95% DCI-P3 color accuracy.",
            category: "monitors",
            brand: "BenQ",
            image: "https://tweakers.net/i/bMCHgLuoAHU0Q1XUbdxUycHZyCM=/i/2003565852.png",
            price: 999.99,
            discount: 8,
            additionalInformation: "Ideal for creative professionals who need precise color accuracy.",
            aboutThisItem: "The BenQ PD3220U offers HDR10 support and high color accuracy for professional design work.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "DisplayPort", "USB-C"]
            }
        },
        {
            title: "ASUS TUF Gaming VG27AQ",
            description: "27-inch QHD gaming monitor with 165Hz refresh rate and Adaptive Sync.",
            category: "monitors",
            brand: "ASUS",
            image: "https://shop.imel.ba/wp-content/uploads/2023/04/90LM0500-B03370_230324030354073-1.png",
            price: 549.99,
            discount: 10,
            additionalInformation: "Built for gamers who need high refresh rates and smooth visuals.",
            aboutThisItem: "The ASUS TUF Gaming VG27AQ features Adaptive Sync technology and a 165Hz refresh rate for fluid gameplay.",
            productDetails: {
                screenSize: "27 inches",
                resolution: "QHD (2560 x 1440)",
                panelType: "IPS",
                refreshRate: "165Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Samsung Odyssey Neo G9",
            description: "49-inch ultrawide curved gaming monitor with Quantum Mini LED and 240Hz refresh rate.",
            category: "monitors",
            brand: "Samsung",
            image: "https://images.samsung.com/is/image/samsung/p6pim/uk/ls49cg934suxxu/gallery/uk-odyssey-oled-g9-g93sc-ls49cg934suxxu-537664491?$650_519_PNG$",
            price: 2499.99,
            discount: 15,
            additionalInformation: "Designed for immersive gaming with ultrawide curved display and high refresh rate.",
            aboutThisItem: "The Samsung Odyssey Neo G9 features Quantum Mini LED technology and a 240Hz refresh rate for stunning visuals.",
            productDetails: {
                screenSize: "49 inches",
                resolution: "5120 x 1440 DQHD",
                panelType: "VA",
                refreshRate: "240Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Acer Predator X38",
            description: "37.5-inch ultrawide curved gaming monitor with 175Hz refresh rate and G-Sync Ultimate.",
            category: "monitors",
            brand: "Acer",
            image: "https://images.tech.co/wp-content/uploads/2020/01/06104928/acer-Predator-X38-640x533.png",
            price: 1799.99,
            discount: 10,
            additionalInformation: "Designed for immersive gaming with ultrawide curved display and high refresh rate.",
            aboutThisItem: "The Acer Predator X38 features a 175Hz refresh rate, G-Sync Ultimate, and a curved screen for an enhanced gaming experience.",
            productDetails: {
                screenSize: "37.5 inches",
                resolution: "UWQHD+ (3840 x 1600)",
                panelType: "IPS",
                refreshRate: "175Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "ViewSonic Elite XG321UG",
            description: "32-inch 4K UHD gaming monitor with 144Hz refresh rate and Mini LED technology.",
            category: "monitors",
            brand: "ViewSonic",
            image: "https://www.viewsonic.com/vsAssetFile/bd/img/lcd/elite-rgb.png",
            price: 1499.99,
            discount: 12,
            additionalInformation: "Perfect for high-end gaming with Mini LED technology and ultra-fast refresh rate.",
            aboutThisItem: "The ViewSonic Elite XG321UG features Mini LED backlighting, a 144Hz refresh rate, and G-Sync Ultimate for smooth gameplay.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Gigabyte AORUS FI32U",
            description: "32-inch 4K UHD gaming monitor with 144Hz refresh rate and FreeSync Premium Pro.",
            category: "monitors",
            brand: "Gigabyte",
            image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1065/img/animation/15.png",
            price: 1299.99,
            discount: 15,
            additionalInformation: "Ideal for gamers who need high resolution and speed.",
            aboutThisItem: "The Gigabyte AORUS FI32U delivers stunning 4K visuals with a high refresh rate and FreeSync Premium Pro for smooth performance.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["HDMI", "DisplayPort", "USB-C"]
            }
        },
        {
            title: "MSI MEG 342C QD-OLED",
            description: "34-inch ultrawide curved gaming monitor with QD-OLED technology and 175Hz refresh rate.",
            category: "monitors",
            brand: "MSI",
            image: "https://storage-asset.msi.com/event/2023/CND/diablo_4/images/kv-pd.png",
            price: 1599.99,
            discount: 10,
            additionalInformation: "Designed for immersive gaming with ultrawide curved display and QD-OLED technology.",
            aboutThisItem: "The MSI MEG 342C QD-OLED features a 175Hz refresh rate, QD-OLED panel, and a curved screen for an enhanced gaming experience.",
            productDetails: {
                screenSize: "34 inches",
                resolution: "UWQHD (3440 x 1440)",
                panelType: "QD-OLED",
                refreshRate: "175Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Samsung Smart Monitor M80B",
            description: "32-inch 4K UHD smart monitor with built-in apps and wireless connectivity.",
            category: "monitors",
            brand: "Samsung",
            image: "https://th.bing.com/th/id/OIP.ZEvQbGo4IxbagBxCZkPu6wHaHa?rs=1&pid=ImgDetMain",
            price: 899.99,
            discount: 8,
            additionalInformation: "Perfect for productivity and entertainment with built-in apps.",
            aboutThisItem: "The Samsung Smart Monitor M80B offers a 4K UHD resolution, built-in apps, and wireless connectivity for a seamless experience.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "VA",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "USB-C", "Wi-Fi"]
            }
        },
        {
            title: "LG 32UN880-B UltraFine Ergo",
            description: "32-inch 4K UHD IPS monitor with ergonomic stand and HDR10 support.",
            category: "monitors",
            brand: "LG",
            image: "https://www.unison.com.ph/wp-content/uploads/2023/02/27-UltraFine-UHD-IPS-USB-C-HDR-Monitor-with-Ergo-Stand-2048x1288.png",
            price: 799.99,
            discount: 10,
            additionalInformation: "Ideal for professionals who need an adjustable ergonomic stand and high-resolution display.",
            aboutThisItem: "The LG UltraFine Ergo features a 4K UHD resolution, HDR10 support, and an ergonomic stand for flexible positioning.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "60Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "Dell Alienware AW3423DW",
            description: "34-inch QD-OLED ultrawide gaming monitor with 175Hz refresh rate and G-Sync Ultimate.",
            category: "monitors",
            brand: "Dell",
            image: "https://gadgetguy-assets.s3.ap-southeast-2.amazonaws.com/wordpress/wp-content/uploads/2022/05/26175957/Alienware-34-Curved-QD-OLED-Monitor-AW3423DW_duo-lf-back-1136x744.png",
            price: 1299.99,
            discount: 12,
            additionalInformation: "Perfect for immersive gaming with QD-OLED technology and ultra-fast refresh rate.",
            aboutThisItem: "The Alienware AW3423DW features QD-OLED technology for vibrant colors, a 175Hz refresh rate, and G-Sync Ultimate for smooth gameplay.",
            productDetails: {
                screenSize: "34 inches",
                resolution: "3440 x 1440 UWQHD",
                panelType: "QD-OLED",
                refreshRate: "175Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "ASUS ROG Swift PG42UQ",
            description: "42-inch 4K OLED gaming monitor with 138Hz refresh rate and HDR support.",
            category: "monitors",
            brand: "ASUS",
            image: "https://cdn.inet.se/product/688x386/2221909_9.png",
            price: 1499.99,
            discount: 15,
            additionalInformation: "Designed for high-end gaming with OLED technology and ultra-fast refresh rate.",
            aboutThisItem: "The ASUS ROG Swift PG42UQ features OLED technology for deep blacks, a 138Hz refresh rate, and HDR support for stunning visuals.",
            productDetails: {
                screenSize: "42 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "OLED",
                refreshRate: "138Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "BenQ EX240N",
            description: "24-inch Full HD gaming monitor with 165Hz refresh rate and Adaptive Sync.",
            category: "monitors",
            brand: "BenQ",
            image: "https://cdn.shopify.com/s/files/1/0637/0407/2436/files/ex2710q-2product_89afcd09-15a6-46dc-94d1-2362e9767d6a.png?v=1697446234",
            price: 299.99,
            discount: 12,
            additionalInformation: "Perfect for fast-paced gaming with high refresh rate and Adaptive Sync technology.",
            aboutThisItem: "The BenQ EX240N features a 165Hz refresh rate, Adaptive Sync technology, and Full HD resolution for smooth gameplay.",
            productDetails: {
                screenSize: "24 inches",
                resolution: "Full HD (1920 x 1080)",
                panelType: "VA",
                refreshRate: "165Hz",
                connectivity: ["HDMI", "DisplayPort", "USB ports"]
            }
        },
        {
            title: "Samsung Smart Monitor M70B",
            description: "32-inch 4K UHD smart monitor with built-in apps and wireless connectivity.",
            category: "monitors",
            brand: "Samsung",
            image: "https://thegoodguys.sirv.com/products/50081233/50081233_816783.PNG",
            price: 899.99,
            discount: 8,
            additionalInformation: "Perfect for productivity and entertainment with built-in apps.",
            aboutThisItem: "The Samsung Smart Monitor M70B offers a 4K UHD resolution, built-in apps, and wireless connectivity for a seamless experience.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "VA",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "USB-C", "Wi-Fi"]
            }
        },
        {
            title: "HP Z32",
            description: "32-inch 4K UHD professional monitor with factory-calibrated color accuracy.",
            category: "monitors",
            brand: "HP",
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05874254.png",
            price: 999.99,
            discount: 10,
            additionalInformation: "Ideal for professionals who need precise color accuracy for design and editing.",
            aboutThisItem: "The HP Z32 features a 4K UHD resolution, factory-calibrated color accuracy, and ergonomic adjustments for comfortable viewing.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "IPS",
                refreshRate: "60Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "LG 38WN95C-W",
            description: "38-inch ultrawide curved monitor with Nano IPS technology and 144Hz refresh rate.",
            category: "monitors",
            brand: "LG",
            image: "https://tanthanhdanh.vn/wp-content/uploads/2024/04/38WN95C-product-1.png",
            price: 1599.99,
            discount: 12,
            additionalInformation: "Perfect for immersive gaming and multitasking with ultrawide screen and high refresh rate.",
            aboutThisItem: "The LG 38WN95C-W features Nano IPS technology for vibrant colors, a 144Hz refresh rate, and a curved screen for an enhanced viewing experience.",
            productDetails: {
                screenSize: "38 inches",
                resolution: "3840 x 1600",
                panelType: "IPS",
                refreshRate: "144Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "ASUS ProArt Display PA32DC",
            description: "32-inch 4K OLED professional monitor with HDR support and ultra-high color accuracy.",
            category: "monitors",
            brand: "ASUS",
            image: "https://dlcdnwebimgs.asus.com/gain/079e0f31-1e15-4007-9a4a-bc8cf313f72c/w800",
            price: 2499.99,
            discount: 15,
            additionalInformation: "Designed for professional video editing and color grading with industry-leading OLED technology.",
            aboutThisItem: "The ASUS ProArt Display PA32DC features OLED technology for deep blacks, HDR support, and ultra-high color accuracy for professional workflows.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "OLED",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "DisplayPort", "USB-C"]
            }
        },
        {
            title: "BenQ EW3880R",
            description: "37.5-inch ultrawide curved monitor with HDRi and built-in speakers.",
            category: "monitors",
            brand: "BenQ",
            image: "https://image.benq.com/is/image/benqco/10-ew3880r?$ResponsivePreset$&fmt=png-alpha",
            price: 1299.99,
            discount: 12,
            additionalInformation: "Perfect for entertainment and productivity with ultrawide screen and built-in speakers.",
            aboutThisItem: "The BenQ EW3880R features an ultrawide curved screen for an enhanced viewing experience, HDRi support for vibrant visuals, and built-in speakers for immersive sound.",
            productDetails: {
                screenSize: "37.5 inches",
                resolution: "3840 x 1600",
                panelType: "IPS",
                refreshRate: "60Hz",
                connectivity: ["USB-C", "HDMI", "DisplayPort"]
            }
        },
        {
            title: "Samsung Smart Monitor M80B",
            description: "32-inch 4K UHD smart monitor with built-in apps and wireless connectivity.",
            category: "monitors",
            brand: "Samsung",
            image: "https://images.samsung.com/is/image/samsung/p6pim/mx/ls32bm80pulxzx/gallery/mx-smart-m8-32m80b-ls32bm80pulxzx-532554058?$650_519_PNG$",
            price: 999.99,
            discount: 8,
            additionalInformation: "Perfect for productivity and entertainment with built-in apps.",
            aboutThisItem: "The Samsung Smart Monitor M90B offers a 4K UHD resolution, built-in apps, and wireless connectivity for a seamless experience.",
            productDetails: {
                screenSize: "32 inches",
                resolution: "4K UHD (3840 x 2160)",
                panelType: "VA",
                refreshRate: "60Hz",
                connectivity: ["HDMI", "USB-C", "Wi-Fi"]
            }
        }
];

module.exports = {data:monitors}; 