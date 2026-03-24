type ResultRank = "best" | "second";

type ResultMetric = {
  label: string;
};

type ResultCell = {
  display: string;
  rank?: ResultRank;
  note?: string;
};

type ResultRow = {
  model: string;
  citation?: string;
  starred?: boolean;
  dividerBefore?: boolean;
  isOurs?: boolean;
  values: ResultCell[];
};

type ResultBenchmark = {
  key: string;
  label: string;
  description: string;
  note: string;
  minTableWidth: string;
  figure?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  metrics: ResultMetric[];
  rows: ResultRow[];
};

type ExperimentalResultsData = {
  title: string;
  description: string;
  comparisonTitle: string;
  comparisonDescription: string;
  legend: {
    best: string;
    second: string;
    focus: string;
  };
  benchmarks: ResultBenchmark[];
};

export const experimentalResults = {
  title: "Experimental Results",
  description:
    "Across CVTG-2K, CVTG-Hard, LongText-Bench, and Geneval, TextCrafter consistently improves text fidelity in complex multi-text scenes while preserving strong general text-to-image performance.",
  comparisonTitle: "Model Performance Comparison",
  comparisonDescription:
    "Quantitative comparisons in the paper show stronger word and span accuracy, higher normalized edit distance, and more robust long-text rendering on difficult benchmarks, while maintaining competitive quality on a general-purpose text-to-image benchmark.",
  legend: {
    best: "Emerald marks the paper's bold cells",
    second: "Sky marks the paper's underlined cells",
    focus: "Hover or click a metric column for the glow focus",
  },
  benchmarks: [
    {
      key: "cvtg-2k",
      label: "CVTG-2K",
      description:
        "On CVTG-2K, TextCrafter is reported as the top model on Word Accuracy, NED, CLIPScore, VQAScore, and Aesthetics against both industrial and academic baselines.",
      note: "`*` indicates results cited from previous papers.",
      minTableWidth: "76rem",
      metrics: [
        { label: "Word Accuracy" },
        { label: "NED" },
        { label: "CLIPScore" },
        { label: "VQAScore" },
        { label: "Aesthetics" },
      ],
      rows: [
        {
          model: "FLUX.1 dev",
          citation: "[Black Forest Labs 2024]",
          values: [
            { display: "0.4965" },
            { display: "0.6879" },
            { display: "0.7401" },
            { display: "0.8886" },
            { display: "5.91", rank: "second" },
          ],
        },
        {
          model: "GPT Image 1 [High]",
          citation: "[OpenAI 2025]",
          starred: true,
          values: [
            { display: "0.8569" },
            { display: "0.9478" },
            { display: "0.7982" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Gemini 2.5 Flash Image",
          citation: "[Google 2025]",
          starred: true,
          values: [
            { display: "0.7364" },
            { display: "0.8516" },
            { display: "-" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Seedream 4.5",
          citation: "[ByteDance 2025]",
          starred: true,
          values: [
            { display: "0.8990" },
            { display: "0.9483" },
            { display: "0.8069" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Qwen-Image",
          citation: "[Alibaba 2025]",
          starred: true,
          values: [
            { display: "0.8288" },
            { display: "0.9116" },
            { display: "0.8017" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Z-Image",
          citation: "[Alibaba 2025]",
          starred: true,
          values: [
            { display: "0.8671" },
            { display: "0.9367" },
            { display: "0.7969" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "HunyuanImage-3.0",
          citation: "[Tencent 2025]",
          starred: true,
          values: [
            { display: "0.7650" },
            { display: "0.8765" },
            { display: "0.8121", rank: "second" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Longcat-Image",
          citation: "[Meituan 2025]",
          starred: true,
          values: [
            { display: "0.8658" },
            { display: "0.9361" },
            { display: "0.7859" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "Emu3.5",
          citation: "[BAAI 2025]",
          starred: true,
          values: [
            { display: "0.9123", rank: "second" },
            { display: "0.9656", rank: "second" },
            { display: "-" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "GLM-Image",
          citation: "[Z.ai 2026]",
          starred: true,
          values: [
            { display: "0.9116" },
            { display: "0.9557" },
            { display: "0.7877" },
            { display: "-" },
            { display: "-" },
          ],
        },
        {
          model: "SD3.5 Large",
          citation: "[ICML 2024]",
          dividerBefore: true,
          values: [
            { display: "0.6548" },
            { display: "0.8470" },
            { display: "0.7797" },
            { display: "0.9297", rank: "second" },
            { display: "5.56" },
          ],
        },
        {
          model: "AnyText",
          citation: "[ICLR 2024]",
          values: [
            { display: "0.1804" },
            { display: "0.4675" },
            { display: "0.7432" },
            { display: "0.6935" },
            { display: "4.53" },
          ],
        },
        {
          model: "TextDiffuser-2",
          citation: "[ECCV 2024]",
          values: [
            { display: "0.2326" },
            { display: "0.4353" },
            { display: "0.6765" },
            { display: "0.5627" },
            { display: "4.51" },
          ],
        },
        {
          model: "RAG-Diffusion",
          citation: "[ICCV 2025]",
          values: [
            { display: "0.2648" },
            { display: "0.4498" },
            { display: "0.6688" },
            { display: "0.6397" },
            { display: "5.58" },
          ],
        },
        {
          model: "3DIS",
          citation: "[ICLR 2025]",
          values: [
            { display: "0.3813" },
            { display: "0.6505" },
            { display: "0.7767" },
            { display: "0.8684" },
            { display: "4.86" },
          ],
        },
        {
          model: "TextCrafter (Qwen-Image)",
          dividerBefore: true,
          isOurs: true,
          values: [
            { display: "0.9400", rank: "best", note: "(+13.4%)" },
            { display: "0.9757", rank: "best", note: "(+7.0%)" },
            { display: "0.8305", rank: "best", note: "(+3.6%)" },
            { display: "0.9570", rank: "best" },
            { display: "5.90", rank: "best" },
          ],
        },
      ],
    },
    {
      key: "cvtg-hard",
      label: "CVTG-Hard",
      description:
        "On CVTG-Hard, competitive baselines decline sharply, while TextCrafter maintains the best Word and Span Accuracy together with the best NED on both English and Chinese subsets.",
      note: "Chinese results are evaluated at the span level with consecutive-line matching.",
      minTableWidth: "68rem",
      metrics: [
        { label: "EN Word Accuracy" },
        { label: "EN NED" },
        { label: "ZH Span Accuracy" },
        { label: "ZH NED" },
      ],
      rows: [
        {
          model: "FLUX.1 dev",
          citation: "[Black Forest Labs 2024]",
          values: [
            { display: "0.2427" },
            { display: "0.4612" },
            { display: "0.0000" },
            { display: "0.0104" },
          ],
        },
        {
          model: "SD3.5",
          citation: "[ICML 2024]",
          values: [
            { display: "0.4623" },
            { display: "0.7078" },
            { display: "0.0014" },
            { display: "0.0105" },
          ],
        },
        {
          model: "Qwen-Image",
          citation: "[Alibaba 2025]",
          values: [
            { display: "0.6312" },
            { display: "0.7776" },
            { display: "0.6526" },
            { display: "0.8237" },
          ],
        },
        {
          model: "Z-Image",
          citation: "[Alibaba 2025]",
          values: [
            { display: "0.7218" },
            { display: "0.8477" },
            { display: "0.7125" },
            { display: "0.8548" },
          ],
        },
        {
          model: "Longcat-Image",
          citation: "[Meituan 2025]",
          values: [
            { display: "0.7991" },
            { display: "0.8919" },
            { display: "0.6894" },
            { display: "0.8415" },
          ],
        },
        {
          model: "HunyuanImage3.0",
          citation: "[Tencent 2025]",
          values: [
            { display: "0.6719" },
            { display: "0.8221" },
            { display: "0.5821" },
            { display: "0.7315" },
          ],
        },
        {
          model: "GLM-Image",
          citation: "[Z.ai 2026]",
          values: [
            { display: "0.8171", rank: "second" },
            { display: "0.9000", rank: "second" },
            { display: "0.8610", rank: "second" },
            { display: "0.9164", rank: "second" },
          ],
        },
        {
          model: "TextCrafter (Qwen-Image)",
          dividerBefore: true,
          isOurs: true,
          values: [
            { display: "0.8862", rank: "best", note: "(+40.4%)" },
            { display: "0.9470", rank: "best", note: "(+21.8%)" },
            { display: "0.8692", rank: "best", note: "(+33.2%)" },
            { display: "0.9518", rank: "best", note: "(+15.6%)" },
          ],
        },
      ],
    },
    {
      key: "longtext-bench",
      label: "LongText-Bench",
      description:
        "On LongText-Bench, TextCrafter attains state-of-the-art text accuracy on both English and Chinese subsets, outperforming leading commercial systems and strong open-source competitors.",
      note: "Metrics report text accuracy on English, Chinese, and their average.",
      minTableWidth: "58rem",
      figure: {
        src: "/images/results/longtextbench.jpeg",
        alt: "LongText-Bench quantitative comparison chart",
        width: 11067,
        height: 6347,
      },
      metrics: [{ label: "EN" }, { label: "ZH" }, { label: "Avg" }],
      rows: [
        {
          model: "GPT-4o",
          values: [
            { display: "0.956", rank: "second" },
            { display: "0.619" },
            { display: "0.788" },
          ],
        },
        {
          model: "Gemini-2.5",
          values: [{ display: "0.869" }, { display: "0.326" }, { display: "0.598" }],
        },
        {
          model: "Seedream 3.0",
          values: [{ display: "0.896" }, { display: "0.878" }, { display: "0.887" }],
        },
        {
          model: "Kolors 2.0",
          values: [{ display: "0.258" }, { display: "0.329" }, { display: "0.294" }],
        },
        {
          model: "Janus-Pro",
          dividerBefore: true,
          values: [{ display: "0.019" }, { display: "0.006" }, { display: "0.013" }],
        },
        {
          model: "BLIP3-o",
          values: [{ display: "0.021" }, { display: "0.018" }, { display: "0.020" }],
        },
        {
          model: "BAGEL",
          values: [{ display: "0.373" }, { display: "0.310" }, { display: "0.342" }],
        },
        {
          model: "OmniGen2",
          values: [{ display: "0.561" }, { display: "0.059" }, { display: "0.310" }],
        },
        {
          model: "Show-o2",
          values: [{ display: "0.006" }, { display: "0.002" }, { display: "0.004" }],
        },
        {
          model: "X-Omni",
          values: [{ display: "0.900" }, { display: "0.814" }, { display: "0.857" }],
        },
        {
          model: "FLUX.1[Dev]",
          values: [{ display: "0.607" }, { display: "0.005" }, { display: "0.306" }],
        },
        {
          model: "Z-Image",
          values: [{ display: "0.935" }, { display: "0.936" }, { display: "0.936" }],
        },
        {
          model: "Ovis-Image",
          values: [
            { display: "0.922" },
            { display: "0.964", rank: "second" },
            { display: "0.943" },
          ],
        },
        {
          model: "Qwen-Image",
          values: [
            { display: "0.943" },
            { display: "0.946" },
            { display: "0.945", rank: "second" },
          ],
        },
        {
          model: "TextCrafter",
          dividerBefore: true,
          isOurs: true,
          values: [
            { display: "0.968", rank: "best" },
            { display: "0.975", rank: "best" },
            { display: "0.972", rank: "best" },
          ],
        },
      ],
    },
    {
      key: "geneval",
      label: "Geneval",
      description:
        "On Geneval, TextCrafter slightly improves the overall score over Qwen-Image, showing that the gains on complex visual text do not come at the expense of general text-to-image generation quality.",
      note: "All Geneval results are cited from previous papers.",
      minTableWidth: "86rem",
      metrics: [
        { label: "Single Object" },
        { label: "Two Object" },
        { label: "Counting" },
        { label: "Colors" },
        { label: "Position" },
        { label: "Attribute Binding" },
        { label: "Overall" },
      ],
      rows: [
        {
          model: "FLUX.1 dev",
          citation: "[Black Forest Labs 2024]",
          values: [
            { display: "0.98" },
            { display: "0.81" },
            { display: "0.74" },
            { display: "0.79" },
            { display: "0.22" },
            { display: "0.45" },
            { display: "0.66" },
          ],
        },
        {
          model: "GPT Image 1 [High]",
          citation: "[OpenAI 2025]",
          values: [
            { display: "0.99", rank: "second" },
            { display: "0.92" },
            { display: "0.85" },
            { display: "0.92" },
            { display: "0.75", rank: "second" },
            { display: "0.61" },
            { display: "0.84" },
          ],
        },
        {
          model: "Seedream 4.0",
          citation: "[ByteDance 2025]",
          values: [
            { display: "0.99", rank: "second" },
            { display: "0.92" },
            { display: "0.72" },
            { display: "0.91" },
            { display: "0.76", rank: "best" },
            { display: "0.74" },
            { display: "0.84" },
          ],
        },
        {
          model: "Qwen-Image",
          citation: "[Alibaba 2025]",
          values: [
            { display: "0.99", rank: "second" },
            { display: "0.92" },
            { display: "0.89", rank: "second" },
            { display: "0.88" },
            { display: "0.76", rank: "best" },
            { display: "0.77", rank: "second" },
            { display: "0.87", rank: "second" },
          ],
        },
        {
          model: "Longcat-Image",
          citation: "[Meituan 2025]",
          values: [
            { display: "0.99", rank: "second" },
            { display: "0.98", rank: "best" },
            { display: "0.86" },
            { display: "0.86" },
            { display: "0.75", rank: "second" },
            { display: "0.73" },
            { display: "0.87", rank: "second" },
          ],
        },
        {
          model: "Z-Image",
          citation: "[Alibaba 2025]",
          values: [
            { display: "1.00", rank: "best" },
            { display: "0.95" },
            { display: "0.78" },
            { display: "0.93", rank: "best" },
            { display: "0.62" },
            { display: "0.77", rank: "second" },
            { display: "0.84" },
          ],
        },
        {
          model: "Show-o",
          citation: "[ICLR 2025]",
          dividerBefore: true,
          values: [
            { display: "0.95" },
            { display: "0.52" },
            { display: "0.49" },
            { display: "0.82" },
            { display: "0.11" },
            { display: "0.28" },
            { display: "0.53" },
          ],
        },
        {
          model: "PixArt-alpha",
          citation: "[ICLR 2024]",
          values: [
            { display: "0.98" },
            { display: "0.50" },
            { display: "0.44" },
            { display: "0.80" },
            { display: "0.08" },
            { display: "0.07" },
            { display: "0.48" },
          ],
        },
        {
          model: "SD3.5 Large",
          citation: "[ICML 2024]",
          values: [
            { display: "0.98" },
            { display: "0.89" },
            { display: "0.73" },
            { display: "0.83" },
            { display: "0.34" },
            { display: "0.47" },
            { display: "0.71" },
          ],
        },
        {
          model: "Lumina-Image 2.0",
          citation: "[ICCV 2025]",
          values: [
            { display: "-" },
            { display: "0.87" },
            { display: "0.67" },
            { display: "-" },
            { display: "-" },
            { display: "0.62" },
            { display: "0.73" },
          ],
        },
        {
          model: "TextCrafter(Qwen-Image)",
          dividerBefore: true,
          isOurs: true,
          values: [
            { display: "0.99", rank: "second" },
            { display: "0.97", rank: "second" },
            { display: "0.90", rank: "best" },
            { display: "0.92", rank: "second" },
            { display: "0.73" },
            { display: "0.83", rank: "best" },
            { display: "0.88", rank: "best" },
          ],
        },
      ],
    },
  ],
} satisfies ExperimentalResultsData;
