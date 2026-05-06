import {
  bimtoolsManuals,
  bimtoolsSuites,
  type BimtoolsManualEntry,
  type BimtoolsSuite,
} from "@/lib/generated/bimtools-manuals";

export interface BimtoolsSuiteWithManuals extends BimtoolsSuite {
  manuals: BimtoolsManualEntry[];
}

export interface BimtoolsOverview {
  totalAddins: number;
  premiumAddins: number;
  freeAddins: number;
}

export function getBimtoolsSuitesWithManuals(): BimtoolsSuiteWithManuals[] {
  return bimtoolsSuites.map((suite) => ({
    ...suite,
    manuals: suite.addins
      .map((slug) => bimtoolsManuals.find((manual) => manual.slug === slug))
      .filter((manual): manual is BimtoolsManualEntry => Boolean(manual)),
  }));
}

export function getBimtoolManual(slug: string): BimtoolsManualEntry | undefined {
  return bimtoolsManuals.find((manual) => manual.slug === slug);
}

export function getBimtoolsSuiteWithManuals(suiteId: string): BimtoolsSuiteWithManuals | undefined {
  return getBimtoolsSuitesWithManuals().find((suite) => suite.id === suiteId);
}

export function getBimtoolsOverview(): BimtoolsOverview {
  return bimtoolsManuals.reduce(
    (overview, manual) => {
      overview.totalAddins += 1;

      if (manual.commerce.isPremium) {
        overview.premiumAddins += 1;
      } else {
        overview.freeAddins += 1;
      }

      return overview;
    },
    {
      totalAddins: 0,
      premiumAddins: 0,
      freeAddins: 0,
    }
  );
}
