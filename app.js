// ═══════════════════════════════════════════════════════════
//  CodeLearn Platform — app.js
//  Vanilla JS implementation of the React/Framer Motion design
// ═══════════════════════════════════════════════════════════

// ── CURRICULUM DATA ──────────────────────────────────────────
const CURRICULUM = [
  {
    id: "html", label: "HTML", color: "#E34F26",
    modules: [
      {
        id: "html-1", title: "Pengenalan HTML", duration: "15 min",
        theory: `## Apa itu HTML?

HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML mendeskripsikan **struktur** dari halaman web menggunakan elemen-elemen yang merupakan blok pembangun.

### Struktur Dasar

Setiap dokumen HTML memiliki struktur dasar yang harus diikuti:

- \`<!DOCTYPE html>\` — deklarasi tipe dokumen
- \`<html>\` — elemen root
- \`<head>\` — metadata dokumen
- \`<body>\` — konten yang terlihat

### Elemen dan Tag

Elemen HTML didefinisikan oleh **tag pembuka**, **konten**, dan **tag penutup**:

\`\`\`html
<tagname>Konten di sini...</tagname>
\`\`\`

Beberapa elemen tidak memiliki konten dan disebut **void elements**, seperti \`<br>\`, \`<img>\`, dan \`<input>\`.`,
        code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Pertamaku</title>
</head>
<body>
  <h1>Halo, Dunia! 👋</h1>
  <p>Ini adalah paragraf pertamaku.</p>
  <p>HTML itu <strong>mudah</strong> dan <em>menyenangkan</em>!</p>
</body>
</html>`,
        quiz: {
          question: "Elemen apa yang berfungsi sebagai 'root' dari seluruh halaman HTML?",
          options: ["<body>", "<html>", "<head>", "<root>"],
          correct: 1
        }
      },
      {
        id: "html-2", title: "Tag Teks & Heading", duration: "12 min",
        theory: `## Heading dan Paragraf

HTML menyediakan 6 level heading dari \`<h1>\` hingga \`<h6>\`. Heading \`<h1>\` adalah yang paling penting dan paling besar, sementara \`<h6>\` adalah yang terkecil.

### Elemen Teks Penting

| Tag | Fungsi |
|-----|--------|
| \`<h1>–<h6>\` | Judul / heading |
| \`<p>\` | Paragraf teks |
| \`<strong>\` | Teks tebal (penting) |
| \`<em>\` | Teks miring (penekanan) |
| \`<span>\` | Inline container |
| \`<br>\` | Line break |

### Best Practice

Gunakan hanya **satu \`<h1>\`** per halaman untuk SEO yang baik. Heading harus membentuk hierarki yang logis.`,
        code: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>Heading & Teks</title>
</head>
<body>
  <h1>Heading Level 1 — Judul Utama</h1>
  <h2>Heading Level 2 — Sub Judul</h2>
  <h3>Heading Level 3 — Sub-sub Judul</h3>

  <p>Ini adalah paragraf biasa. Teks bisa dibuat
  <strong>tebal</strong> atau <em>miring</em>.</p>

  <p>Baris ini akan<br>dipotong di sini.</p>

  <p>Teks <span style="color:coral">berwarna</span> menggunakan span.</p>
</body>
</html>`,
        quiz: {
          question: "Tag HTML mana yang digunakan untuk teks tebal yang memiliki makna penting?",
          options: ["<b>", "<bold>", "<strong>", "<thick>"],
          correct: 2
        }
      },
      {
        id: "html-3", title: "Link & Gambar", duration: "18 min",
        theory: `## Membuat Link dan Menampilkan Gambar

### Hyperlink \`<a>\`

Link dibuat dengan tag \`<a>\` dan atribut \`href\` yang menentukan tujuan link:

\`\`\`html
<a href="https://google.com">Kunjungi Google</a>
\`\`\`

**Atribut penting:**
- \`href\` — URL tujuan
- \`target="_blank"\` — buka di tab baru
- \`rel="noopener"\` — keamanan saat target blank

### Gambar \`<img>\`

Gambar ditampilkan dengan tag \`<img>\` (void element):

\`\`\`html
<img src="gambar.jpg" alt="Deskripsi gambar">
\`\`\`

**Selalu sertakan atribut \`alt\`** untuk aksesibilitas dan SEO!`,
        code: `<!DOCTYPE html>
<html lang="id">
<body>
  <!-- Link biasa -->
  <a href="https://developer.mozilla.org">
    MDN Web Docs
  </a>

  <!-- Link buka tab baru -->
  <a href="https://github.com"
     target="_blank"
     rel="noopener noreferrer">
    GitHub (tab baru) 🔗
  </a>

  <!-- Gambar -->
  <img
    src="https://picsum.photos/300/200"
    alt="Gambar placeholder acak"
    width="300"
    height="200"
  />

  <!-- Link berisi gambar -->
  <a href="https://picsum.photos">
    <img src="https://picsum.photos/150/100"
         alt="Klik gambar ini" />
  </a>
</body>
</html>`,
        quiz: {
          question: "Atribut apa yang WAJIB ada di tag <img> untuk aksesibilitas?",
          options: ["src", "alt", "width", "title"],
          correct: 1
        }
      }
    ]
  },
  {
    id: "css", label: "CSS", color: "#264DE4",
    modules: [
      {
        id: "css-1", title: "Pengenalan CSS", duration: "20 min",
        theory: `## Apa itu CSS?

CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk **mendeskripsikan presentasi** (tampilan) dari dokumen HTML. CSS mengontrol warna, font, spacing, layout, dan animasi.

### Cara Menulis CSS

CSS terdiri dari **selector** dan **declaration block**:

\`\`\`css
selector {
  property: value;
}
\`\`\`

### 3 Cara Menyisipkan CSS

1. **Inline** — langsung di atribut \`style\`
2. **Internal** — di dalam tag \`<style>\` di \`<head>\`
3. **External** — file \`.css\` terpisah (best practice)

### Selector Dasar

| Selector | Contoh | Target |
|----------|--------|--------|
| Element | \`p\` | Semua \`<p>\` |
| Class | \`.merah\` | Elemen dengan \`class="merah"\` |
| ID | \`#header\` | Elemen dengan \`id="header"\` |`,
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Selector elemen */
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f0f4f8;
      margin: 0;
      padding: 20px;
    }

    /* Selector class */
    .kartu {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-bottom: 16px;
    }

    /* Selector ID */
    #judul {
      color: #264DE4;
      font-size: 28px;
    }

    .highlight {
      background: #fef3c7;
      padding: 2px 8px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1 id="judul">Belajar CSS 🎨</h1>

  <div class="kartu">
    <p>Ini kartu dengan <span class="highlight">highlight</span>.</p>
  </div>
</body>
</html>`,
        quiz: {
          question: "Simbol apa yang digunakan untuk selector CLASS dalam CSS?",
          options: ["#", ".", "*", "@"],
          correct: 1
        }
      },
      {
        id: "css-2", title: "Box Model", duration: "22 min",
        theory: `## CSS Box Model

Setiap elemen HTML adalah sebuah kotak (box). Box model CSS mendefinisikan **4 area** di setiap elemen:

\`\`\`
┌─────────────────────────┐
│         MARGIN          │
│  ┌───────────────────┐  │
│  │      BORDER       │  │
│  │  ┌─────────────┐  │  │
│  │  │   PADDING   │  │  │
│  │  │  ┌───────┐  │  │  │
│  │  │  │CONTENT│  │  │  │
│  │  │  └───────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
\`\`\`

### box-sizing

Gunakan \`box-sizing: border-box\` agar padding dan border **tidak menambah** lebar total elemen — ini adalah best practice modern!`,
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      padding: 30px;
      background: #1a1a2e;
      font-family: sans-serif;
    }

    .box-demo {
      width: 250px;
      height: 120px;
      padding: 20px;
      border: 4px solid #e94560;
      margin: 24px auto;
      background: #16213e;
      color: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

    .box-outer {
      background: #0f3460;
      padding: 20px;
      margin: 10px;
      border-radius: 12px;
      color: white;
    }
  </style>
</head>
<body>
  <div class="box-outer">
    Margin: jarak luar
    <div class="box-demo">
      Content + Padding + Border
    </div>
  </div>
</body>
</html>`,
        quiz: {
          question: "Properti CSS mana yang mengatur jarak DALAM border sebuah elemen?",
          options: ["margin", "spacing", "padding", "border-gap"],
          correct: 2
        }
      },
      {
        id: "css-3", title: "Flexbox Layout", duration: "25 min",
        theory: `## Flexbox — Layout Modern

Flexbox adalah metode layout 1D yang kuat untuk mendistribusikan dan menyelaraskan item dalam sebuah container.

### Mengaktifkan Flexbox

\`\`\`css
.container {
  display: flex;
}
\`\`\`

### Properti Container Utama

| Properti | Nilai Umum |
|----------|------------|
| \`flex-direction\` | row, column |
| \`justify-content\` | center, space-between, space-around |
| \`align-items\` | center, flex-start, flex-end, stretch |
| \`flex-wrap\` | wrap, nowrap |
| \`gap\` | ukuran spasi antar item |

### Properti Item

- \`flex-grow\` — seberapa besar item tumbuh
- \`flex-shrink\` — seberapa kecil item menyusut
- \`flex-basis\` — ukuran dasar item
- \`align-self\` — override alignment khusus item`,
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0; padding: 20px;
      background: #0d1117;
      color: #c9d1d9;
      font-family: sans-serif;
    }

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      background: #161b22;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
    }

    .flex-item {
      background: #21262d;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #30363d;
      text-align: center;
      flex: 1;
      transition: border-color 0.2s, color 0.2s;
    }

    .flex-item:hover {
      border-color: #58a6ff;
      color: #58a6ff;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`,
        quiz: {
          question: "Properti mana yang digunakan untuk mengatur jarak antar flex item?",
          options: ["spacing", "gap", "margin-inline", "flex-space"],
          correct: 1
        }
      }
    ]
  },
  {
    id: "js", label: "JavaScript", color: "#F7DF1E",
    modules: [
      {
        id: "js-1", title: "Variabel & Tipe Data", duration: "20 min",
        theory: `## Variabel di JavaScript

Variabel adalah container untuk menyimpan data. JavaScript modern menggunakan \`let\` dan \`const\`:

\`\`\`js
const nama = "Budi";     // Tidak bisa diubah
let umur = 25;           // Bisa diubah
\`\`\`

### Tipe Data Primitif

| Tipe | Contoh |
|------|--------|
| String | \`"Hello"\`, \`'World'\` |
| Number | \`42\`, \`3.14\` |
| Boolean | \`true\`, \`false\` |
| null | \`null\` (sengaja kosong) |
| undefined | \`undefined\` (belum diberi nilai) |

### Tipe Data Kompleks

- **Array** — daftar nilai: \`[1, 2, 3]\`
- **Object** — pasangan key-value: \`{ nama: "Budi", umur: 25 }\`

### Template Literal

\`\`\`js
const salam = \`Halo, \${nama}! Kamu berumur \${umur} tahun.\`;
\`\`\``,
        code: `// ─── Variabel ───────────────────────
const nama = "Budi";
let umur = 25;
let aktif = true;

// Template literal
const salam = \`Halo, \${nama}!\`;
console.log(salam); // "Halo, Budi!"

// ─── Array ──────────────────────────
const bahasa = ["HTML", "CSS", "JavaScript"];
console.log(bahasa[0]); // "HTML"
console.log(bahasa.length); // 3

// ─── Object ─────────────────────────
const pengguna = {
  nama: "Citra",
  umur: 22,
  hobi: ["coding", "desain"],
  aktif: true
};

console.log(pengguna.nama);    // "Citra"
console.log(pengguna["umur"]); // 22
console.log(pengguna.hobi[0]); // "coding"

// ─── typeof ─────────────────────────
console.log(typeof nama);  // "string"
console.log(typeof umur);  // "number"
console.log(typeof aktif); // "boolean"`,
        quiz: {
          question: "Keyword mana yang digunakan untuk mendeklarasikan variabel yang TIDAK bisa diubah nilainya?",
          options: ["let", "var", "const", "fixed"],
          correct: 2
        }
      },
      {
        id: "js-2", title: "Fungsi & Arrow Function", duration: "25 min",
        theory: `## Fungsi di JavaScript

Fungsi adalah blok kode yang dapat dipanggil berulang kali. Ada beberapa cara menulis fungsi:

### 1. Function Declaration

\`\`\`js
function sapa(nama) {
  return \`Halo, \${nama}!\`;
}
\`\`\`

### 2. Function Expression

\`\`\`js
const sapa = function(nama) {
  return \`Halo, \${nama}!\`;
};
\`\`\`

### 3. Arrow Function (ES6+)

\`\`\`js
const sapa = (nama) => \`Halo, \${nama}!\`;
\`\`\`

Arrow function lebih ringkas dan sering digunakan dalam kode modern. Jika hanya ada **satu parameter**, tanda kurung bisa dihilangkan. Jika body hanya **satu expression**, \`return\` bisa dihilangkan.`,
        code: `// ─── Function Declaration ───────────
function tambah(a, b) {
  return a + b;
}
console.log(tambah(3, 4)); // 7

// ─── Arrow Function ──────────────────
const kali = (a, b) => a * b;
console.log(kali(3, 4)); // 12

// ─── Default Parameter ───────────────
const sapa = (nama = "Tamu") => {
  return \`Selamat datang, \${nama}!\`;
};
console.log(sapa());        // "Selamat datang, Tamu!"
console.log(sapa("Rina"));  // "Selamat datang, Rina!"

// ─── Higher-order Function ───────────
const angka = [1, 2, 3, 4, 5];

const genap = angka.filter(n => n % 2 === 0);
console.log(genap); // [2, 4]

const kuadrat = angka.map(n => n ** 2);
console.log(kuadrat); // [1, 4, 9, 16, 25]

const jumlah = angka.reduce((acc, n) => acc + n, 0);
console.log(jumlah); // 15`,
        quiz: {
          question: "Manakah penulisan arrow function yang benar untuk fungsi dengan satu parameter?",
          options: ["(x) => { x * 2 }", "x => x * 2", "function x => x * 2", "arrow(x) { return x * 2 }"],
          correct: 1
        }
      },
      {
        id: "js-3", title: "DOM Manipulation", duration: "30 min",
        theory: `## Manipulasi DOM

DOM (Document Object Model) adalah representasi HTML sebagai pohon objek JavaScript. Kita bisa mengubah halaman web secara dinamis!

### Memilih Elemen

\`\`\`js
// Pilih satu elemen
const judul = document.querySelector('#judul');
const tombol = document.querySelector('.btn');

// Pilih banyak elemen
const paragraf = document.querySelectorAll('p');
\`\`\`

### Mengubah Konten & Style

\`\`\`js
elemen.textContent = "Teks baru";    // Ubah teks
elemen.innerHTML = "<b>Bold</b>";    // Ubah HTML
elemen.style.color = "red";          // Ubah style
elemen.classList.add("aktif");       // Tambah class
\`\`\`

### Event Listener

\`\`\`js
tombol.addEventListener('click', () => {
  console.log('Diklik!');
});
\`\`\``,
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    #kotak {
      width: 150px; height: 150px;
      background: #3b82f6;
      border-radius: 12px;
      display: flex; align-items: center;
      justify-content: center;
      color: white; font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
    }
    #counter { font-size: 48px; margin: 20px 0; }
  </style>
</head>
<body>
  <div id="kotak">Klik aku! 👆</div>
  <div id="counter">0</div>
  <button onclick="reset()">Reset</button>

  <script>
    let count = 0;
    const kotak = document.querySelector('#kotak');
    const counter = document.querySelector('#counter');

    kotak.addEventListener('click', () => {
      count++;
      counter.textContent = count;
      const warna = [
        '#3b82f6','#10b981','#f59e0b','#ef4444'
      ];
      kotak.style.background = warna[count % warna.length];
    });

    function reset() {
      count = 0;
      counter.textContent = 0;
      kotak.style.background = '#3b82f6';
    }
  <\/script>
</body>
</html>`,
        quiz: {
          question: "Method DOM mana yang digunakan untuk memilih elemen berdasarkan selector CSS?",
          options: ["getElementById()", "querySelector()", "findElement()", "selectBy()"],
          correct: 1
        }
      }
    ]
  }
];

// ── SYNTAX HIGHLIGHTER ──────────────────────────────────────
const TOKENS = [
  { re: /(\/\/.*$)/gm,              cls: "token-comment" },
  { re: /(\/\*[\s\S]*?\*\/)/g,      cls: "token-comment" },
  { re: /(&lt;!--[\s\S]*?--&gt;)/g, cls: "token-comment" },
  { re: /\b(const|let|var|function|return|if|else|for|while|class|import|export|default|new|this|typeof|null|undefined|true|false|async|await|=&gt;)\b/g, cls: "token-keyword" },
  { re: /(&lt;\/?[a-zA-Z][a-zA-Z0-9]*)/g, cls: "token-tag" },
  { re: /(\/?&gt;)/g,               cls: "token-tag" },
  { re: /\b([a-zA-Z]+)(?=\s*\()/g,  cls: "token-function" },
  { re: /("[^"]*"|'[^']*'|`[^`]*`)/g, cls: "token-string" },
  { re: /\b(\d+\.?\d*)\b/g,         cls: "token-number" },
  { re: /([a-zA-Z-]+)(?=\s*:(?!:))/g, cls: "token-property" },
];

function syntaxHighlight(code) {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  TOKENS.forEach(({ re, cls }) => {
    escaped = escaped.replace(re, `<span class="${cls}">$1</span>`);
  });
  return escaped;
}

// ── MARKDOWN PARSER ──────────────────────────────────────────
function parseMarkdown(md) {
  return md
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm,  '<h2>$1</h2>')
    .replace(/^# (.*$)/gm,   '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,     '<em>$1</em>')
    .replace(/`([^`]+)`/g,     '<code>$1</code>')
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
      `<pre><code>${syntaxHighlight(code.trim())}</code></pre>`)
    .replace(/^\| (.*) \|$/gm, (_, row) => {
      const cells = row.split(' | ').map(c => c.trim());
      return `<tr>${cells.map(c => c.startsWith('--') ? '' : `<td>${c}</td>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g,  m => `<table><tbody>${m}</tbody></table>`)
    .replace(/<tr><\/tr>\n?/g, '')
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g,  m => `<ul>${m}</ul>`)
    .split('\n\n')
    .map(p => p.startsWith('<') ? p : `<p>${p}</p>`)
    .join('');
}

// ── STATE ─────────────────────────────────────────────────────
const allModules = CURRICULUM.flatMap(l => l.modules);
const moduleMap  = Object.fromEntries(allModules.map(m => [m.id, m]));
const langMap    = Object.fromEntries(CURRICULUM.map(l => [l.id, l]));

let state = {
  dark: true,
  sidebarOpen: true,
  activeLangId: "html",
  activeModuleId: "html-1",
  progress: (() => {
    try { return JSON.parse(localStorage.getItem("cl_progress") || "{}"); } catch { return {}; }
  })(),
  activeTab: "editor",
  editableCode: CURRICULUM[0].modules[0].code,
  quizOpen: false,
  openLangs: { html: true, css: false, js: false },
};

// ── DOM REFERENCES ───────────────────────────────────────────
const $ = id => document.getElementById(id);
const dom = {
  themeToggle:     $("theme-toggle"),
  sidebarToggle:   $("sidebar-toggle"),
  sidebar:         $("sidebar"),
  progressRingFill:$("progress-ring-fill"),
  progressBarFill: $("progress-bar-fill"),
  progressPct:     $("progress-pct"),
  breadcrumbLang:  $("breadcrumb-lang"),
  breadcrumbTitle: $("breadcrumb-title"),
  moduleTime:      $("module-time"),
  quizBtn:         $("quiz-btn"),
  completeBtn:     $("complete-btn"),
  theoryPanel:     $("theory-panel"),
  codeEditor:      $("code-editor"),
  splitView:       $("split-view"),
  copyBtn:         $("copy-btn"),
  previewIframe:   $("preview-iframe"),
  previewEmpty:    $("preview-empty"),
  consoleOutput:   $("console-output"),
  quizOverlay:     $("quiz-overlay"),
  quizQuestion:    $("quiz-question"),
  quizOptions:     $("quiz-options"),
  quizSubmit:      $("quiz-submit"),
  quizResult:      $("quiz-result"),
  quizClose:       $("quiz-close"),
  quizBadge:       $("quiz-badge"),
  toast:           $("toast"),
};

// ── PROGRESS HELPERS ─────────────────────────────────────────
function saveProgress() {
  localStorage.setItem("cl_progress", JSON.stringify(state.progress));
}

function getLangProgress(langId) {
  const mods = langMap[langId].modules;
  const done = mods.filter(m => state.progress[m.id]).length;
  return Math.round((done / mods.length) * 100);
}

function getGlobalProgress() {
  const done = allModules.filter(m => state.progress[m.id]).length;
  return Math.round((done / allModules.length) * 100);
}

// ── RENDER FUNCTIONS ─────────────────────────────────────────

function renderProgress() {
  const pct = getGlobalProgress();
  // Ring
  const circ = 2 * Math.PI * 15; // r=15
  const offset = circ - (pct / 100) * circ;
  const activeLang = langMap[state.activeLangId];
  dom.progressRingFill.style.strokeDashoffset = offset;
  dom.progressRingFill.style.stroke = activeLang.color;
  // Bar
  dom.progressBarFill.style.width = pct + "%";
  dom.progressBarFill.style.background = activeLang.color;
  dom.progressPct.textContent = pct + "%";

  // Per-lang progress bars
  CURRICULUM.forEach(lang => {
    const fill = $(`prog-${lang.id}`);
    if (fill) fill.style.width = getLangProgress(lang.id) + "%";
  });
}

function renderModuleStatus() {
  allModules.forEach(mod => {
    const dot = $(`dot-${mod.id}`);
    if (!dot) return;
    dot.className = "module-dot";
    if (state.progress[mod.id])      dot.classList.add("done");
    else if (mod.id === state.activeModuleId) dot.classList.add("active");
  });
}

function renderSidebarActive() {
  document.querySelectorAll(".module-item").forEach(el => {
    el.classList.toggle("active", el.dataset.id === state.activeModuleId);
  });
}

function renderAccordions() {
  CURRICULUM.forEach(lang => {
    const list  = $(`list-${lang.id}`);
    const chev  = $(`chev-${lang.id}`);
    const header = document.querySelector(`.lang-header[data-lang="${lang.id}"]`);
    if (!list || !chev) return;

    if (state.openLangs[lang.id]) {
      list.classList.remove("collapsed");
      chev.classList.add("open");
      header && header.setAttribute("aria-expanded", "true");
    } else {
      list.classList.add("collapsed");
      chev.classList.remove("open");
      header && header.setAttribute("aria-expanded", "false");
    }
  });
}

function renderTopbar() {
  const mod  = moduleMap[state.activeModuleId];
  const lang = langMap[state.activeLangId];

  dom.breadcrumbLang.textContent = lang.label;
  dom.breadcrumbLang.style.color = lang.color;
  dom.breadcrumbTitle.textContent = " → " + mod.title;
  dom.moduleTime.textContent = "⏱ " + mod.duration;
  dom.logoAccent && (dom.logoAccent.style.color = lang.color);

  const done = state.progress[mod.id];
  dom.completeBtn.textContent = done ? "✓ Selesai" : "Tandai Selesai";
  dom.completeBtn.className = "complete-btn " + (done ? "done" : "undone");
  dom.completeBtn.style.background = done ? "#10b981" : lang.color;
  dom.completeBtn.style.color = (!done && lang.id === "js") ? "#000" : "#fff";
  dom.completeBtn.disabled = done;

  dom.quizBadge.style.background = lang.color;
  dom.quizBadge.style.color = lang.id === "js" ? "#000" : "#fff";
}

function renderTheory() {
  const mod = moduleMap[state.activeModuleId];
  dom.theoryPanel.innerHTML = parseMarkdown(mod.theory);
  dom.theoryPanel.scrollTop = 0;

  // Animate in
  dom.theoryPanel.style.opacity = "0";
  dom.theoryPanel.style.transform = "translateX(-10px)";
  requestAnimationFrame(() => {
    dom.theoryPanel.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    dom.theoryPanel.style.opacity = "1";
    dom.theoryPanel.style.transform = "translateX(0)";
  });
}

function renderCode() {
  const mod = moduleMap[state.activeModuleId];
  dom.codeEditor.value = state.editableCode || mod.code;
}

function renderPreview() {
  const code = dom.codeEditor.value;
  const isHtml = code.trim().startsWith("<!") || code.includes("<html");

  if (isHtml) {
    dom.previewIframe.srcdoc = code;
    dom.previewIframe.style.display = "flex";
    dom.previewEmpty.style.display  = "none";
  } else {
    dom.previewIframe.srcdoc = "";
    dom.previewIframe.style.display = "none";
    dom.previewEmpty.style.display  = "flex";
  }
}

function renderConsole() {
  const code = dom.codeEditor.value;
  const matches = code.match(/console\.log\(([^)]+)\)/g) || [];
  const lines = matches.map(m => {
    const arg = m.match(/console\.log\((.+)\)/)?.[1] || "";
    return arg.replace(/[`"']/g, "").replace(/\$\{[^}]+\}/g, "...");
  });

  if (lines.length === 0) {
    dom.consoleOutput.innerHTML = '<div class="console-empty">Tidak ada console.log() terdeteksi.<br/>Tambahkan console.log() di kode untuk melihat output.</div>';
  } else {
    dom.consoleOutput.innerHTML = lines.map((line, i) =>
      `<div class="console-line" style="animation-delay:${i * 0.07}s">
        <span class="console-arrow">›</span>
        <span class="console-output">${line}</span>
      </div>`
    ).join("");
  }
}

function renderTabs() {
  document.querySelectorAll(".code-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === state.activeTab);
    btn.setAttribute("aria-selected", btn.dataset.tab === state.activeTab);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `pane-${state.activeTab}`);
  });

  if (state.activeTab === "preview") renderPreview();
  if (state.activeTab === "console") renderConsole();
}

function renderSidebar() {
  if (state.sidebarOpen) {
    dom.sidebar.classList.remove("collapsed");
    dom.sidebar.setAttribute("aria-hidden", "false");
  } else {
    dom.sidebar.classList.add("collapsed");
    dom.sidebar.setAttribute("aria-hidden", "true");
  }
}

function renderAll() {
  renderSidebar();
  renderAccordions();
  renderSidebarActive();
  renderModuleStatus();
  renderTopbar();
  renderTheory();
  renderCode();
  renderTabs();
  renderProgress();
  applyTheme();
}

// ── ACTIONS ───────────────────────────────────────────────────

function selectModule(modId, langId) {
  state.activeModuleId = modId;
  state.activeLangId   = langId;
  state.editableCode   = moduleMap[modId].code;
  state.activeTab      = "editor";

  // Auto-open that lang section
  state.openLangs[langId] = true;

  renderSidebarActive();
  renderModuleStatus();
  renderTopbar();
  renderTheory();
  renderCode();
  renderTabs();
  renderProgress();

  // Auto-run preview after load
  setTimeout(() => {
    if (state.activeTab === "editor") {
      const code = dom.codeEditor.value;
      const isHtml = code.trim().startsWith("<!") || code.includes("<html");
      if (isHtml) renderPreview();
    }
  }, 400);
}

function markDone() {
  const id = state.activeModuleId;
  if (state.progress[id]) return;
  state.progress[id] = true;
  saveProgress();
  renderModuleStatus();
  renderTopbar();
  renderProgress();
  showToast("✓ Pelajaran ditandai selesai!", "success");
}

function toggleLang(langId) {
  state.openLangs[langId] = !state.openLangs[langId];
  renderAccordions();
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  renderSidebar();
}

function toggleTheme() {
  state.dark = !state.dark;
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.dark ? "dark" : "light");
  dom.themeToggle.textContent = state.dark ? "☀️" : "🌙";
  localStorage.setItem("cl_theme", state.dark ? "dark" : "light");
}

function switchTab(tab) {
  state.activeTab = tab;
  renderTabs();
}

// ── QUIZ ──────────────────────────────────────────────────────
let quizState = { selected: null, submitted: false };

// Escape HTML special chars so option text like "<html>" renders safely
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function openQuiz() {
  const mod  = moduleMap[state.activeModuleId];
  const lang = langMap[state.activeLangId];
  const quiz = mod.quiz;
  quizState  = { selected: null, submitted: false, quiz };

  dom.quizQuestion.textContent = quiz.question;
  dom.quizSubmit.disabled = true;
  dom.quizResult.style.display = "none";
  dom.quizResult.className = "quiz-result";

  dom.quizOptions.innerHTML = quiz.options.map((opt, i) =>
    `<button class="quiz-option" data-idx="${i}" aria-label="Opsi ${String.fromCharCode(65+i)}: ${escapeHtml(opt)}">
      <span class="quiz-opt-label">${String.fromCharCode(65+i)}</span>
      ${escapeHtml(opt)}
    </button>`
  ).join("");

  dom.quizOptions.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => selectQuizOption(parseInt(btn.dataset.idx)));
  });

  dom.quizBadge.style.background = lang.color;
  dom.quizBadge.style.color      = lang.id === "js" ? "#000" : "#fff";

  dom.quizOverlay.style.display = "flex";
  dom.quizSubmit.style.display  = "block";
  requestAnimationFrame(() => dom.quizOverlay.style.opacity = "1");
}

function selectQuizOption(idx) {
  if (quizState.submitted) return;
  quizState.selected = idx;
  dom.quizOptions.querySelectorAll(".quiz-option").forEach((btn, i) => {
    btn.classList.toggle("selected", i === idx);
  });
  dom.quizSubmit.disabled = false;
}

function submitQuiz() {
  if (quizState.selected === null || quizState.submitted) return;
  quizState.submitted = true;

  const { quiz, selected } = quizState;
  const correct = selected === quiz.correct;

  dom.quizOptions.querySelectorAll(".quiz-option").forEach((btn, i) => {
    btn.disabled = true;
    if (i === quiz.correct) btn.classList.add("correct");
    else if (i === selected) btn.classList.add("wrong");
  });

  dom.quizResult.style.display = "block";
  dom.quizResult.className = "quiz-result " + (correct ? "correct-result" : "wrong-result");
  dom.quizResult.innerHTML = correct
    ? `🎉 Benar! Luar biasa! <button class="quiz-continue" id="quiz-cont">Lanjut →</button>`
    : `❌ Kurang tepat. Jawaban yang benar: <strong>${escapeHtml(quiz.options[quiz.correct])}</strong><button class="quiz-continue" id="quiz-cont">Coba lagi nanti</button>`;

  if (correct) {
    markDone();
  }

  $("quiz-cont") && $("quiz-cont").addEventListener("click", closeQuiz);
  dom.quizSubmit.style.display = "none";
}

function closeQuiz() {
  dom.quizOverlay.style.display = "none";
}

// ── COPY CODE ─────────────────────────────────────────────────
function copyCode() {
  navigator.clipboard.writeText(dom.codeEditor.value).then(() => {
    dom.copyBtn.textContent = "✓ Copied!";
    dom.copyBtn.classList.add("copied");
    setTimeout(() => {
      dom.copyBtn.textContent = "Copy";
      dom.copyBtn.classList.remove("copied");
    }, 1800);
  });
}

// ── TOAST ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = "") {
  clearTimeout(toastTimer);
  dom.toast.textContent = msg;
  dom.toast.className   = "toast show " + type;
  toastTimer = setTimeout(() => {
    dom.toast.className = "toast";
  }, 2800);
}

// ── EDITOR AUTO-UPDATE ────────────────────────────────────────
let previewTimer;
dom.codeEditor.addEventListener("input", () => {
  state.editableCode = dom.codeEditor.value;
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    if (state.activeTab === "preview") renderPreview();
    if (state.activeTab === "console") renderConsole();
  }, 600);
});

dom.codeEditor.addEventListener("keydown", e => {
  if (e.key === "Tab") {
    e.preventDefault();
    const s = dom.codeEditor.selectionStart;
    const val = dom.codeEditor.value;
    dom.codeEditor.value = val.substring(0, s) + "  " + val.substring(dom.codeEditor.selectionEnd);
    dom.codeEditor.selectionStart = dom.codeEditor.selectionEnd = s + 2;
  }
});

// ── EVENT LISTENERS ───────────────────────────────────────────
dom.themeToggle.addEventListener("click", toggleTheme);
dom.sidebarToggle.addEventListener("click", toggleSidebar);
dom.completeBtn.addEventListener("click", markDone);
dom.quizBtn.addEventListener("click", openQuiz);
dom.quizClose.addEventListener("click", closeQuiz);
dom.quizOverlay.addEventListener("click", e => { if (e.target === dom.quizOverlay) closeQuiz(); });
dom.quizSubmit.addEventListener("click", submitQuiz);
dom.copyBtn.addEventListener("click", copyCode);

// Code tabs
document.querySelectorAll(".code-tab").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

// Sidebar lang headers (accordion)
document.querySelectorAll(".lang-header").forEach(header => {
  const handler = () => toggleLang(header.dataset.lang);
  header.addEventListener("click", handler);
  header.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); } });
});

// Module items
document.querySelectorAll(".module-item").forEach(item => {
  const handler = () => selectModule(item.dataset.id, item.dataset.lang);
  item.addEventListener("click", handler);
  item.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); } });
});

// ── INIT ──────────────────────────────────────────────────────
(function init() {
  // Restore theme
  const savedTheme = localStorage.getItem("cl_theme");
  if (savedTheme === "light") state.dark = false;

  renderAll();

  // Auto-run preview for the default HTML lesson
  setTimeout(() => renderPreview(), 300);
})();
