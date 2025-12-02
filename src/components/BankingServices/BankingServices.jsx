import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from './BankingServices.module.css';

const BankingServices = () => {
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const servicesData = [
    {
      id: 1,
      title: "Savings Accounts",
      description: "High-interest savings accounts with zero maintenance fees and instant access.",
      type: "Accounts",
      icon: "💰",
      color: "#9d1d2c", // Brand Red
    },
    {
      id: 2,
      title: "Home Loans",
      description: "Affordable housing loans with flexible tenure and quick processing.",
      type: "Loans",
      icon: "🏠",
      color: "#1e3a8a", // Deep Blue
    },
    {
      id: 3,
      title: "Premium Credit Cards",
      description: "Exclusive rewards, airport lounge access, and cashback on every spend.",
      type: "Cards",
      icon: "💳",
      color: "#b45309", // Gold/Bronze
    },
    {
      id: 4,
      title: "Fixed Deposits",
      description: "Secure your future with guaranteed returns and senior citizen benefits.",
      type: "Investment",
      icon: "📈",
      color: "#059669", // Green
    },
    {
      id: 5,
      title: "Personal Loans",
      description: "Instant funds for your personal needs with minimal documentation.",
      type: "Loans",
      icon: "🤝",
      color: "#1e3a8a",
    },
    {
      id: 6,
      title: "Current Accounts",
      description: "Seamless business banking solutions for enterprises and startups.",
      type: "Accounts",
      icon: "🏢",
      color: "#9d1d2c",
    },
    {
      id: 7,
      title: "Car Insurance",
      description: "Comprehensive coverage for your vehicle against accidents and theft.",
      type: "Insurance",
      icon: "🚗",
      color: "#7c3aed", // Purple
    },
    {
      id: 8,
      title: "Mutual Funds",
      description: "Expert-managed portfolios to grow your wealth over the long term.",
      type: "Investment",
      icon: "📊",
      color: "#059669",
    },
    {
      id: 9,
      title: "Life Insurance",
      description: "Secure your family's financial future with our term life plans.",
      type: "Insurance",
      icon: "🛡️",
      color: "#7c3aed",
    },
    {
      id: 10,
      title: "Forex Services",
      description: "Competitive exchange rates for travel cards and international transfers.",
      type: "Accounts",
      icon: "🌍",
      color: "#9d1d2c",
    },
    {
      id: 11,
      title: "Gold Loans",
      description: "Unlock the value of your gold with low-interest instant loans.",
      type: "Loans",
      icon: "✨",
      color: "#b45309",
    },
    {
      id: 12,
      title: "Retirement Plans",
      description: "Pension schemes designed to provide financial independence post-retirement.",
      type: "Investment",
      icon: "☂️",
      color: "#1e3a8a",
    },
  ];

  const serviceTypes = [
    "All",
    ...new Set(servicesData.map((service) => service.type)),
  ];

  const filteredAndSortedServices = useMemo(() => {
    let filtered = servicesData.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        selectedType === "All" || service.type === selectedType;
      return matchesSearch && matchesType;
    });

    // Sort services
    if (sortOrder === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "type") {
      filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    return filtered;
  }, [searchTerm, selectedType, sortOrder]);

  const handleDetailsClick = () => {
    navigate("/Error"); // Simplified route
  };

  const handleCategoryChange = (category) => {
    setSelectedType(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term) {
      setSelectedType("All");
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setSortOrder("default");
  };

  return (
    <div data-aos="fade" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Banking Products</h1>
        <p className={styles.subtitle}>
          Explore a wide range of financial solutions tailored to help you grow, save, and secure your future.
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search loans, cards, accounts..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                className={styles.clearSearch}
                onClick={() => handleSearchChange("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label htmlFor="nameSelect" className={styles.filterLabel}>
              Category:
            </label>
            <select
              id="nameSelect"
              value={selectedType}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={styles.filterSelect}
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="nameSelectSort" className={styles.filterLabel}>
              Sort by:
            </label>
            <select
              id="nameSelectSort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="type">Type</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.resultsInfo}>
        <p className={styles.resultsCount}>
          Showing {filteredAndSortedServices.length} of {servicesData.length}{" "}
          products
          {selectedType !== "All" && ` in ${selectedType}`}
        </p>
        {(searchTerm || selectedType !== "All") && (
          <button className={styles.clearFilters} onClick={clearAllFilters}>
            Clear Filters
          </button>
        )}
      </div>

      <div className={styles.servicesGrid} data-aos="fade-up">
        {filteredAndSortedServices.map((service) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            style={{
              // Minimalist: Top border color instead of full glow
              borderTop: `4px solid ${service.color}`, 
            }}
          >
            <div className={styles.cardHeader}>
              <div
                className={styles.iconContainer}
                style={{ backgroundColor: `${service.color}15` }} // Very light tint of brand color
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
              </div>
              <div
                className={styles.typeBadge}
                style={{ backgroundColor: service.color }}
              >
                {service.type}
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle} style={{color: '#1f2937'}}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <button
                className={styles.detailsButton}
                onClick={handleDetailsClick}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedServices.length === 0 && (
        <div className={styles.noResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No products found</h3>
          <p className={styles.noResultsText}>
            {searchTerm
              ? `No results for "${searchTerm}".`
              : `No products available in ${selectedType}.`}
          </p>
          <button className={styles.resetButton} onClick={clearAllFilters}>
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default BankingServices;