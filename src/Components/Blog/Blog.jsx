import React from 'react';
import './blog.css';

function Blog() {
  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1>Blogs and News - BeingHR Community</h1>
        <p>
          Your go-to destination for insightful articles, thought leadership, and the latest updates from the world of HR.
        </p>
      </header>

      {/* Blogs Section */}
      <section className="section blogs">
        <div className="section-header">
          <h2>Blogs</h2>
          <p className='text-black'>Explore expert-written articles covering diverse HR topics.</p>
        </div>

        <div className="articles-grid">
          {[
            {
              title: 'The Future of DEIB: Building Truly Inclusive Workplaces',
              description: 'Discover strategies to create equitable, diverse, and inclusive work environments.',
              published: 'January 2025',
            },
            {
              title: 'HR Analytics: Unlocking Data-Driven Decision Making',
              description: 'Learn how HR analytics can enhance recruitment, retention, and overall HR efficiency.',
              published: 'December 2024',
            },
            {
              title: 'The Rise of Employee Well-being: Beyond Traditional Benefits',
              description: 'Explore innovative approaches to supporting employee mental health and well-being.',
              published: 'November 2024',
            },
            {
              title: 'AI in Recruitment: Transforming Talent Acquisition',
              description: 'Understand how artificial intelligence is reshaping the hiring process for efficiency and fairness.',
              published: 'October 2024',
            },
          ].map((article, index) => (
            <div className="card article-card" key={index}>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <p className="meta">Published: {article.published}</p>
              <button className="cta-button">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="section news">
        <div className="section-header">
          <h2>News</h2>
          <p className='text-black'>Stay informed about key announcements, partnerships, and event highlights from BeingHR.</p>
        </div>

        <div className="articles-grid">
          {[
            {
              title: 'BeingHR Partners with CHRO Confex 2025',
              description: 'We are excited to announce our collaboration with the prestigious CHRO Confex, showcasing HR excellence.',
              date: 'January 2025',
            },
            {
              title: 'Launch of the DEIB Walkathon in Bangalore',
              description: 'Mark your calendars for May 1, 2025, as BeingHR hosts its first-ever walkathon to promote workplace inclusion.',
              date: 'December 2024',
            },
            {
              title: 'Mumbai HR Networking Night a Huge Success',
              description: 'Over 500 HR professionals came together for a night of networking and collaboration.',
              date: 'November 2024',
            },
            {
              title: 'Introducing the BeingHR Digital Platform',
              description:
                'Seamlessly connect with HR professionals, access resources, and stay updated with our new digital platform launching in June 2025.',
              date: 'December 2024',
            },
          ].map((news, index) => (
            <div className="card news-card" key={index}>
              <h4>{news.title}</h4>
              <p>{news.description}</p>
              <p className="meta">Date: {news.date}</p>
              <button className="cta-button">Read Full Story</button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories">
        <div className="section-header">
          <h2>Categories</h2>
          <p className='text-black'>Easily navigate through specific HR topics of your interest.</p>
        </div>
        <div className="category-grid">
          <div className="category-card">Diversity, Equity, Inclusion & Belonging (DEIB)</div>
          <div className="category-card">HR Technology</div>
          <div className="category-card">Leadership & Strategy</div>
          <div className="category-card">Employee Experience</div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <footer className="cta-footer">
        <h2>Stay Informed and Connected</h2>
        <div className="cta-buttons">
          <button className="cta-button">Read the Latest Blogs</button>
          <button className="cta-button">Explore News Updates</button>
          <button className="cta-button">Contribute to Our Blog</button>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
