// Gallery CMS Data - Real portfolio work from ClubsxAI
export interface GalleryImage {
    id: number;
    src: string;
    fallback: string;
    width: number;
    height: number;
    tags: string[];
    title: string;
    alt: string;
}

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "/images/portfolio_spa_clinic_lady.jpg",
        fallback: "/images/portfolio_spa_clinic_lady.jpg",
        width: 683,
        height: 1024,
        tags: ["sensual", "minimal"],
        title: "Spa & Wellness Portrait",
        alt: "Wellness portrait of a woman in a spa clinic setting with soft, minimal lighting"
    },
    {
        id: 2,
        src: "/images/portfolio_outdoor_black_dress.jpg",
        fallback: "/images/portfolio_outdoor_black_dress.jpg",
        width: 682,
        height: 1024,
        tags: ["editorial", "moody"],
        title: "Urban Editorial Portrait",
        alt: "Outdoor urban editorial portrait featuring a subject in a black dress with moody styling"
    },
    {
        id: 3,
        src: "/images/portfolio_wedding_bride_champagne.jpg",
        fallback: "/images/portfolio_wedding_bride_champagne.jpg",
        width: 682,
        height: 1024,
        tags: ["sensual", "editorial"],
        title: "Wedding & Event Coverage",
        alt: "Wedding event photo of a bride celebrating with champagne in an editorial style"
    },
    {
        id: 4,
        src: "/images/portfolio_lifestyle_cowboy_cafe.jpg",
        fallback: "/images/portfolio_lifestyle_cowboy_cafe.jpg",
        width: 682,
        height: 1024,
        tags: ["moody", "editorial"],
        title: "Cafe Lifestyle Portrait",
        alt: "Lifestyle portrait in a cafe featuring a cowboy-inspired outfit with moody editorial tones"
    },
    {
        id: 5,
        src: "/images/portfolio_product_woven_bags.jpg",
        fallback: "/images/portfolio_product_woven_bags.jpg",
        width: 1024,
        height: 682,
        tags: ["minimal", "editorial"],
        title: "Product Photography",
        alt: "Minimal product photography of woven bags with clean styling and studio lighting"
    },
    {
        id: 6,
        src: "/images/portfolio_bartender_cocktail_mix.jpg",
        fallback: "/images/portfolio_bartender_cocktail_mix.jpg",
        width: 1024,
        height: 682,
        tags: ["moody", "editorial"],
        title: "F&B Professional Shoot",
        alt: "Bartender mixing a cocktail in a bar setting with moody, cinematic lighting"
    },
    {
        id: 7,
        src: "/images/portfolio_beverage_pink_cocktail.jpg",
        fallback: "/images/portfolio_beverage_pink_cocktail.jpg",
        width: 640,
        height: 960,
        tags: ["sensual", "minimal"],
        title: "Beverage Photography",
        alt: "Beverage hero shot of a pink cocktail styled for a minimal, premium look"
    },
    {
        id: 8,
        src: "/images/portfolio_food_hummus_platter.jpg",
        fallback: "/images/portfolio_food_hummus_platter.jpg",
        width: 960,
        height: 640,
        tags: ["minimal", "editorial"],
        title: "Food Photography",
        alt: "Food photography of a hummus platter styled for a clean, editorial presentation"
    },
    {
        id: 9,
        src: "/images/portfolio_lifestyle_bathtub_mango.jpg",
        fallback: "/images/portfolio_lifestyle_bathtub_mango.jpg",
        width: 1024,
        height: 682,
        tags: ["sensual", "minimal"],
        title: "Lifestyle & Wellness",
        alt: "Lifestyle wellness scene with a relaxing bathtub setting and mango accents in a minimal style"
    },
    {
        id: 10,
        src: "/images/portfolio_product_golden_buddha.jpg",
        fallback: "/images/portfolio_product_golden_buddha.jpg",
        width: 682,
        height: 1024,
        tags: ["minimal", "moody"],
        title: "Product Detail Shot",
        alt: "Close-up product detail photo of a golden Buddha figure with moody, minimal lighting"
    },
    {
        id: 11,
        src: "/images/portfolio_spa_facial_treatment.jpg",
        fallback: "/images/portfolio_spa_facial_treatment.jpg",
        width: 682,
        height: 1024,
        tags: ["minimal", "editorial"],
        title: "Medical & Spa Coverage",
        alt: "Spa facial treatment in progress captured as clean, editorial medical and wellness coverage"
    },
    {
        id: 12,
        src: "/images/portfolio_medical_10town_group.jpg",
        fallback: "/images/portfolio_medical_10town_group.jpg",
        width: 1024,
        height: 682,
        tags: ["editorial", "minimal"],
        title: "Corporate Group Photo",
        alt: "Corporate group photo of a clinic or medical team captured in a professional, editorial style"
    },
    {
        id: 13,
        src: "/images/portfolio_bartender_kiwi_pour.jpg",
        fallback: "/images/portfolio_bartender_kiwi_pour.jpg",
        width: 640,
        height: 960,
        tags: ["moody", "editorial"],
        title: "Action F&B Photography",
        alt: "Action shot of a bartender pouring a kiwi cocktail with moody, editorial lighting"
    },
    {
        id: 14,
        src: "/images/portfolio_food_curry_soup.jpg",
        fallback: "/images/portfolio_food_curry_soup.jpg",
        width: 682,
        height: 1024,
        tags: ["minimal", "editorial"],
        title: "Restaurant Photography",
        alt: "Restaurant food photo of a curry soup dish captured in a clean, editorial style"
    },
    {
        id: 15,
        src: "/images/portfolio_medical_10town_promo.jpg",
        fallback: "/images/portfolio_medical_10town_promo.jpg",
        width: 682,
        height: 1024,
        tags: ["editorial", "minimal"],
        title: "Commercial Product Promo",
        alt: "Commercial promotional photo for a medical or clinic brand with a polished, editorial look"
    },
];

export const galleryTags = [
    { id: "all", label: "All" },
    { id: "sensual", label: "Sensual" },
    { id: "editorial", label: "Editorial" },
    { id: "moody", label: "Moody" },
    { id: "minimal", label: "Minimal" },
];
