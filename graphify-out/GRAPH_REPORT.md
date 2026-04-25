# Graph Report - saferplast_DONTDELETE  (2026-04-25)

## Corpus Check
- 52 files · ~503,891 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 114 nodes · 83 edges · 5 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `fetch()` - 11 edges
2. `renderRouteHtml()` - 6 edges
3. `getAllowedOrigin()` - 3 edges
4. `buildCorsHeaders()` - 3 edges
5. `canFailOpenOnTurnstileError()` - 3 edges
6. `useCarousel()` - 3 edges
7. `replaceMetaByName()` - 2 edges
8. `replaceMetaByProperty()` - 2 edges
9. `replaceCanonical()` - 2 edges
10. `replaceTitle()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `GeoServicePage()` --calls--> `getGeoPageSeo()`  [INFERRED]
  src/features/seo/geo-service-page.tsx → src/lib/seo/route-seo.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.31
Nodes (12): buildCorsHeaders(), canFailOpenOnTurnstileError(), checkAndConsumeRateLimit(), fetch(), formatTelegramMessage(), getAllowedOrigin(), getClientIp(), jsonResponse() (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.36
Nodes (6): renderRouteHtml(), replaceCanonical(), replaceJsonLd(), replaceMetaByName(), replaceMetaByProperty(), replaceTitle()

### Community 4 - "Community 4"
Cohesion: 0.6
Nodes (3): CarouselNext(), CarouselPrevious(), useCarousel()

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (2): GeoServicePage(), getGeoPageSeo()

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (2): CalculatorEntryModal(), getContextDraft()

## Knowledge Gaps
- **Thin community `Community 6`** (4 nodes): `GeoServicePage()`, `getGeoPageSeo()`, `geo-service-page.tsx`, `route-seo.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (3 nodes): `CalculatorEntryModal()`, `getContextDraft()`, `calculator-entry-modal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._