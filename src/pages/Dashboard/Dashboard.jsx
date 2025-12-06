import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import Style from './Dashboard.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- DATA SOURCES ---

  // 1. Financial Highlights (Top Stats)
  const statsData = [
    { id: 1, label: 'Net Worth', value: 125500.50, prefix: '$', trend: 'up', color: '#111827' },
    { id: 2, label: 'Monthly Inflow', value: 8400, prefix: '$', change: '+2.5%', trend: 'up', color: '#059669' },
    { id: 3, label: 'Monthly Outflow', value: 3250, prefix: '$', change: '-1.1%', trend: 'down', color: '#9d1d2c' },
    { id: 4, label: 'Total Debt', value: 15000, prefix: '$', change: '-5%', trend: 'down', color: '#1e3a8a' }
  ];

  // 2. NEW: Account Overview Data
  const accountsData = [
    { id: 1, type: 'Checking Account', number: '**** 4582', balance: 8500.25, available: 8500.25 },
    { id: 2, type: 'Premier Savings', number: '**** 9921', balance: 92000.00, rate: '4.5% APY' },
    { id: 3, type: 'Visa Signature Card', number: '**** 1145', balance: 1250.50, limit: '$15,000 Limit', isDebt: true },
  ];

  // 3. Weekly Transaction Data (Income vs Expense) for SVG Chart
  const transactionHistory = [
    { day: 'Mon', income: 2500, expense: 800 },
    { day: 'Tue', income: 100, expense: 1200 },
    { day: 'Wed', income: 1800, expense: 450 },
    { day: 'Thu', income: 500, expense: 300 },
    { day: 'Fri', income: 3200, expense: 900 },
    { day: 'Sat', income: 200, expense: 1500 },
    { day: 'Sun', income: 100, expense: 600 }
  ];

  // 4. Spending Categories (Donut Chart)
  const spendingCategories = [
    { source: 'Housing & Utilities', value: 35, color: '#9d1d2c' },
    { source: 'Food & Dining', value: 25, color: '#f59e0b' },
    { source: 'Transportation', value: 15, color: '#111827' },
    { source: 'Shopping & Misc', value: 25, color: '#9ca3af' }
  ];

  // 5. Recent Transactions List
  const recentTxns = [
    { id: 1, title: 'Starbucks Coffee', date: 'Today, 8:30 AM', amount: '-$12.50', type: 'debit', icon: '☕' },
    { id: 2, title: 'Payroll Deposit', date: 'Yesterday', amount: '+$3,200.00', type: 'credit', icon: '💰' },
    { id: 3, title: 'Amazon Purchase', date: 'Oct 25', amount: '-$84.99', type: 'debit', icon: '📦' },
    { id: 4, title: 'Electric Bill Auto-Pay', date: 'Oct 24', amount: '-$120.00', type: 'debit', icon: '⚡' },
    { id: 5, title: 'Transfer to Savings', date: 'Oct 22', amount: '-$500.00', type: 'transfer', icon: '🔄' },
  ];

  // --- CHART RENDERERS ---

  // SVG Combo Chart (Bars + Lines)
  const RenderComboChart = () => {
    const svgRef = useRef(null);
    const width = 600; // Internal SVG coordinate space width
    const height = 250; // Internal SVG coordinate space height
    const padding = 30;
    const chartHeight = height - padding * 2;
    const chartWidth = width - padding * 2;
    
    const maxVal = 3500; // Max Y axis value
    const barWidth = 12;
    const gap = chartWidth / (transactionHistory.length - 1);

    // Helper to calculate Y coordinate based on value
    const getY = (val) => chartHeight + padding - (val / maxVal) * chartHeight;
    // Helper to calculate X coordinate based on index
    const getX = (index) => padding + index * gap;

    // Generate Line Paths
    let incomePathStr = "";
    let expensePathStr = "";

    transactionHistory.forEach((item, index) => {
      const x = getX(index);
      const incomeY = getY(item.income);
      const expenseY = getY(item.expense);
      
      const pointCmd = index === 0 ? "M" : "L";
      // Connect to the center top of the bar
      incomePathStr += `${pointCmd} ${x + barWidth/2} ${incomeY} `;
      expensePathStr += `${pointCmd} ${x + barWidth/2 + barWidth + 4} ${expenseY} `;
    });

    return (
      <div className={Style.chartContainer}>
        <svg viewBox={`0 0 ${width} ${height}`} className={Style.comboSvg} ref={svgRef}>
          {/* Grid Lines (Optional) */}
          <line x1={padding} y1={chartHeight + padding} x2={width - padding} y2={chartHeight + padding} stroke="#e5e7eb" />
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#f3f4f6" strokeDasharray="4" />

          {/* Bars & Labels */}
          {transactionHistory.map((item, index) => {
            const x = getX(index);
            const incomeBarHeight = (item.income / maxVal) * chartHeight;
            const expenseBarHeight = (item.expense / maxVal) * chartHeight;
            const zeroY = chartHeight + padding;

            return (
              <g key={index}>
                {/* Income Bar */}
                <rect
                  x={x}
                  y={zeroY - incomeBarHeight}
                  width={barWidth}
                  height={incomeBarHeight}
                  fill="#059669"
                  rx="4"
                  className={Style.svgBar}
                />
                {/* Expense Bar */}
                <rect
                  x={x + barWidth + 4} // Offset expense bar
                  y={zeroY - expenseBarHeight}
                  width={barWidth}
                  height={expenseBarHeight}
                  fill="#9d1d2c"
                  rx="4"
                  className={Style.svgBar}
                />
                 {/* X Axis Label */}
                 <text x={x + barWidth + 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#9ca3af">
                  {item.day}
                </text>
              </g>
            );
          })}

          {/* Connecting Lines (Drawn on top of bars) */}
          <path d={incomePathStr} fill="none" stroke="#059669" strokeWidth="2" className={Style.svgLine} />
          <path d={expensePathStr} fill="none" stroke="#9d1d2c" strokeWidth="2" className={Style.svgLine} />

        </svg>
        
        {/* Y-Axis Labels (Outside SVG for easier positioning) */}
        <div className={Style.yAxisOverlay}>
          <span>$3.5k</span>
          <span>$1.75k</span>
          <span>0</span>
        </div>
      </div>
    );
  };

  const RenderSpendingChart = () => {
    let currentAngle = 0;
    const radius = 40;
    
    return (
      <div className={Style.trafficDonut}>
        <svg viewBox="0 0 100 100" className={Style.donutSvg}>
          {spendingCategories.map((item, index) => {
            const segmentAngle = (item.value / 100) * 360;
            // Ensure largeArc is 0 if angle is exactly 180 to prevent rendering issues
            const largeArc = segmentAngle > 180 ? 1 : 0;
            
            const x1 = 50 + radius * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 50 + radius * Math.sin((currentAngle * Math.PI) / 180);
            const x2 = 50 + radius * Math.cos(((currentAngle + segmentAngle) * Math.PI) / 180);
            const y2 = 50 + radius * Math.sin(((currentAngle + segmentAngle) * Math.PI) / 180);
            
            currentAngle += segmentAngle;
            
            return (
              <path
                key={index}
                d={`M50,50 L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`}
                fill={item.color}
                stroke="#ffffff"
                strokeWidth="1"
                className={Style.donutSegment}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            );
          })}
          <circle cx="50" cy="50" r="22" fill="#ffffff" />
        </svg>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className={Style.loaderWrapper}>
          <div className={Style.loader}></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={Style.dashboardWrapper}>
        
        {/* Header Section - Generalized */}
        <div className={Style.dashboardHeader}>
          <div>
            <h1 className={Style.title}>Financial Dashboard</h1>
            <p className={Style.subtitle}>Your overview for Oct 26, 2025.</p>
          </div>
          <div className={Style.headerActions}>
             {/* Notification Icon Added */}
            <button className={Style.iconButton} onClick={() => navigate('Error')}>
              <i className="fa-regular fa-bell"></i>
              <span className={Style.notificationBadge}>3</span>
            </button>
            <div className={Style.headerButtons}>
              <button className={Style.primaryButton} onClick={() => navigate('Error')}>
                <i className="fa-solid fa-money-bill-transfer"></i> Transfer
              </button>
              <button className={Style.secondaryButton} onClick={() => navigate('Error')}>
                <i className="fa-solid fa-download"></i> Statements
              </button>
            </div>
          </div>
        </div>

        {/* 1. Top Stats Grid */}
        <div className={Style.statsGrid}>
          {statsData.map((stat) => (
            <div key={stat.id} className={Style.statCard} style={{ borderTop: `3px solid ${stat.color}` }}>
              <div className={Style.statHeader}>
                <h3 className={Style.statLabel}>{stat.label}</h3>
                {stat.change && (
                  <span className={`${Style.statChange} ${stat.trend === 'up' ? Style.up : Style.down}`}>
                    {stat.change}
                  </span>
                )}
              </div>
              <div className={Style.statValue} style={{ color: stat.color }}>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={1.2}
                  separator=","
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                  prefix={stat.prefix}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 2. NEW SECTION: Your Accounts Overview ("Stuff contents") */}
        <h2 className={Style.sectionHeading}>Your Accounts</h2>
        <div className={Style.accountsGrid}>
          {accountsData.map((acct) => (
            <div key={acct.id} className={Style.accountCard}>
              <div className={Style.acctTop}>
                <div>
                  <h3 className={Style.acctType}>{acct.type}</h3>
                  <p className={Style.acctNumber}>{acct.number}</p>
                </div>
                <i className={`fa-solid ${acct.isDebt ? 'fa-credit-card' : 'fa-piggy-bank'} ${Style.acctIcon}`}></i>
              </div>
              <div className={Style.acctBalance}>
                ${acct.balance.toLocaleString(undefined, {minimumFractionDigits: 2})}
              </div>
              <div className={Style.acctFooter}>
                <span>{acct.available ? `Available: $${acct.available.toLocaleString()}` : acct.rate || acct.limit}</span>
              </div>
            </div>
          ))}
        </div>


        {/* 3. Main Layout: Charts */}
        <div className={Style.mainGrid}>
          {/* Left: Income/Expense History with Lines */}
          <div className={Style.chartSection}>
            <div className={Style.sectionHeader}>
              <div>
                <h2 className={Style.sectionTitle}>Weekly Cash Flow</h2>
              </div>
               <div className={Style.chartLegend}>
                <div className={Style.legendItem}>
                  <span className={`${Style.legendDot} ${Style.incomeDot}`}></span> Income
                </div>
                <div className={Style.legendItem}>
                  <span className={`${Style.legendDot} ${Style.expenseDot}`}></span> Expense
                </div>
              </div>
            </div>
            <div className={Style.chartWrapper}>
              <RenderComboChart />
            </div>
          </div>

          {/* Right: Spending Categories */}
          <div className={Style.trafficSection}>
            <div className={Style.sectionHeader}>
              <h2 className={Style.sectionTitle}>Spending Breakdown</h2>
               <span className={Style.sectionPeriod}>Oct 2025</span>
            </div>
            <div className={Style.trafficContent}>
              <RenderSpendingChart />
              <div className={Style.trafficList}>
                {spendingCategories.map((cat, index) => (
                  <div key={index} className={Style.trafficItem}>
                    <div style={{display:'flex', alignItems:'center'}}>
                      <span className={Style.trafficDot} style={{ backgroundColor: cat.color }}></span>
                      <span className={Style.trafficSource}>{cat.source}</span>
                    </div>
                    <span className={Style.trafficValue}>{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom: Recent Transactions */}
        <div className={Style.txSection}>
          <div className={Style.sectionHeader}>
            <h2 className={Style.sectionTitle}>Recent Activity</h2>
            <button className={Style.viewAllButton} onClick={() => navigate('Error')}>View All Transactions</button>
          </div>
          <div className={Style.txList}>
            {recentTxns.map((tx) => (
              <div key={tx.id} className={Style.txRow}>
                <div className={Style.txLeft}>
                  <div className={Style.txIcon}>{tx.icon}</div>
                  <div>
                    <h4 className={Style.txTitle}>{tx.title}</h4>
                    <span className={Style.txDate}>{tx.date}</span>
                  </div>
                </div>
                <div className={`${Style.txAmount} ${tx.type === 'credit' ? Style.credit : (tx.type === 'debit' ? Style.debit : Style.transfer)}`}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Dashboard;