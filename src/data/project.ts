export const project = {
  shortTitle: "TextCrafter",
  title:
    "Investigating Text Insulation and Attention Mechanisms for Complex Visual Text Generation",
  subtitle:
    "A project page for complex visual text generation with multi-text insulation, Text-oriented Attention, and the CVTG-2K benchmark.",
  authors: [
    { name: "Ying Tai", marks: ["1", "dagger"] },
    { name: "Nikai Du", marks: ["1", "dagger"] },
    { name: "Rui Xie", marks: ["1", "asterisk"] },
    { name: "Zhennan Chen", marks: ["1", "asterisk"] },
    { name: "Qian Wang", marks: ["2"] },
    { name: "Zhengkai Jiang", marks: ["3"] },
    { name: "Kai Zhang", marks: ["1"] },
    { name: "Jian Yang", marks: ["1"] },
  ],
  affiliations: [
    "School of Intelligence Science and Technology, Nanjing University",
    "Jiutian Research",
    "The Hong Kong University of Science and Technology",
  ],
  authorNotes: [
    { kind: "asterisk", text: "Corresponding author(s): Rui Xie, Zhennan Chen." },
    { kind: "dagger", text: "These authors contributed equally to this work." },
  ],
  abstract:
    "TextCrafter is a Complex Visual Text Generation framework inspired by selective visual attention. It combines bottleneck-aware reinforcement learning for multi-text insulation with a text-oriented attention module, and introduces CVTG-2K, a 2,000-prompt benchmark covering positions, quantities, lengths, and attributes across diverse visual scenes.",
  links: [
    { label: "Research Paper", href: "", accent: "violet", icon: "book" },
    { label: "GitHub", href: "", accent: "sky", icon: "computer" },
    { label: "HuggingFace", href: "", accent: "amber", icon: "hugging" },
    { label: "HF Demo", href: "", accent: "rose", icon: "rocket" },
    { label: "Datasets", href: "#datasets", accent: "emerald", icon: "dataset" },
    { label: "Demo Video", href: "#demo-video", accent: "indigo", icon: "movie" },
  ],
  stats: [
    { value: "2K", label: "benchmark prompts" },
    { value: "4", label: "GPUs in main setup" },
    { value: "0", label: "extra parameters for RL insulation" },
    { value: "3", label: "key failure modes addressed" },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Demo Video", href: "#demo-video" },
  { label: "Datasets", href: "#datasets" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
] as const;

export const heroShowcase = {
  logo: {
    src: "/images/hero/logo.jpg",
    alt: "TextCrafter logo",
    width: 1662,
    height: 1478,
  },
  poster: {
    src: "/images/hero/20260308210540.png",
    alt: "TextCrafter CVTG benchmark hero poster",
    width: 1024,
    height: 1536,
  },
  cards: [
    {
      src: "/images/hero/1773041835127.jpg",
      alt: "TextCrafter hero card 1",
      width: 1280,
      height: 1280,
      x: 5,
      y: 4,
      rotate: -11,
      size: "lg",
      depth: 1.2,
      delay: "0s",
    },
    {
      src: "/images/hero/1773042618729.jpg",
      alt: "TextCrafter hero card 2",
      width: 1024,
      height: 1024,
      x: 48,
      y: 4,
      rotate: 8,
      size: "sm",
      depth: 0.95,
      delay: "0.5s",
    },
    {
      src: "/images/hero/1773042626839.jpg",
      alt: "TextCrafter hero card 3",
      width: 1024,
      height: 1024,
      x: 2,
      y: 39,
      rotate: 9,
      size: "sm",
      depth: 1.1,
      delay: "1s",
    },
    {
      src: "/images/hero/1773042701183.jpg",
      alt: "TextCrafter hero card 4",
      width: 1024,
      height: 1024,
      x: 37,
      y: 35,
      rotate: -8,
      size: "md",
      depth: 1.15,
      delay: "1.3s",
    },
    {
      src: "/images/hero/1773043165994.jpg",
      alt: "TextCrafter hero card 5",
      width: 1024,
      height: 1024,
      x: 17,
      y: 66,
      rotate: -9,
      size: "md",
      depth: 1.02,
      delay: "1.7s",
    },
    {
      src: "/images/hero/1773043380960.jpg",
      alt: "TextCrafter hero card 6",
      width: 1024,
      height: 1024,
      x: 58,
      y: 62,
      rotate: 7,
      size: "sm",
      depth: 0.92,
      delay: "2s",
    },
  ],
} as const;

export const whatIsTextCrafter = {
  title: "What is TextCrafter?",
  description:
    "TextCrafter is a Complex Visual Text Generation (CVTG) framework inspired by selective visual attention in cognitive science, introducing multi-text insulation and text-oriented attention to improve generation quality in complex multi-text scenes.",
  promptLabel: "Complex Visual Text Generation",
  engineLabel: "TextCrafter",
  prompt: `A contemporary and playful slide designed like a vibrant bulletin board, displaying textual content pinned on colorful sticky notes arranged casually yet clearly across a textured corkboard background.

At the top-left corner, the bold, handwritten-style heading "Healthy Eating Made Simple" stands out clearly, accompanied by a short note: "Small habits make big differencespractice daily for lasting wellbeing".

Nearby toward the upper center area, a bright yellow note reads "Mindful Portions", with smaller explanatory text: "Listen to your body's signals, eat slowly and stop before overly full".

Just below and to the right, a pastel-green note labeled "Include Vegetables" explains succinctly: "Aim to fill half your plate with colorful veggies each day".

Moving leftward toward the lower section, a soft-blue sticky note titled "Stay Hydrated" contains the brief sentence: "Drink sufficient water regularly to maintain energy and focus".

Decorative elements on the corkboard, such as small doodled fruits, vegetables, and paper clips scattered around the borders, enhance visual warmth and highlight the approachable nature of the presented messages.`,
  result: {
    src: "/images/hero/1773041770564.jpg",
    alt: "TextCrafter generated bulletin-board style health slide",
    width: 1024,
    height: 1024,
  },
} as const;

export const datasetShowcase = {
  description:
    "Explore the dedicated datasets introduced for TextCrafter to evaluate complex visual text generation under more realistic, multi-text, and attribute-aware settings.",
  tabs: [
    {
      key: "cvtg-2k",
      label: "CVTG-2K",
      title: "CVTG-2K",
      body:
        "CVTG-2K is a dedicated benchmark tailored to the CVTG task. It comprises 2,000 high-quality prompts with diverse region quantities ranging from 2 to 5 and rich visual attributes such as color, font, and size. Unlike previous datasets that predominantly focus on single-region or fixed-template scenarios, CVTG-2K combines global context, multiple text contents, explicit position requirements, and fine-grained visual attributes into a more challenging and realistic evaluation setting.",
    },
    {
      key: "cvtg-hard",
      label: "CVTG-Hard",
      title: "CVTG-Hard",
      body:
        "CVTG-Hard is a challenging subset built from the most difficult prompts in CVTG-2K together with their Chinese translations, yielding 400 test samples. The subset still maintains diverse scene distributions while concentrating on much harder failure cases. According to the paper, the visual texts in CVTG-Hard average 8.61 words and 40.79 characters, making it a compact stress test for robustness in complex visual text generation.",
    },
  ],
  combinedFigure: {
    src: "/images/paper/datasets-concat.png",
    alt: "Combined benchmark complexity and scene distribution figures for CVTG-2K and CVTG-Hard",
    width: 5212,
    height: 2915,
  },
} as const;

export const technicalFramework = {
  title: "Technical Framework",
  description:
    "TextCrafter combines multi-text insulation with quotation-guided text-oriented attention to suppress cross-text interference and keep visual text tokens concentrated in the correct regions.",
  figure: {
    src: "/pdfs/method-cropped.png",
    alt: "Technical framework overview for TextCrafter derived from method.pdf",
    width: 4326,
    height: 1820,
    markers: [
      { key: "multi-text-insulation", label: "1", x: 20.3, y: 50 },
      { key: "text-oriented-attention", label: "2", x: 76, y: 50 },
    ],
  },
  stages: [
    {
      key: "multi-text-insulation",
      title: "Multi-text Insulation",
      description:
        "TextCrafter treats each target string as an independent object and optimizes it with bottleneck-aware constrained reinforcement learning. OCR-based rewards, isolated matching, worst-case-aware aggregation, and anti-interference penalties work together to preserve every requested text instance instead of letting one strong region hide failures in the others.",
      icon: "insulation",
    },
    {
      key: "text-oriented-attention",
      title: "Text-oriented Attention",
      description:
        "TextCrafter leverages quotation marks as robust spatial anchors, refines their attention maps through smoothing, primary peak retention, and soft binarization, and uses the resulting quotation-guided gate to keep visual text tokens concentrated inside the correct region while suppressing leakage into the background or neighboring texts.",
      icon: "attention",
    },
  ],
} as const;

export const contributions = [
  {
    title: "Multi-text insulation",
    description:
      "A bottleneck-aware constrained reinforcement learning objective isolates multiple text instances and reduces text misgeneration, omission, and hallucination.",
  },
  {
    title: "Quotation-guided attention",
    description:
      "A text-oriented attention mechanism uses quotation anchors to concentrate the model on each target text instance more precisely.",
  },
  {
    title: "CVTG-2K benchmark",
    description:
      "A new benchmark with 2,000 prompts designed for evaluating complex visual text generation under diverse layouts, quantities, lengths, and attributes.",
  },
] as const;

export const challenges = [
  {
    title: "Text misgeneration",
    description:
      "Characters from different text targets interfere with each other, creating entangled, duplicated, or incomplete renderings.",
  },
  {
    title: "Text omission",
    description:
      "Only part of the requested text content appears, while other specified text instances are ignored by the generator.",
  },
  {
    title: "Text hallucination",
    description:
      "The model adds unintended text-like artifacts or gibberish that was never requested in the prompt.",
  },
] as const;

export const methodCards = [
  {
    eyebrow: "Stage 1",
    title: "Preview-driven layout initialization",
    description:
      "TextCrafter leverages the positional prior of a pretrained diffusion transformer. A few denoising steps are used to approximate layout and scale before solving insulated regions.",
    bullets: [
      "Captures early attention maps to estimate where each visual text wants to appear.",
      "Optimizes non-overlapping bounding boxes with a mixed-integer linear program.",
      "Aligns layout decisions with the model's own spatial preference instead of forcing external layouts.",
    ],
    image: {
      src: "/images/paper/pre-generation.png",
      alt: "Pre-generation figure from the TextCrafter paper",
      width: 8662,
      height: 4331,
    },
  },
  {
    eyebrow: "Stage 2",
    title: "Bottleneck-aware RL for insulation",
    description:
      "The reinforcement learning objective balances average quality with a bottleneck-sensitive term so that one missing text instance cannot hide behind strong performance on the others.",
    bullets: [
      "Normalizes OCR outputs and target strings before matching.",
      "Scores text instances in isolation for more faithful reward signals.",
      "Penalizes interference and over-generation to suppress hallucinations.",
    ],
    image: {
      src: "/images/paper/method-rl.png",
      alt: "Bottleneck-aware constrained reinforcement learning diagram",
      width: 8662,
      height: 4331,
    },
  },
  {
    eyebrow: "Stage 3",
    title: "Quotation-guided attention gate",
    description:
      "A text-oriented attention module uses quotation marks as anchors to emphasize the correct text region and improve rendering quality for each instance.",
    bullets: [
      "Builds an explicit gate from prompt tokenization structure.",
      "Improves concentration on the designated text tokens.",
      "Stacks on top of an already strong insulation baseline.",
    ],
    image: {
      src: "/images/paper/method-attn.png",
      alt: "Text-oriented attention with quotation-guided attention gate",
      width: 8662,
      height: 4331,
    },
  },
] as const;

export const benchmarkPoints = [
  "CVTG-2K focuses on complex visual text prompts rather than simpler single-text settings.",
  "Prompt dimensions vary by position, quantity, length, and fine-grained attributes.",
  "The benchmark is intended to stress real-world text rendering failure cases.",
] as const;

export const resultsGallery = [
  {
    title: "Teaser examples",
    description:
      "The project page opens with multilingual and complex-layout text rendering examples highlighted in the paper teaser.",
    image: {
      src: "/images/paper/teaser.png",
      alt: "TextCrafter teaser examples",
      width: 2778,
      height: 1669,
    },
  },
  {
    title: "LongText-Bench qualitative results",
    description:
      "Representative qualitative outputs on longer and more challenging visual text generation prompts.",
    image: {
      src: "/images/paper/longtext-bench.png",
      alt: "LongText-Bench results",
      width: 11068,
      height: 6347,
    },
  },
  {
    title: "CVTG-Hard comparisons",
    description:
      "Additional examples from difficult prompt settings that expose omission and hallucination behavior in competing systems.",
    image: {
      src: "/images/paper/cvtg-hard-more.png",
      alt: "CVTG-Hard more qualitative results",
      width: 3006,
      height: 2475,
    },
  },
] as const;

export const citation = `@misc{tai2026textcrafter,
  title={Investigating Text Insulation and Attention Mechanisms for Complex Visual Text Generation},
  author={Tai, Ying and Du, Nikai and Xie, Rui and Chen, Zhennan and Wang, Qian and Jiang, Zhengkai and Zhang, Kai and Yang, Jian},
  year={2026},
  note={TextCrafter manuscript}
}`;
