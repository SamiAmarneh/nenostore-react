
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating a submission
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-neno-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-100 mb-8">
            Sign up to receive updates on new products, special offers, and home improvement tips.
          </p>

          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <p className="text-white text-lg">
                Thank you for subscribing! We've sent a confirmation email to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-neno-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-neno-secondary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-gray-200 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
