type BlogData = {
    title: string;
    mainImage: string;
    caption: string;
    sections: {
      subtitle: string;
      description: string;
      image: {
        url: string;
        length: "full" | "half";
      };
    }[];
    technologies: string[];
  };
  

  export const projectDetails: Record<string, BlogData> = {
    "Ethnic Clothing Manufacturer - Branding": {
      title: "Elevating Ethnic Clothing Manufacturer's Brand Identity",
      caption: "Branding",
      mainImage: "https://example.com/ethnic-clothing.jpg",
      sections: [
        {
          subtitle: "The Challenge",
          description: "The ethnic clothing manufacturer required a comprehensive branding solution to elevate their online presence and drive sales.",
          image: {
            url: "https://example.com/challenge.jpg",
            length: "full",
          },
        },
        {
          subtitle: "The Solution",
          description: "Brown Ion Agency crafted a bespoke branding strategy, ensuring consistency across social media platforms.",
          image: {
            url: "https://example.com/solution.jpg",
            length: "half",
          },
        },
        {
          subtitle: "The Result",
          description: "The solution resulted in a 23% increase in online presence and improved brand awareness.",
          image: {
            url: "https://example.com/result.jpg",
            length: "full",
          },
        },
      ],
      technologies: [],
    },
    "Ethnic Clothing Manufacturer - Development": {
      title: "Streamlining Ethnic Clothing Manufacturer's Operations",
      caption: "Development",
      mainImage: "https://example.com/ethnic-clothing-dev.jpg",
      sections: [
        {
          subtitle: "The Challenge",
          description: "The ethnic clothing manufacturer required an automated management solution to streamline their manufacturing processes.",
          image: {
            url: "https://example.com/challenge-dev.jpg",
            length: "full",
          },
        },
        {
          subtitle: "The Solution",
          description: "Brown Ion Agency developed a custom application using MERN stack, Capacitor, and GS.",
          image: {
            url: "https://example.com/solution-dev.jpg",
            length: "half",
          },
        },
        {
          subtitle: "The Result",
          description: "The solution resulted in a 35% increase in sales and improved operational efficiency.",
          image: {
            url: "https://example.com/result-dev.jpg",
            length: "full",
          },
        },
      ],
      technologies: [
        "https://example.com/mern-stack.png",
        "https://example.com/capacitor.png",
        "https://example.com/graphql.png",
      ],
    },
    "Renowned Restaurant on Godhra Dakor Highway - Branding": {
      title: "Transforming Renowned Restaurant's Online Presence",
      caption: "Branding",
      mainImage: "https://example.com/restaurant-branding.jpg",
      sections: [
        {
          subtitle: "The Challenge",
          description: "The restaurant required a comprehensive branding solution to elevate their online presence and drive sales.",
          image: {
            url: "https://example.com/challenge-restaurant.jpg",
            length: "full",
          },
        },
        {
          subtitle: "The Solution",
          description: "Brown Ion Agency crafted a bespoke branding strategy, ensuring consistency across social media platforms.",
          image: {
            url: "https://example.com/solution-restaurant.jpg",
            length: "half",
          },
        },
        {
          subtitle: "The Result",
          description: "The solution resulted in a 50% increase in website traffic and improved brand awareness.",
          image: {
            url: "https://example.com/result-restaurant.jpg",
            length: "full",
          },
        },
      ],
      technologies: [],
    },
    "Renowned Restaurant on Godhra Dakor Highway - Development": {
      title: "Streamlining Renowned Restaurant's Operations",
      caption: "Development",
      mainImage: "https://example.com/restaurant-dev.jpg",
      sections: [
        {
          subtitle: "The Challenge",
          description: "The restaurant required an automated management solution to streamline their banquet booking and orders.",
          image: {
            url: "https://example.com/challenge-restaurant-dev.jpg",
            length: "full",
          },
        },
        {
          subtitle: "The Solution",
          description: "Brown Ion Agency developed a custom management software using MERN stack, Capacitor, and GS.",
          image: {
            url: "https://example.com/solution-restaurant-dev.jpg",
            length: "half",
          },
        },
        {
          subtitle: "The Result",
          description: "The solution resulted in a 30% reduction in operational costs and improved employee efficiency.",
          image: {
            url: "https://example.com/result-restaurant-dev.jpg",
            length: "full",
          },
        },
      ],
      technologies: [
        "https://example.com/mern-stack.png",
        "https://example.com/capacitor.png",
        "https://example.com/graphql.png",
      ],
    },
  };