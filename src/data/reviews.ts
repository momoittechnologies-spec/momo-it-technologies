export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  rating: number;
  date: string;
  text: string;
  source: "Google Reviews" | "Learner Testimonial" | "Client Feedback";
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Shyam Sundar",
    role: "Automation Test Engineer",
    companyOrLocation: "Kadapa, Andhra Pradesh",
    rating: 5,
    date: "Recent",
    text: "I am very satisfied with the tutor and training methodology at MOMO IT Technologies. The hands-on practice in Automation Testing and Java made all the difference in clearing my technical rounds. Highly recommended institute in Kadapa!",
    source: "Google Reviews",
  },
  {
    id: "rev-2",
    name: "Harish Kumar",
    role: "QA Engineer",
    companyOrLocation: "Kadapa / Hyderabad",
    rating: 5,
    date: "Recent",
    text: "I have learnt Automation testing in this training institute. The practical exposure to real projects, Selenium framework building, and continuous support from the instructors helped me gain solid confidence.",
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    name: "Pavan Kalyan M.",
    role: "Founder, MANA Tours & Travels",
    companyOrLocation: "Kadapa",
    rating: 5,
    date: "Client Review",
    text: "MOMO IT TECHNOLOGIES built our entire online platform for MANA Tours & Travels Kadapa. The booking engine, 24/7 AI Voice integration, and clean mobile responsiveness brought a massive surge in our direct customer bookings. Truly top-tier engineering!",
    source: "Client Feedback",
  },
  {
    id: "rev-4",
    name: "Anusha Reddy",
    role: "SDET Intern → Associate Engineer",
    companyOrLocation: "Tirupati, AP",
    rating: 5,
    date: "Recent",
    text: "The best thing about MOMO IT Technologies is their bridge between training and real agency projects. You don't just learn theory; you see how real applications are built and tested. The Google Meet live online sessions were seamless.",
    source: "Learner Testimonial",
  },
  {
    id: "rev-5",
    name: "Venkata Raman",
    role: "Software Engineer",
    companyOrLocation: "Kadapa, AP",
    rating: 5,
    date: "Recent",
    text: "The individual attention and practical debugging sessions in Core Java & Selenium are unmatched. In Kadapa, you won't find a better place for genuine technical skills and interview preparation.",
    source: "Google Reviews",
  },
];
