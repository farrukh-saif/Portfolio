export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "from-the-bench-to-orbit",
    title: "From the bench to orbit",
    date: "2026-09-19",
    summary:
      "Why this site exists: notes on space optical AIT at Honeywell and biomedical imaging at UW.",
    body: [
      "I spend my days aligning and testing spaceborne optical hardware at Honeywell Aerospace in Cambridge, and my nights (and leftover daylight) on photothermal and OCT systems at PhotoMedicine Labs.",
      "The two jobs look different on paper. One is satellite hardware and quantum-communications payloads. The other is a microscope I built from lasers, scanners, and a Python acquisition stack. Both are the same problem: get light where it needs to go, then make the measurement honest.",
      "I will use this page for short notes — alignment stories, reconstruction bugs, and whatever is actually on the bench that week. No launch-manifest fluff.",
    ],
  },
  {
    slug: "what-ait-actually-means",
    title: "What AIT actually means on an optical payload",
    date: "2026-09-12",
    summary:
      "Assembly, integration, and test is not a slogan. It is the slow work that decides whether a payload survives the ride.",
    body: [
      "AIT is the unglamorous middle of a space optical program: you assemble the optomechanics, co-align the beam path, and test the thing as a system before anyone talks about orbit.",
      "On quantum-communications hardware that work is less forgiving. Alignment budgets are tight, thermal and vibe tests are not optional, and a pretty CAD model does not count as a measurement.",
      "I am still early in this role. These notes will stay specific: what we aligned, what drifted, and what the test actually showed.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
