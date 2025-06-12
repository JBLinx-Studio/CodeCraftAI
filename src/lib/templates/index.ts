
export * from './landing-page';
export * from './portfolio-page';
export * from './blog-page';
export * from './ecommerce-page';
export * from './dashboard-page';
export * from './social-page';
export * from './todo-page';

// Import all templates and create a unified templates array
import { landingPageTemplate } from './landing-page';
import { portfolioPageTemplate } from './portfolio-page';
import { blogPageTemplate } from './blog-page';
import { ecommercePageTemplate } from './ecommerce-page';
import { dashboardPageTemplate } from './dashboard-page';
import { socialPageTemplate } from './social-page';
import { todoPageTemplate } from './todo-page';

export const templates = [
  landingPageTemplate,
  portfolioPageTemplate,
  blogPageTemplate,
  ecommercePageTemplate,
  dashboardPageTemplate,
  socialPageTemplate,
  todoPageTemplate
];
