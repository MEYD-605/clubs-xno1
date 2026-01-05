export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://clubsbybo.com/#organization",
        name: "Clubs by Bo",
        url: "https://clubsbybo.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://clubsbybo.com/#logo",
          inLanguage: "en-US",
          url: "https://clubsbybo.com/logo.png",
          contentUrl: "https://clubsbybo.com/logo.png",
          width: 512,
          height: 512,
          caption: "Clubs by Bo",
        },
        image: { "@id": "https://clubsbybo.com/#logo" },
        sameAs: ["https://instagram.com/clubsbybo", "https://facebook.com/clubsbybo", "https://twitter.com/clubsbybo"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+66651234416",
            contactType: "customer service",
            email: "barboxar.khunbo@gmail.com",
            availableLanguage: ["Thai", "English"],
          },
        ],
        description: "Clubs by Bo - บริการรับถ่ายภาพระดับพรีเมียม ช่างภาพกรุงเทพ (Portrait & Event Specialist) ส่งรูปด่วนภายใน 24 ชม. ด้วย SONY A7III Mastery.",
      },
      {
        "@type": "WebSite",
        "@id": "https://clubsbybo.com/#website",
        url: "https://clubsbybo.com",
        name: "Clubs by Bo",
        description: "A Space Where Creativity Meets Precision",
        publisher: { "@id": "https://clubsbybo.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://clubsbybo.com/#person",
        name: "Bo",
        image: {
          "@type": "ImageObject",
          "@id": "https://clubsbybo.com/#personImage",
          inLanguage: "en-US",
          url: "https://clubsbybo.com/profile.jpg",
          contentUrl: "https://clubsbybo.com/profile.jpg",
          caption: "Bo",
        },
        description: "Photographer, Bartender, and AI Strategist",
        sameAs: ["https://instagram.com/clubsbybo", "https://facebook.com/clubsbybo", "https://twitter.com/clubsbybo"],
        worksFor: { "@id": "https://clubsbybo.com/#organization" },
        knowsAbout: ["Photography", "Bartending", "Artificial Intelligence", "Digital Tools"],
        jobTitle: "Founder",
      },
      {
        "@type": "Service",
        "@id": "https://clubsbybo.com/ai/#service",
        name: "AI Assistant Services",
        url: "https://clubsbybo.com/ai/",
        provider: { "@id": "https://clubsbybo.com/#organization" },
        description: "AI solutions that help businesses and individuals work more efficiently.",
        serviceType: "AI Services",
      },
      {
        "@type": "Service",
        "@id": "https://clubsbybo.com/photography/#service",
        name: "Premium Portrait & Event Photography Services บรืการรับถ่ายภาพ",
        url: "https://clubsbybo.com/photography/",
        provider: { "@id": "https://clubsbybo.com/#organization" },
        description: "ช่างภาพมืออาชีพ รับถ่ายภาพบุคคล Portrait, งานอีเว้นท์, งานรับปริญญา และโปรไฟล์ธุรกิจ ส่งรูปไวภายใน 24 ชม.",
        serviceType: "Photography Services",
      },
      {
        "@type": "Service",
        "@id": "https://clubsbybo.com/bar/#service",
        name: "Bartending Services",
        url: "https://clubsbybo.com/bar/",
        provider: { "@id": "https://clubsbybo.com/#organization" },
        description: "Professional bartending services for private parties, corporate events, and special occasions.",
        serviceType: "Bartending Services",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://clubsbybo.com/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://clubsbybo.com" },
          { "@type": "ListItem", "position": 2, "name": "Photography", "item": "https://clubsbybo.com/photography/" },
          { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://clubsbybo.com/services/" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ช่างภาพ Clubs by Bo ส่งรูปไวแค่ไหน?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "เราส่งรูปด่วนภายใน 24 ชั่วโมงหลังจากจบงานถ่าย เพื่อความรวดเร็วและพึงพอใจสูงสุดของลูกค้า"
            }
          },
          {
            "@type": "Question",
            "name": "รับถ่ายภาพนอกสถานที่ในกรุงเทพไหม?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ใช่ครับ เราคือช่างภาพกรุงเทพที่รับถ่ายภาพทุกที่ในเขตกรุงเทพและปริมณฑล พร้อมอุปกรณ์พกพาสะดวก SONY A7III Mastery"
            }
          }
        ]
      }
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
