/* =========================================================
   THỜI TRANG — script.js
   Dữ liệu bài viết + toàn bộ tương tác phía client (jQuery-free, vanilla)
   ========================================================= */

/* ---------- 1. DỮ LIỆU BÀI VIẾT ---------- */
const ARTICLES = [
  {
    id: "tt-01", cat: "tin-tuc", catLabel: "Tin Tức", hot: true,
    title: "Tuần lễ thời trang Việt Nam 2026 chính thức khởi động",
    excerpt: "Sự kiện quy tụ hơn 40 nhà thiết kế trong nước, mở màn cho mùa mốt Thu Đông với chủ đề tái chế bền vững.",
    img: "https://picsum.photos/seed/ttvn26/900/700",
    date: "02/07/2026", author: "Minh Anh",
    content: [
      "Tuần lễ thời trang Việt Nam 2026 vừa chính thức khai mạc tại Nhà thi đấu Phú Thọ, TP.HCM, thu hút sự tham gia của hơn 40 nhà thiết kế trong nước và quốc tế.",
      "Chủ đề xuyên suốt của sự kiện năm nay là “Tái sinh” — hướng đến các chất liệu tái chế, quy trình sản xuất xanh và câu chuyện thời trang tuần hoàn.",
      "Ban tổ chức cho biết đây là năm đầu tiên sự kiện mở thêm hạng mục dành riêng cho các nhà thiết kế trẻ dưới 25 tuổi, nhằm khuyến khích thế hệ sáng tạo mới của làng mốt Việt."
    ]
  },
  {
    id: "tt-02", cat: "tin-tuc", catLabel: "Tin Tức", hot: false,
    title: "Thương hiệu nội địa mở rộng chuỗi cửa hàng tại miền Trung",
    excerpt: "Ba thương hiệu thời trang nội địa công bố kế hoạch mở thêm 12 cửa hàng mới trong quý III.",
    img: "https://picsum.photos/seed/store2026/900/700",
    date: "28/06/2026", author: "Hải Yến",
    content: [
      "Ba thương hiệu thời trang nội địa vừa công bố kế hoạch mở rộng chuỗi cửa hàng tại khu vực miền Trung, tập trung vào các thành phố Đà Nẵng, Huế và Nha Trang.",
      "Đại diện các thương hiệu cho biết nhu cầu mua sắm thời trang tại khu vực này tăng trưởng ổn định trong hai năm gần đây, đặc biệt ở nhóm khách hàng trẻ."
    ]
  },
  {
    id: "tt-03", cat: "tin-tuc", catLabel: "Tin Tức", hot: false,
    title: "Hội chợ vải và phụ liệu ngành may lớn nhất năm sắp diễn ra",
    excerpt: "Sự kiện quy tụ hơn 200 gian hàng vải, phụ liệu từ các nhà cung cấp trong và ngoài nước.",
    img: "https://picsum.photos/seed/fabricfair/900/700",
    date: "20/06/2026", author: "Quốc Vương",
    content: [
      "Hội chợ vải và phụ liệu ngành may năm nay dự kiến quy tụ hơn 200 gian hàng đến từ các nhà cung cấp trong và ngoài nước, tập trung vào chất liệu bền vững.",
      "Đây là cơ hội để các nhà thiết kế trẻ và xưởng may nhỏ tiếp cận nguồn nguyên liệu chất lượng với mức giá hợp lý."
    ]
  },
  {
    id: "sk-01", cat: "su-kien", catLabel: "Sự Kiện", hot: true,
    title: "Đêm hội “Sắc Màu Áo Dài” tôn vinh trang phục truyền thống",
    excerpt: "Chương trình trình diễn hơn 100 mẫu áo dài cách tân, kết hợp giữa nét cổ điển và hơi thở hiện đại.",
    img: "https://picsum.photos/seed/aodai2026/900/700",
    date: "01/07/2026", author: "Thu Trang",
    content: [
      "Đêm hội “Sắc Màu Áo Dài” diễn ra tại Văn Miếu – Quốc Tử Giám đã mang đến hơn 100 mẫu thiết kế áo dài cách tân, kết hợp hài hòa giữa nét truyền thống và hơi thở đương đại.",
      "Chương trình có sự tham gia của nhiều nghệ nhân may áo dài lâu năm cùng các nhà thiết kế trẻ, tạo nên một bức tranh đa sắc về trang phục dân tộc."
    ]
  },
  {
    id: "sk-02", cat: "su-kien", catLabel: "Sự Kiện", hot: false,
    title: "Workshop “Phối đồ công sở tối giản” thu hút hàng trăm bạn trẻ",
    excerpt: "Buổi workshop chia sẻ bí quyết xây dựng tủ đồ công sở gọn nhẹ, dễ phối với ngân sách vừa phải.",
    img: "https://picsum.photos/seed/workshop26/900/700",
    date: "18/06/2026", author: "Lan Chi",
    content: [
      "Workshop “Phối đồ công sở tối giản” đã thu hút hơn 300 bạn trẻ tham dự, chia sẻ các nguyên tắc xây dựng tủ đồ gọn nhẹ nhưng vẫn linh hoạt cho nhiều dịp khác nhau.",
      "Diễn giả nhấn mạnh việc đầu tư vào các món đồ cơ bản, chất lượng tốt sẽ tiết kiệm chi phí hơn về lâu dài so với việc mua sắm theo trào lưu."
    ]
  },
  {
    id: "sk-03", cat: "su-kien", catLabel: "Sự Kiện", hot: false,
    title: "Cuộc thi thiết kế trẻ “Tân Binh Thời Trang” mùa 3 mở đơn đăng ký",
    excerpt: "Cuộc thi dành cho sinh viên ngành thiết kế thời trang trên toàn quốc chính thức nhận hồ sơ.",
    img: "https://picsum.photos/seed/tanbinh3/900/700",
    date: "10/06/2026", author: "Đức Anh",
    content: [
      "Cuộc thi “Tân Binh Thời Trang” mùa thứ 3 chính thức mở đơn đăng ký dành cho sinh viên các trường thiết kế trên toàn quốc.",
      "Giải thưởng năm nay bao gồm cơ hội thực tập tại các xưởng thiết kế lớn cùng học bổng phát triển bộ sưu tập cá nhân."
    ]
  },
  {
    id: "xh-01", cat: "xu-huong", catLabel: "Xu Hướng", hot: true,
    title: "Gam màu đất nung lên ngôi trong mùa mốt Thu 2026",
    excerpt: "Từ sàn diễn quốc tế đến đường phố, sắc nâu đất và cam cháy đang trở thành lựa chọn được ưa chuộng.",
    img: "https://picsum.photos/seed/terracotta26/900/700",
    date: "03/07/2026", author: "Bảo Ngọc",
    content: [
      "Gam màu đất nung, nâu cháy đang phủ sóng khắp các sàn diễn quốc tế và nhanh chóng lan tỏa xuống đường phố trong mùa mốt Thu 2026.",
      "Các stylist gợi ý phối gam màu này cùng chất liệu da lộn và len thô để tăng thêm chiều sâu cho tổng thể trang phục."
    ]
  },
  {
    id: "xh-02", cat: "xu-huong", catLabel: "Xu Hướng", hot: true,
    title: "Quần ống rộng trở lại mạnh mẽ, thay thế skinny jeans",
    excerpt: "Sau nhiều năm skinny jeans thống trị, dáng quần ống rộng đang giành lại vị thế trong tủ đồ giới trẻ.",
    img: "https://picsum.photos/seed/wideleg26/900/700",
    date: "25/06/2026", author: "Hoàng Long",
    content: [
      "Dáng quần ống rộng đang quay trở lại mạnh mẽ, dần thay thế vị trí của skinny jeans vốn thống trị suốt gần một thập kỷ.",
      "Kiểu quần này được đánh giá cao nhờ sự thoải mái, dễ phối cùng nhiều kiểu áo và phù hợp với nhiều dáng người khác nhau."
    ]
  },
  {
    id: "xh-03", cat: "xu-huong", catLabel: "Xu Hướng", hot: false,
    title: "Phụ kiện bản to: túi xách và thắt lưng “oversized” lên ngôi",
    excerpt: "Túi xách khổ lớn, thắt lưng bản to đang trở thành điểm nhấn không thể thiếu trong outfit mùa mới.",
    img: "https://picsum.photos/seed/accessorybig/900/700",
    date: "15/06/2026", author: "Minh Anh",
    content: [
      "Phụ kiện bản to đang trở thành điểm nhấn quan trọng trong các outfit mùa mới, từ túi xách khổ lớn đến thắt lưng bản rộng.",
      "Xu hướng này giúp cân bằng tổng thể trang phục, đặc biệt phù hợp với các thiết kế tối giản, ít họa tiết."
    ]
  },
  {
    id: "ld-01", cat: "lam-dep", catLabel: "Làm Đẹp", hot: true,
    title: "5 bước chăm sóc da cơ bản cho mùa hè oi bức",
    excerpt: "Quy trình dưỡng da tối giản nhưng hiệu quả, giúp làn da khỏe mạnh suốt những ngày nắng nóng.",
    img: "https://picsum.photos/seed/skincare26/900/700",
    date: "04/07/2026", author: "Thanh Hà",
    content: [
      "Mùa hè là thời điểm làn da dễ đổ dầu và mất nước do tác động của nắng nóng, vì vậy một quy trình chăm sóc da tối giản nhưng đúng cách là điều cần thiết.",
      "Các chuyên gia khuyến nghị ưu tiên các bước làm sạch, cấp ẩm nhẹ và chống nắng đầy đủ thay vì sử dụng quá nhiều sản phẩm cùng lúc."
    ]
  },
  {
    id: "ld-02", cat: "lam-dep", catLabel: "Làm Đẹp", hot: false,
    title: "Kiểu tóc layer ngắn “gây sốt” mùa hè này",
    excerpt: "Kiểu tóc mang lại cảm giác gọn nhẹ, trẻ trung, dễ dàng kết hợp với nhiều phong cách trang phục.",
    img: "https://picsum.photos/seed/haircut26/900/700",
    date: "22/06/2026", author: "Ngọc Diệp",
    content: [
      "Kiểu tóc layer ngắn đang trở thành lựa chọn được nhiều bạn trẻ yêu thích trong mùa hè này nhờ cảm giác gọn nhẹ, mát mẻ.",
      "Kiểu tóc này khá linh hoạt, có thể phối hợp với nhiều phong cách trang phục từ năng động đến thanh lịch."
    ]
  },
  {
    id: "ld-03", cat: "lam-dep", catLabel: "Làm Đẹp", hot: false,
    title: "Trang điểm “mộc” lên ngôi trên mạng xã hội",
    excerpt: "Phong cách trang điểm tự nhiên, tôn da thật đang được nhiều người theo đuổi thay vì lớp nền dày.",
    img: "https://picsum.photos/seed/makeup26/900/700",
    date: "12/06/2026", author: "Bảo Ngọc",
    content: [
      "Phong cách trang điểm “mộc”, tôn lên vẻ tự nhiên của làn da đang dần thay thế xu hướng lớp nền dày, che phủ toàn diện.",
      "Nhiều người dùng mạng xã hội chia sẻ rằng phong cách này giúp họ cảm thấy tự tin hơn với vẻ ngoài thật của mình."
    ]
  }
];

const CATEGORY_META = {
  "tin-tuc":  { label: "Tin Tức",  page: "tin-tuc.html",  desc: "Cập nhật những sự kiện, hoạt động mới nhất của làng thời trang trong và ngoài nước." },
  "su-kien":  { label: "Sự Kiện",  page: "su-kien.html",  desc: "Điểm qua các show diễn, workshop và cuộc thi thời trang đáng chú ý." },
  "xu-huong": { label: "Xu Hướng", page: "xu-huong.html", desc: "Những xu hướng phối đồ, chất liệu và màu sắc đang được yêu thích." },
  "lam-dep":  { label: "Làm Đẹp", page: "lam-dep.html",  desc: "Bí quyết chăm sóc da, tóc và trang điểm để tự tin hơn mỗi ngày." }
};

function getArticle(id){ return ARTICLES.find(a => a.id === id); }
function getByCategory(cat){ return ARTICLES.filter(a => a.cat === cat); }
function getHot(limit){ return ARTICLES.filter(a => a.hot).slice(0, limit || ARTICLES.length); }

/* ---------- 2. TIỆN ÍCH DOM ---------- */
function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function cardTemplate(a){
  return `
  <a class="card" href="chi-tiet.html?id=${a.id}">
    <div class="card-media"><img src="${a.img}" alt="${a.title}" loading="lazy"></div>
    <div class="card-body">
      <span class="tag ${a.hot ? "hot" : ""}">${a.hot ? "Đang hot" : a.catLabel}</span>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <div class="card-meta"><span>${a.catLabel}</span><span>${a.date}</span></div>
    </div>
  </a>`;
}

/* ---------- 3. TRẠNG THÁI NAV ĐANG HOẠT ĐỘNG ---------- */
function markActiveNav(){
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(link => {
    if (link.dataset.page === current) link.classList.add("active");
  });
}

/* ---------- 4. ĐĂNG NHẬP / TRẠNG THÁI THÀNH VIÊN ---------- */
const AUTH_KEY = "tt_current_user";
const USERS_KEY = "tt_users";

function getUsers(){
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch(e){ return []; }
}
function saveUsers(list){ localStorage.setItem(USERS_KEY, JSON.stringify(list)); }
function getCurrentUser(){ return localStorage.getItem(AUTH_KEY); }
function setCurrentUser(name){ localStorage.setItem(AUTH_KEY, name); }
function logoutUser(){ localStorage.removeItem(AUTH_KEY); location.reload(); }

function renderNavUser(){
  const box = document.querySelector("[data-nav-user]");
  if (!box) return;
  const user = getCurrentUser();
  if (user){
    box.innerHTML = `
      <span class="hide-mobile">Xin chào, <strong>${user}</strong></span>
      <button class="btn small outline" data-logout>Đăng xuất</button>`;
    box.querySelector("[data-logout]").addEventListener("click", logoutUser);
  } else {
    box.innerHTML = `<a class="btn small" href="dang-nhap.html">Đăng nhập</a>`;
  }
}

function initAuthForms(){
  const tabs = document.querySelectorAll(".auth-tab");
  const forms = document.querySelectorAll(".auth-form");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      forms.forEach(f => f.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`.auth-form[data-form="${tab.dataset.tab}"]`).classList.add("active");
    });
  });

  const loginForm = document.querySelector('[data-form="login"]');
  if (loginForm){
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value;
      const msg = loginForm.querySelector(".auth-msg");
      const users = getUsers();
      const found = users.find(u => u.username === username && u.password === password);
      if (!username || !password){
        showMsg(msg, "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.", "err");
      } else if (!found){
        showMsg(msg, "Sai tên đăng nhập hoặc mật khẩu. Hãy đăng ký nếu chưa có tài khoản.", "err");
      } else {
        setCurrentUser(found.username);
        showMsg(msg, "Đăng nhập thành công! Đang chuyển về trang chủ...", "ok");
        setTimeout(() => location.href = "index.html", 900);
      }
    });
  }

  const registerForm = document.querySelector('[data-form="register"]');
  if (registerForm){
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = registerForm.username.value.trim();
      const password = registerForm.password.value;
      const confirm = registerForm.confirm.value;
      const msg = registerForm.querySelector(".auth-msg");
      const users = getUsers();

      if (!username || !password){
        showMsg(msg, "Vui lòng nhập đầy đủ thông tin.", "err");
        return;
      }
      if (password !== confirm){
        showMsg(msg, "Mật khẩu nhập lại không khớp.", "err");
        return;
      }
      if (users.some(u => u.username === username)){
        showMsg(msg, "Tên đăng nhập đã tồn tại, vui lòng chọn tên khác.", "err");
        return;
      }
      users.push({ username, password });
      saveUsers(users);
      setCurrentUser(username);
      showMsg(msg, "Tạo tài khoản thành công! Đang chuyển về trang chủ...", "ok");
      setTimeout(() => location.href = "index.html", 900);
    });
  }
}

function showMsg(node, text, type){
  node.textContent = text;
  node.className = `auth-msg show ${type}`;
}

/* ---------- 5. BÌNH LUẬN ---------- */
function commentsKey(articleId){ return `tt_comments_${articleId}`; }

function getComments(articleId){
  try { return JSON.parse(localStorage.getItem(commentsKey(articleId))) || []; }
  catch(e){ return []; }
}
function saveComments(articleId, list){
  localStorage.setItem(commentsKey(articleId), JSON.stringify(list));
}

function renderComments(articleId){
  const list = document.querySelector("[data-comment-list]");
  if (!list) return;
  const comments = getComments(articleId);
  if (comments.length === 0){
    list.innerHTML = `<p class="comment-empty">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ ý kiến!</p>`;
    return;
  }
  list.innerHTML = comments.map(c => `
    <div class="comment">
      <div class="comment-avatar">${c.name.charAt(0).toUpperCase()}</div>
      <div>
        <span class="comment-name">${c.name}</span><span class="comment-time">${c.time}</span>
        <p class="comment-text">${c.text}</p>
      </div>
    </div>
  `).join("");
}

function initCommentForm(articleId){
  const form = document.querySelector("[data-comment-form]");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value.trim() || getCurrentUser() || "Khách";
    const text = form.text.value.trim();
    if (!text) return;
    const comments = getComments(articleId);
    comments.unshift({
      name, text,
      time: new Date().toLocaleString("vi-VN", { hour:"2-digit", minute:"2-digit", day:"2-digit", month:"2-digit" })
    });
    saveComments(articleId, comments);
    form.text.value = "";
    renderComments(articleId);
  });
}

/* ---------- 6. TRANG CHI TIẾT ---------- */
function initArticlePage(){
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || ARTICLES[0].id;
  const article = getArticle(id) || ARTICLES[0];

  document.title = `${article.title} | Thời Trang`;

  const set = (sel, html) => { const n = document.querySelector(sel); if (n) n.innerHTML = html; };
  set("[data-a-cat]", article.catLabel);
  set("[data-a-title]", article.title);
  set("[data-a-author]", article.author);
  set("[data-a-date]", article.date);
  const cover = document.querySelector("[data-a-cover]");
  if (cover){ cover.src = article.img; cover.alt = article.title; }
  const body = document.querySelector("[data-a-body]");
  if (body) body.innerHTML = article.content.map(p => `<p>${p}</p>`).join("");

  const related = getByCategory(article.cat).filter(a => a.id !== article.id).slice(0, 4);
  const relatedBox = document.querySelector("[data-related]");
  if (relatedBox){
    relatedBox.innerHTML = related.map(r => `
      <a class="related-item" href="chi-tiet.html?id=${r.id}">
        <img src="${r.img}" alt="${r.title}">
        <div><h5>${r.title}</h5><span>${r.date}</span></div>
      </a>`).join("") || `<p class="comment-empty">Chưa có bài liên quan.</p>`;
  }

  renderComments(id);
  initCommentForm(id);
}

/* ---------- 7. TRANG DANH MỤC ---------- */
function initCategoryPage(catKey){
  const meta = CATEGORY_META[catKey];
  const items = getByCategory(catKey);
  const title = document.querySelector("[data-cat-title]");
  const desc = document.querySelector("[data-cat-desc]");
  if (title) title.textContent = meta.label;
  if (desc) desc.textContent = meta.desc;
  const grid = document.querySelector("[data-cat-grid]");
  if (grid) grid.innerHTML = items.map(cardTemplate).join("");
}

/* ---------- 8. TRANG CHỦ ---------- */
function initHomePage(){
  const hotGrid = document.querySelector("[data-hot-grid]");
  if (hotGrid) hotGrid.innerHTML = getHot(3).map(cardTemplate).join("");

  Object.keys(CATEGORY_META).forEach(cat => {
    const grid = document.querySelector(`[data-home-grid="${cat}"]`);
    if (grid) grid.innerHTML = getByCategory(cat).slice(0, 3).map(cardTemplate).join("");
  });
}

/* ---------- 9. MENU DI ĐỘNG ---------- */
function initMobileMenu(){
  const btn = document.querySelector("[data-hamburger]");
  const nav = document.querySelector(".nav-links");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    nav.style.display = open ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "64px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "var(--paper)";
    nav.style.padding = "18px 28px";
    nav.style.borderBottom = "1px solid var(--line)";
  });
}

/* ---------- 10. KHỞI TẠO CHUNG ---------- */
document.addEventListener("DOMContentLoaded", () => {
  markActiveNav();
  renderNavUser();
  initMobileMenu();
  initAuthForms();

  const page = document.body.dataset.page;
  if (page === "home") initHomePage();
  if (page === "article") initArticlePage();
  if (page && CATEGORY_META[page]) initCategoryPage(page);
});
