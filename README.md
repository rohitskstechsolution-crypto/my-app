# React Blog Project

A modern blog application built with React, Vite, React Router, Tailwind CSS, and JSONPlaceholder API.

## Features

* Responsive homepage
* Blog listing page
* Single blog post page
* Dynamic routing with React Router
* Pagination support
* SEO meta tags using React Helmet Async
* 404 Not Found page
* Reusable components structure
* Fast development with Vite

## Tech Stack

* React
* Vite
* React Router DOM
* Tailwind CSS
* React Helmet Async
* JSONPlaceholder API

## Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── components/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── SinglePost.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Routing

| Route     | Description      |
| --------- | ---------------- |
| /         | Homepage         |
| /about    | About Page       |
| /blog     | Blog Listing     |
| /post/:id | Single Blog Post |
| /contact  | Contact Page     |
| *         | 404 Not Found    |

## API

This project uses JSONPlaceholder for demo blog content:

https://jsonplaceholder.typicode.com/posts

## SEO

SEO metadata is managed using React Helmet Async.

Example:

```jsx
<Helmet>
  <title>About Us | My Website</title>
  <meta
    name="description"
    content="Learn more about our company."
  />
</Helmet>
```

## Public Files

Place root-level files inside the `public` folder:

```text
public/
├── robots.txt
├── sitemap.xml
├── llms.txt
└── favicon.ico
```

These files will be accessible directly from the website root.

## Author

Built with React, Vite, React Router, and Tailwind CSS.
