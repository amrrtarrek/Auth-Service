Phase 2: Design the CI Pipeline
1. Which three stages will your pipeline include, and what does each stage do? Your pipeline will include three sequential jobs:
Lint: Checks the code to ensure it follows your team's style rules and catches basic syntax errors early.
Build: Verifies that the code can be successfully built into a Docker image.
Test: Runs the existing test suite to ensure no existing functionality was broken by the new code.

2. What event(s) should trigger the pipeline? The pipeline should be triggered automatically by any Pull Request targeting the main branch. This ensures every piece of code is validated before it is allowed to merge.

3. What is your quality gate—i.e., under what conditions should a PR be blocked? The PR must be blocked if any of the three jobs (lint, build, or test) fail. The squad must see a green checkmark for all three stages; if the pipeline is red, no merging is allowed and the team must fix the pipeline first.

4. How will you ensure the pipeline finishes in under 10 minutes? We keep the pipeline fast by making smart Docker choices in Phase 1: using a lightweight node:18-alpine base image and utilizing Docker layer caching (copying package.json and running npm ci before copying the rest of the source code). Additionally, npm ci is faster and more deterministic than a standard npm install.