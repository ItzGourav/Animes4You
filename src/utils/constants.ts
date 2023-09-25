import { tv } from "tailwind-variants";

export const contentSize = tv({
    base: "max-w-screen-xl mx-auto"
})

export const ANIMES = [
    {
        name: "One Piece",
        desc: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World..',
        image: "/images/op.png",
        eps: 1069,
        type: "TV",
        isTrending: true,
        completed: false,
        subOrDub: "sub",
        genre: ["Action", "Adventure", "Fantasy", "Shounen"],
        status: "ongoing",
        studio: "Toei animation",
        rating: "9.2",
        director: ["Nagamine Tatsuya", "Uda Kounosuke"],
        cast: ["Cho", "Gouri", "Daisuke", "Hirata", "Hiroaki", "Nakai", "Kazuya", "Okamura", "Akemi", "Ootani", "Ikue", "Tanaka", "Mayumi", "Yamaguchi", "Kappei", "Yamaguchi", "Yuriko", "Yao", "Kazuki"]
    },
    {
        name: "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        desc: 'For centuries, the Demon Slayer Corps has sacredly kept the location of Swordsmith Village a secret. As the village of the greatest forgers, it provides Demon Slayers with the finest...',
        image: "/images/ds.png",
        eps: 11,
        type: "ONA",
        isTrending: false,
        completed: true,
        subOrDub: "dub",
        genre: ["Action", "Adventure", "Fantasy", "Shounen"],
        status: "completed",
        studio: "ufotable",
        rating: "8.7",
        cast: ["Hanae", "Natsuki", "Hanazawa", "Kana", "Hino", "Satoshi", "Ishida", "Akira", "Kawanishi", "Kengo", "Kitou", "Akari", "Konishi", "Katsuyuki", "Matsuoka", "Yoshitsugu", "Shimono", "Hiro", "Ueda", "Reina"],
        director: ["Haruo Sotozaki"]
    },
    {
        name: "One Piece",
        desc: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World..',
        image: "/images/op.png",
        eps: 1069,
        type: "TV",
        isTrending: true,
        completed: false,
        subOrDub: "sub",
        genre: ["Action", "Adventure", "Fantasy", "Shounen"],
        status: "ongoing",
        studio: "Toei animation",
        rating: "9.2",
        director: ["Nagamine Tatsuya", "Uda Kounosuke"],
        cast: ["Cho", "Gouri", "Daisuke", "Hirata", "Hiroaki", "Nakai", "Kazuya", "Okamura", "Akemi", "Ootani", "Ikue", "Tanaka", "Mayumi", "Yamaguchi", "Kappei", "Yamaguchi", "Yuriko", "Yao", "Kazuki"]
    },
    {
        name: "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        desc: 'For centuries, the Demon Slayer Corps has sacredly kept the location of Swordsmith Village a secret. As the village of the greatest forgers, it provides Demon Slayers with the finest...',
        image: "/images/ds.png",
        eps: 11,
        type: "TV",
        isTrending: false,
        completed: true,
        subOrDub: "dub",
        genre: ["Action", "Adventure", "Fantasy", "Shounen"],
        status: "completed",
        studio: "ufotable",
        rating: "8.7",
        cast: ["Hanae", "Natsuki", "Hanazawa", "Kana", "Hino", "Satoshi", "Ishida", "Akira", "Kawanishi", "Kengo", "Kitou", "Akari", "Konishi", "Katsuyuki", "Matsuoka", "Yoshitsugu", "Shimono", "Hiro", "Ueda", "Reina"],
        director: ["Haruo Sotozaki"]

    },
    {
        name: "One Piece",
        desc: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World..',
        image: "/images/op.png",
        eps: 1069,
        type: "TV",
        isTrending: true,
        completed: false,
        subOrDub: "sub",
        genre: ["Action", "Adventure", "Fantasy", "Shounen"],
        status: "ongoing",
        studio: "Toei animation",
        rating: "9.2",
        director: ["Nagamine Tatsuya", "Uda Kounosuke"],
        cast: ["Cho", "Gouri", "Daisuke", "Hirata", "Hiroaki", "Nakai", "Kazuya", "Okamura", "Akemi", "Ootani", "Ikue", "Tanaka", "Mayumi", "Yamaguchi", "Kappei", "Yamaguchi", "Yuriko", "Yao", "Kazuki"]
    },
]

export const GENRE = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Slice of Life", value: "slice-of-life" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Magic", value: "magic" },
    { label: "Supernatural", value: "supernatural" },
    { label: "Horror", value: "horror" },
    { label: "Mystery", value: "mystery" },
    { label: "Psychological", value: "psychological" },
    { label: "Romance", value: "romance" },
    { label: "Sci-Fi", value: "sci-fi" },
];

export const SEASONS = [

    { label: "Fall 1999", value: "fall-1999" },
    { label: "Fall 2002", value: "fall-2002" },
    { label: "Fall 2004", value: "fall-2004" },
    { label: "Fall 2006", value: "fall-2006" },
    { label: "Spring 2017", value: "spring-2017" },
    { label: "Spring 2023", value: "spring-2023" },
    { label: "Summer 1982", value: "summer-1982" },
    { label: "Summer 2004", value: "summer-2004" },
    { label: "Summer 2016", value: "summer-2016" },
    { label: "Summer 2019", value: "summer-2019" },
    { label: "Summer 2023", value: "summer-2023" },
    { label: "Winter 2007", value: "winter-2007" },
    { label: "Winter 2023", value: "winter-2023" },
]

export const STUDIOS = [

    { label: "A-1 Pictures", value: "a-1-pictures" },
    { label: "AIC", value: "aic" },
    { label: "Asahi Production", value: "asahi-production" },
    { label: "AXsiZ", value: "axsiz" },
    { label: "Bakken Record", value: "bakken-record" },
    { label: "Bones", value: "bones" },
    { label: "BUG FILMS", value: "bug-films" },
    { label: "C2C", value: "c2c" },
    { label: "Cloud Hearts", value: "cloud-hearts" },
    { label: "Encourage Films", value: "encourage-films" },
    { label: "GEMBA", value: "gemba" },
    { label: "GIFTanimation", value: "giftanimation" },
    { label: "GoHands", value: "gohands" },
    { label: "J.C.Staff", value: "j-c-staff" },
    { label: "Kinema Citrus", value: "kinema-citrus" },
    { label: "Liber", value: "liber" },
    { label: "LIDENFILMS", value: "lidenfilms" },
    { label: "Lingsanwu Animation", value: "lingsanwu-animation" },
    { label: "Madhouse", value: "madhouse" },
    { label: "Maho Film", value: "maho-film" },
    { label: "MAPPA", value: "mappa" },
    { label: "Millepensee", value: "millepensee" },
    { label: "Nomad", value: "nomad" },
    { label: "OLM", value: "olm" },
    { label: "P.A. Works", value: "p-a-works" },
    { label: "Pierrot", value: "pierrot" },
    { label: "PINE JAM", value: "pine-jam" },
    { label: "Quad", value: "quad" },
    { label: "Ruo Hong Culture", value: "ruo-hong-culture" },
    { label: "SANZIGEN", value: "sanzigen" },
    { label: "Shin-Ei Animation", value: "shin-ei-animation" },
    { label: "Signal.MD", value: "signal-md" },
    { label: "SILVER LINK.", value: "silver-link" },
    { label: "Soyep", value: "soyep" },
    { label: "Studio 3Hz", value: "studio-3hz" },
    { label: "Studio Bind", value: "studio-bind" },
    { label: "Studio Comet", value: "studio-comet" },
    { label: "Studio Elle", value: "studio-elle" },
    { label: "Studio Gokumi", value: "studio-gokumi" },
    { label: "Studio Hibari", value: "studio-hibari" },
    { label: "Studio Jemi", value: "studio-jemi" },
    { label: "Studio Signpost", value: "studio-signpost" },
    { label: "Sunrise", value: "sunrise" },
    { label: "Toei Animation", value: "toei-animation" },
    { label: "ufotable", value: "ufotable" },
    { label: "Wit Studio", value: "wit-studio" },
    { label: "Zero-G", value: "zero-g" },
];

export const STATUSES = [

    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Hiatus", value: "hiatus" },
];


export const MEDIATYPES = [

    { label: "TV Series", value: "tv-series" },
    { label: "OVA", value: "ova" },
    { label: "Movie", value: "movie" },
    { label: "Live Action", value: "live-action" },
    { label: "Special", value: "special" },
    { label: "BD", value: "bd" },
    { label: "ONA", value: "ona" },
    { label: "Music", value: "music" },
];


export const SORT = [
    { label: "Default", value: "default" },
    { label: "A-Z", value: "a-z" },
    { label: "Z-A", value: "z-a" },
    { label: "Latest Update", value: "latest-update" },
    { label: "Latest Added", value: "latest-added" },
    { label: "Popular", value: "popular" },
    { label: "Rating", value: "rating" },
];
