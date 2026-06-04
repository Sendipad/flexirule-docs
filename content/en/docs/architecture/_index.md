---
title: "Architecture"
weight: 50
---

# Architecture Overview

Deep dive into the internal system design and deterministic execution engine of FlexiRule.

## Subsystems

- **[Engine]({{< relref "engine/" >}})**: The deterministic graph executor and lifecycle manager.
- **[Runtime]({{< relref "runtime/" >}})**: How rules are dispatched and executed.
- **[Resolver]({{< relref "resolver/" >}})**: Dynamic value resolution and formulas.
- **[UI Architecture]({{< relref "ui/" >}})**: The design of the visual builder and component system.
- **[Contracts]({{< relref "contracts/" >}})**: Formal definitions for all action nodes.
- **[Internals]({{< relref "internals/" >}})**: Low-level implementation details.

---

## Design Philosophy
FlexiRule is built on the principle of **Orchestration vs. Implementation**. It provides the visual layer to coordinate reusable code units (Processes) into complex business flows.
