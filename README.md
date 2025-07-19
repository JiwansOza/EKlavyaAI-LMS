# 🎓 Eklavya - AI-Powered Learning Management System

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> A modern, AI-powered Learning Management System built with Next.js 14, featuring advanced assessment capabilities, comprehensive course management, and inclusive learning experiences.

![Eklavya LMS Platform](public/logo.png)

## ✨ Features

### 🎯 **Core Learning Management**
- **📚 Course Creation & Management** - Create, edit, and organize courses with rich media content
- **📖 Chapter Organization** - Structured content with videos, text, and attachments
- **🎬 Video Learning** - Custom video player with progress tracking
- **📊 Progress Analytics** - Real-time learning progress visualization
- **🔍 Advanced Search** - Course discovery with category filtering
- **📱 Responsive Design** - Seamless experience across all devices

### 🧠 **AI-Powered Assessment System**
- **📝 Multiple Question Types** - MCQs, Descriptive, Practical, Viva, Pen & Paper
- **🤖 AI Evaluation** - Intelligent grading and feedback system
- **♿ Accessibility Features** - Text-to-speech, speech recognition for PWD
- **📈 Adaptive Difficulty** - Questions adjust based on performance
- **⏱️ Session Management** - Secure, timed examination environments
- **📊 Performance Analytics** - Detailed assessment insights

### 💳 **Payment & Monetization**
- **💳 Dual Payment Gateways** - Stripe and Razorpay integration
- **💰 Flexible Pricing** - Course pricing and enrollment management
- **📈 Revenue Analytics** - Teacher earnings and sales tracking
- **🔒 Secure Transactions** - Webhook verification and fraud protection

### 👥 **User Management**
- **🔐 Role-Based Access** - Students, Teachers, and Admin roles
- **👤 User Profiles** - Personalized learning dashboards
- **🔒 Secure Authentication** - Clerk-powered user management
- **📊 Learning Analytics** - Individual and course-level insights

## 🛠️ Technology Stack

### **Frontend**
- **⚛️ React 18** - Component-based UI development
- **⏭️ Next.js 14** - React framework with App Router
- **🎨 TailwindCSS** - Utility-first CSS framework
- **🧩 Shadcn/ui** - Reusable component system
- **✨ Framer Motion** - Advanced animations and interactions
- **🌈 GSAP** - High-performance animation library
- **🔍 TypeScript** - Type-safe JavaScript development

### **Backend**
- **🔄 Next.js API Routes** - Serverless API endpoints
- **🗃️ Prisma ORM** - Next-generation database toolkit
- **📦 MySQL** - Relational database (via PlanetScale)
- **🔐 Clerk** - Authentication and user management
- **💰 Stripe & Razorpay** - Payment processing
- **☁️ UploadThing** - File uploads and storage
- **🌐 Vercel** - Deployment and hosting

### **Development Tools**
- **📦 npm** - Package management
- **🔍 ESLint** - Code linting and formatting
- **🎨 Prettier** - Code formatting
- **📝 Prisma Studio** - Database management interface

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MySQL** database (local or PlanetScale)
- **Git**

## 🚀 Quick Start

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/Eklavya-LMS.git
cd Eklavya-LMS
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Environment Setup**
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/eklavya_lms"

# Authentication (Clerk)
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Payment (Stripe)
STRIPE_API_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Payment (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# File Upload (UploadThing)
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed database with sample data
npm run seed
```

### 5. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. **Database Management**
```bash
# Open Prisma Studio for database management
npx prisma studio
```

## 📁 Project Structure

```
Eklavya-LMS/
├── app/                          # Next.js 14 App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (Dashboard)/              # Main dashboard layout
│   │   ├── (routes)/             # Dashboard routes
│   │   │   ├── (root)/           # Home dashboard
│   │   │   ├── search/           # Course search
│   │   │   ├── teacher/          # Teacher dashboard
│   │   │   └── assessment/       # Assessment management
│   │   └── _components/          # Dashboard components
│   ├── (course)/                 # Course viewing routes
│   ├── api/                      # API routes
│   ├── examination/              # Assessment taking routes
│   └── globals.css               # Global styles
├── components/                   # Reusable components
│   ├── ui/                       # Shadcn/ui components
│   ├── providers/                # Context providers
│   └── modals/                   # Modal components
├── lib/                          # Utility libraries
├── actions/                      # Server actions
├── hooks/                        # Custom React hooks
├── prisma/                       # Database schema
├── public/                       # Static assets
└── types.ts                      # TypeScript types
```

## 🎯 Key Features Deep Dive

### **AI-Powered Assessment System**

The assessment system is the crown jewel of Eklavya LMS, featuring:

```typescript
// Assessment types supported
enum AssessmentType {
  ONLINE      // Web-based assessments
  OFFLINE     // Traditional pen-paper
  BLENDED     // Mixed format
}

// Question formats
enum QuestionFormat {
  MCQ         // Multiple choice
  DESCRIPTIVE // Text-based answers
  PRACTICAL   // Hands-on evaluation
  VIVA        // Oral examination
  PEN_PAPER   // Traditional format
}
```

**Key Capabilities:**
- **Adaptive Difficulty**: Questions adjust based on student performance
- **Accessibility Support**: Text-to-speech, speech recognition, screen reader support
- **AI Evaluation**: Intelligent grading for descriptive and practical answers
- **Session Security**: Secure exam environments with anti-cheating measures
- **Real-time Analytics**: Live performance tracking and insights

### **Course Management System**

Comprehensive course creation and management:

```typescript
// Course structure
interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  isPublished: boolean;
  categoryId: string;
  chapters: Chapter[];
  attachments: Attachment[];
}
```

**Features:**
- **Rich Media Support**: Videos, images, PDFs, audio files
- **Chapter Organization**: Structured content with progress tracking
- **Publishing Workflow**: Draft/publish controls for content
- **Category Management**: Organized course discovery
- **Progress Tracking**: Real-time learning analytics

### **Payment Integration**

Dual payment gateway support for global accessibility:

```typescript
// Payment verification
const verifyPayment = async (paymentData) => {
  // Stripe webhook verification
  // Razorpay signature verification
  // Purchase record creation
}
```

**Supported Gateways:**
- **Stripe**: Primary payment processor
- **Razorpay**: Alternative for specific regions
- **Webhook Security**: Secure payment verification
- **Transaction Tracking**: Complete payment history

## 🔧 Configuration

### **Database Configuration**

The application uses Prisma with MySQL. Key configurations:

```prisma
// prisma/schema.prisma
datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}
```

### **Authentication Setup**

Clerk configuration for user management:

```typescript
// middleware.ts
export default clerkMiddleware(async (auth, req) => {
  // Role-based access control
  // Route protection
  // User metadata management
});
```

### **File Upload Configuration**

UploadThing setup for media handling:

```typescript
// app/api/uploadthing/core.ts
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB" } }),
  courseAttachment: f(["pdf", "image", "video", "audio", "text"]),
  chapterVideo: f({ video: { maxFileSize: "1GB" } })
};
```

## 🚀 Deployment

### **Vercel Deployment (Recommended)**

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Configure database connection
   - Set up payment webhooks

3. **Database Setup**
   ```bash
   # Push schema to production database
   npx prisma db push --accept-data-loss
   ```

### **Other Deployment Options**

- **Railway**: Full-stack deployment platform
- **Netlify**: Static site hosting (with limitations)
- **AWS/GCP**: Self-managed deployment

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build application
npm run build
```

## 📊 Performance Optimization

### **Frontend Optimizations**
- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Strategic caching for static assets

### **Database Optimizations**
- **Indexing**: Optimized database indexes for common queries
- **Connection Pooling**: Efficient database connection management
- **Query Optimization**: Prisma query optimization

## 🔒 Security Features

- **Authentication**: Secure user authentication with Clerk
- **Authorization**: Role-based access control
- **Payment Security**: Webhook verification for payments
- **File Upload**: Secure file handling with type validation
- **Session Management**: Secure assessment sessions
- **Data Protection**: GDPR-compliant data handling

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Clerk** for authentication and user management
- **Prisma** for the excellent ORM experience
- **Shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment
- **PlanetScale** for reliable database hosting

## 📞 Support

- **Documentation**: [Wiki](https://github.com/yourusername/Eklavya-LMS/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/Eklavya-LMS/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/Eklavya-LMS/discussions)
- **Email**: support@eklavya-lms.com


---

<div align="center">

**Built with ❤️ for the future of education**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/Eklavya-LMS?style=social)](https://github.com/yourusername/Eklavya-LMS/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/Eklavya-LMS?style=social)](https://github.com/yourusername/Eklavya-LMS/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/Eklavya-LMS)](https://github.com/yourusername/Eklavya-LMS/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/Eklavya-LMS)](https://github.com/yourusername/Eklavya-LMS/pulls)

</div>
