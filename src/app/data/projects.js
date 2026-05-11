export const projects = [
  {
    id: "suncart",
    title: "SunCart – Summer Essentials Store",
    image: "/suncart.jpeg",
    description: "A modern summer eCommerce web application where users can browse and purchase seasonal products like sunglasses, outfits, skincare, and beach accessories. Includes authentication and protected routes.",
    features: [
      "Product listing with cards (image, price, rating)",
      "Protected product details page",
      "User authentication (Email + Google Login)",
      "User registration system",
      "My Profile page",
      "Fully responsive design",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "React Hook Form", "React Icons", "React Hot Toast", "Better Auth", "Animate.css"],
    liveLink: "https://suncart-summer-sale.vercel.app",
    githubLink: "https://github.com/nnanjum1/suncart-summer-sale.git",
    challenges: "Implementing a secure authentication system while maintaining a smooth user experience was a key challenge. Integrating Better Auth with Next.js middleware required careful configuration.",
    futurePlans: "Add a payment gateway (Stripe), implement a wishlist feature, and enhance the search functionality with filters."
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    image: "/keenkeeper.jpeg",
    description: "This project was built as part of a web development assignment. The main idea is to help users manage their friendships in a more thoughtful way by tracking communication history. It includes a timeline system and stats dashboard to visualize interactions.",
    features: [
      "Friend List with clean card UI",
      "Status system (On-Track, Almost Due, Overdue)",
      "Friend detail view",
      "Timeline tracking (Call, Text, Video logs)",
      "Filter timeline by interaction type",
      "Stats dashboard with pie chart",
      "Interactive charts with hover effects"
    ],
    techStack: ["React.js", "Vite", "React Router DOM", "Tailwind CSS", "DaisyUI", "Recharts", "React Icons", "React Toastify"],
    liveLink: "https://assignment7-sigma-rose.vercel.app/",
    githubLink: "https://github.com/nnanjum1/assignment7.git",
    challenges: "Managing state for multiple friend interactions and visualizing them in real-time charts using Recharts was challenging but rewarding.",
    futurePlans: "Add reminder notifications, integrate with contact lists, and allow users to set custom interaction intervals for each friend."
  },
  {
    id: "github-issue-tracker",
    title: "Github Issue Tracker",
    image: "/githubissue.jpeg",
    description: "This project is a responsive Issue Tracking Dashboard developed as part of a web development assignment. It provides an intuitive interface for managing and monitoring issues based on different statuses such as Open, Closed, and All.",
    features: [
      "Secure login system with admin authentication",
      "Dashboard layout with search and tab-based filtering",
      "Dynamic issue filtering (All, Open, Closed views)",
      "Responsive 4-column card layout for issue display",
      "Detailed issue cards with modal view",
      "Real-time search functionality",
      "Status-based visual indicators (Green/Purple borders)"
    ],
    techStack: ["HTML", "CSS", "Tailwind CSS", "DaisyUI", "JavaScript (Vanilla)"],
    liveLink: "https://nnanjum1.github.io/b13_assignment_5/",
    githubLink: "https://github.com/nnanjum1/b13_assignment_5.git",
    challenges: "Implementing complex filtering logic and state management in Vanilla JavaScript without a framework required a deep understanding of DOM manipulation.",
    futurePlans: "Migrate the project to React for better state management and add a backend to persist issues."
  }
];

