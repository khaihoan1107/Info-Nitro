<!--
SYNC IMPACT REPORT
==================
Version change: (template) → 1.0.0
Constitution status: Initial ratification — all sections newly authored from template.

Modified principles: N/A (first version)
Added sections:
  - Core Principles (I–V)
  - Quality Standards
  - Development Workflow
  - Governance

Removed sections: N/A

Templates checked:
  - .specify/templates/plan-template.md        ✅ Compatible — Constitution Check gate present
  - .specify/templates/spec-template.md        ✅ Compatible — FR/SC mandatory sections align
  - .specify/templates/tasks-template.md       ✅ Compatible — phase/story structure aligns

Deferred TODOs: None
-->

# Info-Nitro Constitution

## Core Principles

### I. Incremental Value Delivery

Every feature MUST be deliverable as independently testable increments. Each user story
MUST stand alone as a viable MVP slice — it can be developed, tested, and demonstrated
without requiring other stories to be complete. Features that cannot be decomposed into
independent slices MUST be flagged for scope review before implementation begins.

**Rationale**: Prevents all-or-nothing delivery risk and enables rapid feedback loops.

### II. Specification Before Implementation

No implementation work MUST begin without an approved specification (`spec.md`) and
implementation plan (`plan.md`). Ambiguous requirements MUST be resolved during
clarification — not during coding. The spec is the source of truth; the code is its
expression.

**Rationale**: Late discovery of requirement gaps is the primary cause of rework.
Front-loading clarity is always cheaper than retrofitting correctness.

### III. Test Discipline

When tests are requested for a feature, they MUST be written before implementation and
MUST demonstrably fail before any production code is written (Red-Green-Refactor). Tests
MUST cover the acceptance scenarios defined in `spec.md`. Skipping the failing-test step
is a constitution violation.

**Rationale**: Tests written after implementation verify coincidence, not correctness.

### IV. Simplicity by Default

The simplest solution that satisfies the specification MUST be chosen. Complexity MUST
be justified in the `Complexity Tracking` section of `plan.md`. Speculative abstractions,
premature generalizations, and YAGNI violations are prohibited. Every added dependency,
layer, or pattern requires an explicit rationale tied to a current requirement.

**Rationale**: Complexity compounds; simplicity compounds too. Choose the direction that
helps future maintainers.

### V. Observability and Traceability

All non-trivial operations MUST emit structured log events at appropriate severity levels.
Errors MUST include enough context to diagnose root cause without a debugger attached.
Feature branches MUST be traceable to a spec (`###-feature-name` naming convention).
Commits MUST be atomic and reference the task ID they implement.

**Rationale**: Systems that cannot be observed cannot be reliably operated or improved.

## Quality Standards

All code merged to `main` MUST satisfy the following gates:

- **Specification gate**: A `spec.md` exists and has been reviewed.
- **Plan gate**: A `plan.md` exists with a completed Constitution Check.
- **Test gate**: Acceptance scenarios from `spec.md` are covered by tests (when tests
  are in scope for the feature).
- **Simplicity gate**: No unjustified complexity entries exist in `plan.md`.
- **Observability gate**: Key operations emit structured log events.

Any PR that cannot demonstrate compliance with applicable gates MUST NOT be merged.
The author is responsible for gate compliance; reviewers are responsible for verifying it.

## Development Workflow

Work follows the speckit workflow stages in order:

1. **Constitution** — Project-level non-negotiable rules (this document).
2. **Specify** — User stories, requirements, and acceptance scenarios.
3. **Clarify** — Resolve open questions before planning.
4. **Plan** — Technical approach, structure, and Constitution Check.
5. **Tasks** — Granular implementation checklist derived from plan + spec.
6. **Implement** — Code written against tasks; tests written first when in scope.
7. **Checklist** — Completion verification before merge.

Stages MUST NOT be skipped. Returning to an earlier stage (e.g., re-specifying during
implementation) is acceptable and encouraged when new information surfaces — update the
artifacts and continue.

## Governance

This constitution supersedes all informal practices, verbal agreements, and prior
conventions. In any conflict between this document and other guidance, the constitution
wins unless explicitly amended.

**Amendment procedure**:

1. Propose the change with rationale in writing (PR description or spec document).
2. Obtain explicit approval from at least one other project contributor.
3. Update this file, increment the version, set `Last Amended` to today's date.
4. Run `/speckit.constitution` to propagate changes to dependent templates.
5. Document the change in the Sync Impact Report (HTML comment at top of this file).

**Versioning policy**:

- MAJOR: Principle removed, redefined, or governance structure fundamentally changed.
- MINOR: New principle or section added; materially expanded guidance.
- PATCH: Clarifications, wording improvements, typo fixes.

**Compliance review**: Constitution Check in `plan.md` is the primary compliance
instrument. Reviews MUST verify all gates before approving a PR.

**Version**: 1.0.0 | **Ratified**: 2026-04-13 | **Last Amended**: 2026-04-13
