/* ========================================
   Admin Dashboard
   ======================================== */

function renderAdmin() {
  const orders = JSON.parse(localStorage.getItem('allsellz_orders') || '[]');
  const totalRevenue = orders.reduce((s,o) => s + o.total, 0);

  app.innerHTML = `
    <div class="admin-layout">
      <div class="admin-header">
        <div>
          <h1 style="font-family:'Space Grotesk',sans-serif;font-size:32px;">Admin Dashboard</h1>
          <p style="color:var(--text-light)">Welcome back! Here's what's happening in your store.</p>
        </div>
        <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Product</button>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="icon"><i class="fas fa-rupee-sign"></i></div>
          <h3>₹${(totalRevenue + 245680).toLocaleString('en-IN')}</h3>
          <p>Total Revenue</p>
          <div class="change up"><i class="fas fa-arrow-up"></i> +12.5% this month</div>
        </div>
        <div class="stat-card">
          <div class="icon"><i class="fas fa-box"></i></div>
          <h3>${orders.length + 1284}</h3>
          <p>Total Orders</p>
          <div class="change up"><i class="fas fa-arrow-up"></i> +8.2% this month</div>
        </div>
        <div class="stat-card">
          <div class="icon"><i class="fas fa-users"></i></div>
          <h3>8,642</h3>
          <p>Total Customers</p>
          <div class="change up"><i class="fas fa-arrow-up"></i> +15.3% this month</div>
        </div>
        <div class="stat-card">
          <div class="icon"><i class="fas fa-tags"></i></div>
          <h3>${PRODUCTS.length}</h3>
          <p>Total Products</p>
          <div class="change down"><i class="fas fa-arrow-down"></i> 3 out of stock</div>
        </div>
      </div>

      <div class="admin-panels">
        <div class="admin-panel">
          <h3>Sales Overview</h3>
          <canvas id="salesChart" height="120"></canvas>
        </div>
        <div class="admin-panel">
          <h3>Top Products</h3>
          ${PRODUCTS.filter(p=>p.bestseller).slice(0,5).map(p=>`
            <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">
              <img src="${p.image}" style="width:48px;height:48px;border-radius:8px;object-fit:cover;" />
              <div style="flex:1;">
                <p style="font-size:13px;font-weight:600;">${p.title.slice(0,28)}...</p>
                <p style="font-size:12px;color:var(--text-light);">${p.reviews} sold · ₹${p.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="admin-panel">
        <h3>Recent Orders</h3>
        <table class="admin-table">
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            ${(orders.length ? orders.slice(-5).reverse() : [
              {id:'ORD-2841', customer:'Aarav Sharma', date:'2026-05-12', total:24999, status:'shipped'},
              {id:'ORD-2840', customer:'Priya Patel', date:'2026-05-12', total:8990, status:'delivered'},
              {id:'ORD-2839', customer:'Rohan Mehta', date:'2026-05-11', total:64999, status:'pending'},
              {id:'ORD-2838', customer:'Sneha Roy', date:'2026-05-11', total:1499, status:'delivered'},
              {id:'ORD-2837', customer:'Vikram Iyer', date:'2026-05-10', total:11500, status:'shipped'},
            ]).map(o => `
              <tr>
                <td><strong>${o.id || ('ORD-'+ Math.floor(Math.random()*9000+1000))}</strong></td>
                <td>${o.customer || o.shipping?.firstName + ' ' + o.shipping?.lastName || 'Customer'}</td>
                <td>${o.date || new Date(o.createdAt).toLocaleDateString()}</td>
                <td>₹${(o.total).toLocaleString('en-IN')}</td>
                <td><span class="status-tag status-${o.status || 'pending'}">${(o.status||'pending').toUpperCase()}</span></td>
                <td><button class="btn btn-ghost" style="padding:6px 12px;font-size:12px;"><i class="fas fa-eye"></i></button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Render sales chart
  setTimeout(() => {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [45000,52000,48000,71000,68000,82000,79000,95000,88000,104000,98000,125000],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          tension: 0.4,
          fill: true,
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: '#a855f7',
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: 'rgba(128,128,128,0.1)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }, 50);
}
