const sourceText = document.getElementById("sourceText");
const localizedText = document.getElementById("localizedText");
const localizeButton = document.getElementById("localizeButton");
const toneButtons = document.querySelectorAll(".tone-chip");

let selectedTone = "natural";

const examples = {
  natural: {
    "build better customer experiences with one simple platform.": "ひとつのシンプルなプラットフォームで、より良い顧客体験を実現。",
    "grow your business with tools that work as hard as you do.": "ビジネスの成長を支える、頼れるツールをひとつに。",
    "start your free trial today.": "まずは無料でお試しください。"
  },
  professional: {
    "build better customer experiences with one simple platform.": "シンプルなプラットフォームで、顧客体験のさらなる向上を実現します。",
    "grow your business with tools that work as hard as you do.": "ビジネスの成長を支える機能を、ひとつのプラットフォームに集約。",
    "start your free trial today.": "無料トライアルを今すぐ開始いただけます。"
  },
  friendly: {
    "build better customer experiences with one simple platform.": "もっと心地よい顧客体験を、ひとつのプラットフォームから。",
    "grow your business with tools that work as hard as you do.": "毎日の仕事をもっとラクに。成長を支えるツールをひとつに。",
    "start your free trial today.": "まずは気軽に、無料で試してみませんか？"
  }
};

function fallbackCopy(tone) {
  if (tone === "professional") {
    return "日本のユーザーに伝わるよう、意味と文脈を保ちながら自然でプロフェッショナルな表現に最適化します。";
  }
  if (tone === "friendly") {
    return "日本のユーザーにすっと届く、親しみやすく自然な表現に整えます。";
  }
  return "日本のユーザーに自然に伝わるよう、意味・トーン・文脈を考慮してローカライズします。";
}

toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTone = button.dataset.tone;
    toneButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

localizeButton.addEventListener("click", () => {
  const raw = sourceText.value.trim();
  const normalized = raw.toLowerCase().replace(/\s+/g, " ");

  localizeButton.classList.add("loading");
  localizeButton.disabled = true;
  localizeButton.innerHTML = '<span class="sparkle">✦</span> Localizing...';

  setTimeout(() => {
    localizedText.textContent = examples[selectedTone][normalized] || fallbackCopy(selectedTone);
    localizeButton.classList.remove("loading");
    localizeButton.disabled = false;
    localizeButton.innerHTML = '<span class="sparkle">✦</span> Localize with AI';
  }, 650);
});