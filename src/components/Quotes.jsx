import React, { useState, useEffect, useMemo } from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Quotes = ({ 
  quotes = [
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Technology is best when it brings people together. - Matt Mullenweg"
  ], 
  fetchFromAPI = false 
}) => {
  // Select a random quote once when the component loads
  const defaultQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], [quotes]);

  // Initialize quote state
  const [quote, setQuote] = useState(defaultQuote);

  // Fetch a random quote from API only if fetchFromAPI is true
  useEffect(() => {
    if (!fetchFromAPI) return; // Exit early if API fetch is disabled

    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setQuote(`${data.content} - ${data.author}`);
      } catch {
        // Keep default quote if fetch fails
      }
    };

    fetchQuote();
  }, [fetchFromAPI]); // Runs only when fetchFromAPI is true

  return (
    <div >
      {/* Motor / Slogan */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading level={2} color="#3cad6e">
          Welcome to Geek Ink – Where Learning Meets Innovation!
        </Heading>
      </motion.div>

      {/* Quote / Quotation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        "{quote}"
      </motion.p>
    </div>
  );
};

export default Quotes;
