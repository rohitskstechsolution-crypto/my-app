import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Rohit Nigam</title>
        <meta name="description" content="Learn more about our company and mission." />
      </Helmet>
      <section className="py-16">
        <div className="max-w-7xl px-6 mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            About Us
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            We provide professional web development,
            SEO, and digital solutions for businesses.
          </p>

          <p className="text-lg text-gray-600">
            Our mission is to create fast, modern,
            and user-friendly websites that help
            businesses grow online.
          </p>
        </div>
      </section>
    </>
  );
}