// Facts sourced only from the resume PDF and docs/*-resume-audit.md.
// No invented metrics, user counts, or outcomes.
// Titles match the resume's "Key Projects" section exactly — three of the four
// are kept generic there (no client/product brand names), so this file follows
// suit rather than exposing internal repo names.

export const projects = [
	{
		slug: "meetday",
		name: "Meetday — Community & Events Platform",
		short: "Community & Events Platform",
		summary:
			"Built the host web app and admin console solo — 55 routes across two codebases. Real-time chat and DMs across 17 inbound and 13 outbound Socket.IO events, a five-step AI-assisted event wizard, and Razorpay, Google Maps, and QR check-in behind key-shielding proxy routes.",
		role: "Solo frontend engineer — sole contributor on both codebases, joined at project start",
		timeline: "Apr 2026 – Jul 2026 · 130 commits across two codebases",
		stack: [
			"Next.js 16 (App Router)",
			"TypeScript",
			"Zustand",
			"Socket.IO",
			"Firebase Auth",
			"Razorpay (checkout)",
			"Google Maps API",
			"TanStack Query + Table",
			"React Hook Form + Zod",
		],
		overview:
			"Meetday's host and attendee web app, plus its internal admin console — built and shipped solo across two Next.js codebases. Both are predominantly client-rendered SPA-on-App-Router builds: server components handle shell/layout wrapping, while nearly every route is a client component driving real-time chat, event creation, and community management.",
		highlights: [
			{
				title: "Real-time chat & DM state store",
				body: "A 469-line Zustand store coordinating per-channel and per-DM message maps, cursor-based pagination, and session-level unread counters. Self-expiring typing indicators are managed with a module-level Map of setTimeout handles, cleared on every keystroke. Message delivery is deduplicated by ID to prevent double-renders when a REST fetch and a live socket event race.",
			},
			{
				title: "5-step event wizard with AI draft integration",
				body: "A 1,781-line creation flow with independently validated steps (basic info, date/location, media, ticket tiers, review) sharing one page-level state tree. An AI 'generate draft' action populates multiple steps at once from a single response, so each step's validator has to accept partial, out-of-order population without breaking.",
			},
			{
				title: "Key-shielding proxy routes",
				body: "Next.js Route Handlers act as backend-for-frontend proxies — one keeps a third-party maps API key off the client, another is a catch-all forwarder for check-in requests, translating backend failures into clean JSON errors instead of raw network exceptions.",
			},
			{
				title: "2,070-line API reconciliation layer",
				body: "On the admin side, a single file defines internal API response types separately from UI-facing view models and hand-writes mapping functions that reshape backend payloads into presentation-ready shapes — including deriving colors, initials, and relative-time strings client-side.",
			},
			{
				title: "5-step community-creation wizard",
				body: "Cross-component state coordination via Zustand on the admin console: per-step setters, step navigation, and a live preview panel all stay in sync without a page reload, gated by client-side RBAC across 4 roles and 15 permissions.",
			},
		],
		metrics: [
			{ value: "130", label: "Commits, solo" },
			{ value: "55", label: "Routes across 2 codebases" },
			{ value: "17 / 13", label: "Socket events in / out" },
			{ value: "104", label: "API calls, host app" },
		],
	},
	{
		slug: "family-records-vault-platform",
		name: "Family Records & Digital Vault Platform",
		short: "Family Records & Digital Vault Platform",
		summary:
			"Built all three surfaces solo — a 53-screen React Native app, a 24-route web app, and a 15-route admin console. Secured documents with AES-256-GCM encryption over a presigned-S3 upload, OCR extraction, and asset-reconciliation pipeline, and integrated India's Account Aggregator consent flow across financial-instrument types.",
		role: "Solo frontend engineer across all three surfaces — sole contributor, joined at project start",
		timeline: "Mar 2026 – Jul 2026 · 152 commits across three codebases",
		stack: [
			"React Native (Expo)",
			"Next.js (App Router)",
			"TypeScript",
			"Redux Toolkit + RTK Query",
			"Zustand",
			"React Hook Form + Zod",
			"Radix UI / shadcn",
			"Firebase Auth",
			"AWS S3 (presigned uploads)",
		],
		overview:
			"A family document vault and asset-tracking product shipped as three separate, fully solo-built surfaces: a mobile app for day-to-day capture and vault access, a web app for deeper asset and liability management, and an admin console for internal operations and compliance oversight.",
		highlights: [
			{
				title: "Client-side vault encryption",
				body: "AES-256-GCM encryption with a 210,000-iteration PBKDF2 key derivation, run asynchronously off the JS thread after the synchronous variant was found to freeze the UI on real devices — a concrete performance tradeoff made and verified in-app.",
			},
			{
				title: "Presigned-S3 upload feeding an OCR pipeline",
				body: "A presign-then-direct-PUT upload flow feeding a multi-stage document intelligence pipeline: upload → OCR extraction → suggested-match resolution → confirm/link to an asset or liability.",
			},
			{
				title: "Account Aggregator consent flow",
				body: "A from-scratch REST integration implementing India's Account Aggregator consent → poll → fetch pattern against a backend proxy with several undocumented, evolving response shapes, defensively parsed rather than assumed stable.",
			},
			{
				title: "1,001-line multi-step asset wizard",
				body: "A physical-asset intake drawer with 53 react-hook-form fields, a category-conditional Zod schema, and embedded insurance/loan sub-forms sharing one form state behind a step-indicator wizard.",
			},
			{
				title: "Layered admin permission model",
				body: "Access on the admin console is gated at 4 layers — edge cookie presence check, nav visibility, hook-level view/edit checks, and a hardcoded role check for unmasked PII — with the edge check honestly documented in-code as presence-only, not a verified session.",
			},
		],
		metrics: [
			{ value: "152", label: "Commits, solo" },
			{ value: "3", label: "Surfaces shipped solo" },
			{ value: "53", label: "Mobile screens" },
			{ value: "210k", label: "PBKDF2 iterations" },
		],
	},
	{
		slug: "donation-csr-platform",
		name: "Donation & CSR Platform",
		short: "Donation & CSR Platform",
		summary:
			"Contributed 304 of 512 commits as one of two developers, and was the sole committer for the final 23 weeks. Built role-based navigation and gating for 6 roles across 54 routes, and integrated the frontend with a serverless AWS Lambda backend architecture.",
		role: "One of two primary developers (59% of commits) — sole committer for the final 23 weeks",
		timeline: "May 2024 – Dec 2025 · ~48 weeks of active work across two phases",
		stack: [
			"Next.js (Pages Router)",
			"React",
			"Redux Toolkit",
			"React Hook Form + Yup",
			"AWS Lambda (serverless backend integration)",
			"Firebase Auth",
		],
		overview:
			"A donation and CSR management platform — campaigns, brands, merchants, causes, and transactions across 54 routes, entirely client-rendered, with the frontend integrated against a serverless AWS Lambda backend.",
		highlights: [
			{
				title: "Built the entire test suite from scratch",
				body: "115 Jest/RTL files and roughly 510 test cases, authored solo — the only project in this portfolio with a real automated test suite, against coverage thresholds configured in the project's Jest config.",
			},
			{
				title: "28-field onboarding form",
				body: "A ~1,950-line form (fully authored solo) validating roughly 28 fields with a Yup schema — file uploads with size checks, cascading location dropdowns driven by chained effects, and multiple document uploads with custom file-size validators.",
			},
			{
				title: "Role-based navigation gating",
				body: "A fully solo-authored navigation module drives sidebar visibility across 6 distinct roles via per-entry predicates combining role checks — client-side gating, honestly scoped as such.",
			},
			{
				title: "Token-exchange auth layer",
				body: "Every request fetches a fresh Firebase ID token, exchanges it against a backend verify endpoint, and attaches the resulting backend-issued token — powering roughly 150 API function files across the app.",
			},
		],
		metrics: [
			{ value: "304 / 512", label: "Commits (59%)" },
			{ value: "115", label: "Test files, solo-built" },
			{ value: "54", label: "Routes" },
			{ value: "6", label: "User roles gated" },
		],
	},
	{
		slug: "mental-health-platform",
		name: "Mental Health Platform",
		short: "Mental Health Platform",
		summary:
			"Took over mid-development during a team transition and ran the panel solo for 30 weeks. Authored all 22 App Router routes and a typed Firebase-token API client spanning 62 endpoint modules, plus a doctor onboarding form with dynamic field arrays and cross-field Zod validation.",
		role: "Took over mid-project — solo committer for the final ~30 weeks (46% of non-merge commits)",
		timeline: "Mar 2025 – Nov 2025 · ~34 weeks active involvement",
		stack: [
			"Next.js 15 (App Router)",
			"React 19",
			"TypeScript",
			"Redux Toolkit",
			"React Hook Form + Zod/Yup",
			"react-bootstrap",
			"Firebase Auth",
			"Socket.IO client",
		],
		overview:
			"An admin and doctor-facing panel for a mental health platform — appointments, patients, doctors, transactions, and reports across 22 App Router routes, all authored solo after joining mid-project during a team transition.",
		highlights: [
			{
				title: "5-endpoint dashboard aggregation",
				body: "A dashboard data layer fans out 5 independent API calls via Promise.all and reshapes each into a common structure consumed by one dashboard view — avoiding request waterfalls while reconciling differently-shaped responses.",
			},
			{
				title: "Doctor onboarding form with dynamic fields",
				body: "An 893-line form with 13 top-level fields, 2 dynamic field-array sections (education history, weekly availability), a Zod cross-field rule enforcing start-before-end time per availability row, 2 MIME-validated image uploads, and an embedded Google OAuth calendar-consent flow triggered mid-form.",
			},
			{
				title: "4-modal appointment workflow orchestration",
				body: "A single table view coordinating 4 separate modal flows — OTP verification, reschedule, prescription, medical certificate — against a single row's state, keeping refetch and open/close state consistent across independent async mutations.",
			},
			{
				title: "Token-expiry-aware real-time notifications",
				body: "A single hook manages the Socket.IO connection lifecycle tied to auth-token availability, forcing a disconnect on token expiry and delivering notification events as toasts via the global nav.",
			},
		],
		metrics: [
			{ value: "168", label: "Commits (46% of repo)" },
			{ value: "~30", label: "Weeks solo committer" },
			{ value: "22", label: "Routes" },
			{ value: "62", label: "API modules" },
		],
	},
]

export function getProjectBySlug(slug) {
	return projects.find(p => p.slug === slug)
}
