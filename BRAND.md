# MOB — Brand guide

Controlling revision 3 · 11 September 2026 · Owner: Vaibhav Sharma

## The idea

**Your AI. Its own computer.**

Category: pocket personal AI computer, in development.

Canonical description: “MOB is a pocket AI computer being designed to run its own local model, speech, working memory, browser and commands. Speak to it, review its work on your iPhone, and connect the devices and tools you approve.”

Retain **Your world, within reach.** as the supporting brand line. The opening must explain the physical object before asking someone to admire it. A client follow-up is one example; it does not define the product category. Founders, technical builders and independent professionals are research hypotheses, not an established customer base.

The brand should feel capable, precise and tactile. Cinematic visuals create desire after the category and experience become clear. Honest development status is part of the product story.

## Voice and claims

Use concrete verbs: speak, research, make, connect, run, review, approve, stop. Explain what the person asks, which resources are allowed, what work happens and what comes back. Keep “harness,” “tailnet,” model sizes and component part numbers out of the first consumer explanation; use them when an engineering reader needs precision.

Use “in development,” “planned,” “candidate,” “target” and “measured” accurately. A measured claim requires its test conditions, hardware/software revision and result. Current capability wording describes design intent: there is no validated integrated prototype, measured runtime or proven universal call/device coverage.

Do not imply that all activity remains offline. Local inference is the architecture goal; web and remote tasks use networks. Tailscale supplies connectivity, while host adapters and operating-system permissions determine actual access. Microphone mute and cancellation of an already-running task are different controls. Magnetic attachment is not MagSafe/Qi2 certification or evidence of phone-to-device power.

Do not publish a retail price, margin, delivery date, production agreement, customer count, performance improvement, investor interest or certification without its supporting record. Supplier introductions are not partnerships; public investment focus is not interest. A pitch study is not customer research. Remove unsupported price/margin anchors rather than keeping them as persuasive numbers with small-print qualifications.

## Visual system

The current website uses cinematic graphite, a silver object and one signal-blue family. Color values below are read from the current CSS; they are intentional design tokens, not inferred material specifications.

| Element | Controlling rule |
|---|---|
| Wordmark | Lowercase `mob`, close letter spacing, small signal-blue dot. Maintain legibility at small sizes. No registration symbol without verified status. |
| Main ground | Graphite #080B12; surface #111722. Avoid large accidental black rectangles around image assets. |
| Main text | #F0F3F8; secondary #A6AFBF; divider #27303F. Keep body and fine-print contrast readable. |
| Signal | #91B5FF for routes, focus and meaningful emphasis; pale #E1EBFF for primary controls. Use one coherent signal language across chapters. |
| Light chapter | #EDF1F7 background with #182133 text for the proof/development section. This change in tone marks a change in the argument. |
| Object | Silver/graphite, credible thickness, consistent controls and cable direction. Surfaces should feel tangible, not liquid or magically weightless. |
| Typography | Web: Arial/Helvetica/system sans. Deck: the established native sans family. Large clear headlines, restrained letter spacing and readable artifact text. |
| Hierarchy | Category first; a useful example next; engineering detail later. Essential copy remains HTML or editable slide text, not text baked into imagery. |
| Layout | Chapter-based compositions, one dominant idea per scene. Avoid consumer-facing dashboard clutter and unexplained networks of logos. |
| Concept label | Keep a visible label adjacent to every product render and illustrative walkthrough. Never identify generated images as prototype photographs. |

Brand name, domain and trademark clearance remain open before commercial production. Current imagery does not establish final CAD, product dimensions, materials, manufacturability or availability.

## Image and motion system

Original imagery is preferred. Each image has a job: identify the object, establish scale, explain a control, show a possible task context or clarify the proposed internal architecture. Generated exploded imagery supplies an illustrative view; exact component layouts and dimensions require controlled engineering drawings.

The current front/rear product images are RGB textures, not transparent assets. Setting a WebGL material's opacity does not give an RGB image an alpha channel. Use intentional compositing and inspect dark product details; do not assume a rectangular background disappears. The voice sheet is an RGBA alpha sprite with eight frames in a 4 × 2 grid. Preserve the square frame geometry and check all frames for cropping, bleed and visible jumps. Do not label an image as transparent without checking its channel data.

Three.js currently supports image-plane parallax and visual inspection between front/back views. This is not a volumetric CAD model or a true 360-degree product orbit. Use accurate labels such as “Front,” “Back” and “Explore the concept.” A request for cinematic work does not justify calling a texture plane a manufactured object.

Motion should teach cause, scale, position or a physical interaction. Keep native scrolling, a visible global motion control, a persisted manual pause and system reduced-motion support across CSS and JavaScript/WebGL. Decide the override policy once and apply it consistently. No forced introductory film, scroll trap, autoplay sound or simulated progress that implies real execution.

Provide readable still states, an ordinary image fallback, and coherent behavior on texture failure or WebGL context loss. Stop offscreen GPU drawing and defer secondary assets. Phone, keyboard, reduced-motion, fallback and form checks are separate from a smooth desktop capture. Do not claim GPU rendering was verified if only fallback was exercised.

## Product story

1. Name the object: a pocket AI computer with its own local model and tools.
2. Show a spoken request, permitted context and a useful illustrative result.
3. Explain the device's own computer and why dedicated hardware might earn its place.
4. Explain approved reach: supported local tools, web access and chosen external devices.
5. Show the iPhone's role in setup, review, permissions and control.
6. Make the physical details desirable and understandable: audio, mute, cancellation, cable, charging and mounting.
7. State the current stage and next proof milestone; invite participation without a purchase promise.

Use research, file/document work and an approved computer command as distinct examples. Calls remain a separate engineering target. Show readable example artifacts, not only descriptions of what an output would contain. Label fictional names, sources, command results and data as illustrative.

## Calls to action and audience routes

| Audience | Preferred next action |
|---|---|
| Curious visitor | “Explore the experience” or “Follow the build” |
| Research participant | Describe a recent workflow; opt into a research conversation or future pilot consideration |
| Hardware partner | Discuss a specific feasibility scope and identify a technical owner |
| Investor | Read the current pitch and discuss the next evidence milestone |
| Future customer/backer | Introduce a purchase/pledge action only after function, price, terms and readiness can be substantiated |

A form confirmation reports what was saved and what happens next. No fake countdowns, scarcity, testimonials, waitlist positions or implied endorsements. Keep investors, suppliers and prospective users on distinct follow-up paths while preserving the same product facts.

## Outreach pattern

“I’m Vaibhav, building MOB, a pocket AI computer in development. [One verified reason this recipient fits.] [One unresolved engineering or investment question.] [The current stage and relevant next proof.] [One answerable request.]”

Use [MOB-Sales-Pitch-v3.md](MOB-Sales-Pitch-v3.md) for wording and [MOB-Launch-Prospects.xlsx](MOB-Launch-Prospects.xlsx) for prospect evidence and next actions. Do not transmit placeholders. Attach or link the current asset that helps answer the specific question. Preserve previous messages as history; do not automatically resend a revised deck.

## Revision history

- 10 September 2026: initial white/silver visual system and broad personal-computer concept.
- 11 September 2026, revision 2: the opening was narrowed to client follow-up and independent technical consultants. This positioning is superseded.
- 11 September 2026, revision 3: restores the broad vision, adopts cinematic graphite/silver/signal blue and formalizes concept, evidence and motion rules. This revision controls new site, deck, GitHub and outreach copy.
