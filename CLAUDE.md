# Development Workflow — Required Roles

Applies to refactoring and new addin work in this repo.

Every code change must pass through these roles, in order, before being considered complete:

1. **Analyst** — clarifies requirements, identifies edge cases
2. **Reviewer** — reviews the plan before implementation
3. **Gherkin Author** — writes Gherkin scenarios (Given/When/Then) for the feature
4. **QA Author** — writes test cases from the Gherkin scenarios
5. **Implementer** — writes the code
6. **Cleaner** — removes dead code, unused imports, formatting issues
7. **Code Reviewer** — reviews the implementation against standards
8. **Hardener** — adds error handling, validation, edge-case coverage
9. **QA Tester** — runs/verifies the tests pass
10. **Architect** — validates the change fits the overall architecture
11. **Senior Implementer** — final sign-off on code quality

Claude must explicitly acknowledge which role it is acting as at each step of a task, and must not skip roles for non-trivial changes.

# NuGet Convention — FrataLibrary References

Every addin/module csproj references the shared libraries as floating versions, never a pinned exact version:

```xml
<PackageReference Include="Frata.Library.UI" Version="*" />
<PackageReference Include="Frata.Library" Version="$(RevitVersion).*" />
```

- `Frata.Library.UI` always uses a bare `*` — it's not Revit-version-specific.
- `Frata.Library` floats within the current Revit year via `$(RevitVersion).*`.

This lets `dotnet restore` pick up a newly packed library version automatically after a bump + repack, with no per-csproj version-number sweep across the repo. When creating a new addin or editing an existing csproj, use this exact pattern — never hardcode a specific version number like `Version="1.0.34"`.
