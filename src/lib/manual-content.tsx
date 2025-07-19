import type { Locale, translations } from "@/lib/locales"

type TranslationKey = keyof typeof translations.en;

export interface Addin {
  id: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  image?: {
    src: string
    alt: string
    dataAiHint: string
  }
  steps: TranslationKey[]
  usageVideo?: string
}

export interface Category {
  id: string
  titleKey: TranslationKey
  addins: Addin[]
}

export const manualContent: Category[] = [
  {
    id: "general",
    titleKey: "manualCategoryGeneral",
    addins: [
      {
        id: "open-model-folder",
        titleKey: "featureOpenModelFolder",
        descriptionKey: "manualOpenModelFolderDesc",
        steps: [],
      },
    ],
  },
  {
    id: "navigation",
    titleKey: "manualCategoryNavigation",
    addins: [
      {
        id: "search-view",
        titleKey: "featureSearchView",
        descriptionKey: "manualSearchViewDesc",
        image: {
          src: "https://placehold.co/1200x700.png",
          alt: "Search View in action",
          dataAiHint: "software interface screenshot"
        },
        steps: [
          "manualSearchViewStep1",
          "manualSearchViewStep2",
          "manualSearchViewStep3",
          "manualSearchViewStep4",
          "manualSearchViewStep5",
        ],
        usageVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
      },
    ],
  },
  {
    id: "management",
    titleKey: "manualCategoryManagement",
    addins: [
       { id: "merge-parameter", titleKey: "featureMergeParameter", descriptionKey: "manualMergeParameterDesc", steps: [] },
       { id: "freeze-elements", titleKey: "featureFreezeElements", descriptionKey: "manualFreezeElementsDesc", steps: [] },
       { id: "super-match", titleKey: "featureSuperMatch", descriptionKey: "manualSuperMatchDesc", steps: [] },
       { id: "change-parameter", titleKey: "featureChangeParameter", descriptionKey: "manualChangeParameterDesc", steps: [] },
       { id: "select-by-parameter", titleKey: "featureSelectByParameter", descriptionKey: "manualSelectByParameterDesc", steps: [] },
    ],
  },
   {
    id: "structures",
    titleKey: "manualCategoryStructures",
    addins: [
       { id: "show-rebar", titleKey: "featureShowRebar", descriptionKey: "manualShowRebarDesc", steps: [] },
       { id: "solid-rebar", titleKey: "featureSolidRebar", descriptionKey: "manualSolidRebarDesc", steps: [] },
       { id: "ungroup-rebar", titleKey: "featureUngroupRebar", descriptionKey: "manualUngroupRebarDesc", steps: [] },
       { id: "host-sync", titleKey: "featureHostSync", descriptionKey: "manualHostSyncDesc", steps: [] },
    ],
  },
]
